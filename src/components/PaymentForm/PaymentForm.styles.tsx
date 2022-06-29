import styled from 'styled-components';
import Button from '../Button/Button.component';

export const PaymentFormContainer = styled.div`
  margin: 20px 0;
  width: 95vw;
`;

export const FormContainer = styled.form`
  width: 95vw;
  display: grid;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
