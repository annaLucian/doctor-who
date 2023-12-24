import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search';
import SocialLinks from '../SocialLinks';
import { StyledNavBar, StyledBurger } from './header.styles';
import { useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <StyledNavBar open={open}>
        <ul>
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
      </StyledNavBar>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <picture>
        <Image
          src="/assets/img/logos/logo.png"
          width={100}
          height={100}
          alt="logo of the serie"
        />
      </picture>
      <Search />
      <SocialLinks />
    </header>
  );
}
