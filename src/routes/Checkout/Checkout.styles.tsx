import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 60vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    width: 95vw;
  }
`;

export const CheckoutHeader = styled.div`
  width: 60vw;
  padding: 10px 0;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 800px) {
    width: 95vw;
  }
`;

type HeaderBlockProps = {
  span?: string;
};

export const HeaderBlock = styled.div<HeaderBlockProps>`
  grid-column: ${({ span }) => span ? span : 'span 7'};
  text-transform: capitalize;

  &:last-child {
    justify-self: end;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
