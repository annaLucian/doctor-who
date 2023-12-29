import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Search from '@/components/Search';
import SocialLinks from '@/components/SocialLinks';
import {
  StyledHeader,
  StyledNavBar,
  StyledBurger,
} from '@/components/Header/header.styles';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <StyledHeader>
      <div className="header__logoIcon--mobile">
        <Link href="/">
          <picture>
            <Image
              src="/assets/img/logos/logo.png"
              width={100}
              height={100}
              alt="logo of the serie"
            />
          </picture>
        </Link>

        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </div>
      <StyledNavBar open={open}>
        <ul className="header__links">
          <li>
            <Link
              // onClick={() => setOpen(!open)}
              href="/characters"
              className={`${pathname === '/characters' ? 'active' : ''}`}
            >
              Conoce a
            </Link>
          </li>
          <li>
            <Link
              // onClick={() => setOpen(!open)}
              href="/doctors"
              className={`${pathname === '/doctors' ? 'active' : ''}`}
            >
              Doctores
            </Link>
          </li>
          <li>
            <Link
              // onClick={() => setOpen(!open)}
              href="/contact"
              className={`${pathname === '/contact' ? 'active' : ''}`}
            >
              Contacto
            </Link>
          </li>
        </ul>
        <div className="header__logoIcon--desktop">
          <Link href="/">
            <picture>
              <Image
                src="/assets/img/logos/logo.png"
                width={100}
                height={100}
                alt="logo of the serie"
              />
            </picture>
          </Link>
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
