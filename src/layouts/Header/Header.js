import React from 'react';
import Logo from '../../layouts/Logo/Logo'
import PDFButton from '../../components/Buttons/PDFButton';



const Header = () => {
  return (
    <header>
      <div className="header__logo">
        <Logo logoStyle='darkGreen' size='large' />
      </div>
      <div className="header__pdf-btn">
        <PDFButton modifier='secondary' destination='home' />
      </div>
    </header>
  )

};

export default Header;
