import Link from 'next/link';
import React from 'react';
import mainStyles from '../../styles/main.module.scss';
import headerStyles from './header.module.scss';
export interface HeaderProps {
  title: string;
  link: string;
}

function Header({ title, link }: HeaderProps) {
  return (
    <header>
      <section className={headerStyles.header__top}>
        <h2>
          {title}
          <Link className={mainStyles.link} href={link}>
            Learn more
          </Link>
        </h2>
      </section>
      <nav></nav>
    </header>
  );
}

export default Header;
