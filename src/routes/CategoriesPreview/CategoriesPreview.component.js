import { useSelector } from 'react-redux';

import { selectCategories } from '../../store/categories/categories.selectors';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

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
