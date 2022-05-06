import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
