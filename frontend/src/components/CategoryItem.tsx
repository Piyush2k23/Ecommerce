
interface ItemsProps {
  id: number;
  img: string;
  title: string;
}

interface CategoryItemProps {
  item: ItemsProps;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item }) => {
  return (
    <div className='my-1 md:my-4 mx-2 mt-4 md:mx-3 w-full h-[40vh] relative hover:opacity-90'>
      <img src={item.img} alt={item.title} className='w-full h-full md:w-full md:h-full object-cover' />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
      <h3 className='text-xl font-bold hover:scale-110'>{item.title}</h3>
      <button className='bg-white text-gray-600 mt-3 p-2 rounded-sm hover:bg-gray-300 hover:scale-110'>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;