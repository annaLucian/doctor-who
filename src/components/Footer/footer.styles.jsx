import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  padding: 2rem;
  border-top: 0.1rem solid white;
  justify-content: space-between;
  .social-links {
    display: flex;
    gap: 1.2rem;
  }
  .social-links li {
    list-style: none;
  }

  @media (min-width: 1000px) {
    padding: 1rem 6rem;
    .social-links li svg path {
      transition: all ease 0.8s;
    }
    .social-links li:hover svg path {
      fill: #ffc67e;
    }
  }
  @media (min-width: 1600px) {
    padding: 1rem 8rem;
  }
`;
