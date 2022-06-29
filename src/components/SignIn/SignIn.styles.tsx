import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 900px) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 930px) {
      flex-direction: column;
    }
`;
