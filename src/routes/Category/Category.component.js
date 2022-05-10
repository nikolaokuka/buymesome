import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard.component';
import { CategoryTitle, CategoryContainer } from './Category.styles';
import { selectCategories } from '../../store/user/categories/categories.selectors';

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

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
