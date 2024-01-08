import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories: React.FC = () => {
  return (
    <div className='flex flex-col sm:flex-row md:w-full overflow-x-hidden'>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;