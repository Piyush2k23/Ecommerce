
class APIFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;

    // search() {
    //     const keyword = this.queryString.keyword ? {
    //         name: {
    //             $regex: queryString.keyword,
    //             $options: 'i' 
    //         }
    // }: {}
   
    //     this.query =  this.query.find({...keyword});
    //     return this;
    //  }

    //  filter(){
    //     const queryCopy = { ...queryString };

    //     const removeFields = ['keyword', 'limit', 'page'];
    //  }
 }
 
}


export default APIFeatures;