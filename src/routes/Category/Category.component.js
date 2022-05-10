import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard.component';
import { CategoryTitle, CategoryContainer } from './Category.styles';
import { selectCategoriesMap } from '../../store/user/categories/categories.selectors';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products && products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
