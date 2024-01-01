import React from 'react';
import Email from './Email';
import Footer from './Footer';
import Navbar from './Navbar';
import Social from './Social';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  return (
    <>
      <Navbar />
      <main
        className={`${className}`}
      >
        {children}
      </main>
      <Footer />
      <Social />
      <Email />
    </>
  );
};

export default Layout;
