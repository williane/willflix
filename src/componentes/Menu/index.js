import React from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button';

//import ButtonLink from './componets/ButtonLink';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={LogoMain} alt="Aluraflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;