import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 60vw;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 95vw;
    font-size: 18px;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

type ImageContainerProps = {
  span?: string;
};

export const ImageContainer = styled.div<ImageContainerProps>`
  grid-column: ${({ span }) => span ? span : 'span 7'};
  padding-right: 15px;

  img {
    width: 100%;
    height: 190px;
    display: block;

    @media screen and (max-width: 1200px) {
      height: 150px;
    }

    @media screen and (max-width: 1000px) {
      height: 120px;
    }

    @media screen and (max-width: 800px) {
      height: 150px;
    }

    @media screen and (max-width: 600px) {
      height: 100px;
    }

    @media screen and (max-width: 500px) {
      height: 80px;
    }
  }
`;

type BaseSpanProps = {
  span?: string;
};

export const BaseSpan = styled.span<BaseSpanProps>`
  grid-column: ${({ span }) => span ? span : 'span 7'};
`;

type QuantityProps = {
  span?: string;
};

export const Quantity = styled(BaseSpan)<QuantityProps>`
  display: flex;
  grid-column: ${({ span }) => span ? span : 'span 7'};
`;

type ArrowProps = {
  left?: boolean;
};

export const Arrow = styled.div<ArrowProps>`
  cursor: pointer;
  margin-left: ${({ left }) => left && '5px'};
`;

type ValueProps = {
  span?: string;
};

export const Value = styled.div<ValueProps>`
  margin: 0 10px;
  grid-column: ${({ span }) => span ? span : 'span 7'};
`;

type RemoveButtonProps = {
  span?: string;
};

export const RemoveButton = styled.div<RemoveButtonProps>`
  grid-column: ${({ span }) => span ? span : 'span 7'};
  padding-left: 12px;
  cursor: pointer;
  justify-self: end;
`;
