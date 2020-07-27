import React from 'react';
import Logo from '../../assets/img/Logo.png';
import '../Menu/Menu.css';
import Button from '../Button';

// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img classname="Logo" src={Logo} alt="AluraFlix logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video teste
      </Button>
    </nav>
  );
}

export default Menu;