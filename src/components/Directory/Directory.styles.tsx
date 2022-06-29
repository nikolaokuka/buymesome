import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    grid-column-gap: 0;
  }
`;
