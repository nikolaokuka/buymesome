import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.component';
import Category from '../Category/Category.component';

const Shop = () => (
  <Routes>
    <Route index element={<CategoriesPreview />} />
    <Route path=':category' element={<Category />} />
  </Routes>
);

export default Shop;
