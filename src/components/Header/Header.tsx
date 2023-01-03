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
    <header className={headerStyles.header}>
      <h2>
        {title}
        <Link href={mainStyles.link} className="px-4">
          Learn more
        </Link>
      </h2>
    </header>
  );
}

export default Header;
