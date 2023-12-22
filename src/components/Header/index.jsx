import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search';
import { StyledNavBar, StyledBurger } from './header.styles';
import { useRef, useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  return (
    <header>
      <div ref={node}>
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
      </div>

      <picture>
        <Image
          src="/assets/img/logos/logo.png"
          width={100}
          height={100}
          alt="logo of the serie"
        />
      </picture>
      <Search />
      <ul>
        <li>
          <a href="" target="_blank">
            <Image
              src="/assets/img/icons/facebook.svg"
              width={25}
              height={25}
              alt="logo facebook"
            />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <Image
              src="/assets/img/icons/simple-icons_x.svg"
              width={24}
              height={24}
              alt="logo twitter"
            />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <Image
              src="/assets/img/icons/mdi_instagram.svg"
              width={26}
              height={26}
              alt="logo isntagram"
            />
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <Image
              src="/assets/img/icons/ic_baseline-tiktok.svg"
              width={26}
              height={26}
              alt="logo tiktok"
            />
          </a>
        </li>
      </ul>
    </header>
  );
}
