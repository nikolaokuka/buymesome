import { CartItemContainer, ItemDetails } from './CartItem.styles';

const CartItem = ({ cartItem: { name, price, imageUrl, quantity, }}) => (
  <CartItemContainer>
    <img
      src={imageUrl}
      alt={name}
    />
    <ItemDetails>
      <span className='name'>{name}</span>
      <span className='price'>{quantity} x ${price}</span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
