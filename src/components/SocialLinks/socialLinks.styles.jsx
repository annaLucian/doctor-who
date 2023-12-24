import styled from 'styled-components';

export const StyledLinks = styled.ul`
  display: flex;
  gap: 1.2rem;
  & li {
    list-style: none;
  }
  @media (min-width: 1000px) {
    &.socialLinks li svg path {
      transition: all ease 0.8s;
    }
    &.socialLinks li:hover svg path {
      fill: #ffc67e;
    }
  }
`;
