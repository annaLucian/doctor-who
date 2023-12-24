import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search';
import SocialLinks from '../SocialLinks';
import { StyledHeader, StyledNavBar, StyledBurger } from './header.styles';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <StyledHeader>
      <div className="header__logoIcon--mobile">
        <picture>
          <Image
            src="/assets/img/logos/logo.png"
            width={100}
            height={100}
            alt="logo of the serie"
          />
        </picture>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </div>
      <StyledNavBar open={open}>
        <ul className="header__links">
          <li>
            <Link href="/characters">Conoce a</Link>
          </li>
          <li>
            <Link href="/doctors">Doctores</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
        <div className="header__logoIcon--desktop">
          <picture>
            <Image
              src="/assets/img/logos/logo.png"
              width={100}
              height={100}
              alt="logo of the serie"
            />
          </picture>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </div>
        <div className="header__SearchLinks">
          <Search />
          <SocialLinks />
        </div>
      </StyledNavBar>
    </StyledHeader>
  );
}
