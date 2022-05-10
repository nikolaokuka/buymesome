import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/user/categories/categories.selectors';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

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
