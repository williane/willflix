import React from 'react';
import PageDefault from '../../../componentes/PageDefault';
import { Link } from 'react-router-dom';

function CadatroVideo(){
    return(
        <PageDefault>
            <h1>Cadastro de Video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageDefault>
    );
}

export default CadatroVideo;