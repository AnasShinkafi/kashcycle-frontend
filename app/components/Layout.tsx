import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({
  children, hideNavbarAndFooter
}: {
children: React.ReactNode
hideNavbarAndFooter: string
}) => {

  if (hideNavbarAndFooter) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;