class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    const keyword = this.queryString.keyword
      ? {
          name: {
            $regex: queryString.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {

    const queryCopy = { ...this.queryString };
    
    // Removing fields for query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach(removeField => delete queryCopy[removeField]);  

    //Advance filter for price, ratings 
    let queryString = JSON.stringify(queryCopy); 
    queryString = queryString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
  
    this.query = this.query.find(JSON.parse(queryString));

    return this;
  }


   pagination(resultPerPage) {
     
     const currentPage = Number(this.queryString.page) || 1;
     const skip = resultPerPage * (currentPage - 1);

     this.query = this.query.limit(resultPerPage).skip(skip);

     return this;
   }

}

export default APIFeatures;
