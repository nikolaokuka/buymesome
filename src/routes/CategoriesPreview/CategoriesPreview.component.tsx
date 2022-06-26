import { useSelector } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner.component';

import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selectors';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading
        ? <Spinner />
        : Object.keys(categories).map((title) => {
            const products = categories[title];

            return (
              <CategoryPreview
                key={title}
                title={title}
                products={products}
              />
            );
          })
      }
    </>
  );
};

export default CategoriesPreview;
