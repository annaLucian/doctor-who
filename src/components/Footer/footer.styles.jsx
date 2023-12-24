import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 2rem;
  border-top: 0.1rem solid white;
  justify-content: space-between;

  @media (min-width: 1000px) {
    padding: 2rem 6rem;
  }
  @media (min-width: 1600px) {
    padding: 3rem 8rem;
  }
`;
