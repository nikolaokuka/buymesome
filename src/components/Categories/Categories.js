import './Categories.scss';
import Category from '../Category/Category';

const Categories = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
