import React from 'react';
import LogoMain from '../../assets/img/LogoMain.png'
import './Menu.css'
import Button from '../Button'

//import ButtonLink from './componets/ButtonLink';


function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={LogoMain} alt="Aluraflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;