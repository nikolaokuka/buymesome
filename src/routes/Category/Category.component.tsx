import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard.component';
import Spinner from '../../components/Spinner/Spinner.component';

import { selectCategories, selectCategoriesIsLoading } from '../../store/categories/categories.selectors';

import { CategoryTitle, CategoryContainer } from './Category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading
        ? <Spinner />
        : <CategoryContainer>
          {products && products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </CategoryContainer>
      }
    </>
  );
};

export default Category;
