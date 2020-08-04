import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';

function CadatroCategoria() {
    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [values, setValues] = useState(valoresIniciais); // chaves no nome da variavel abre o array que esta recebendo

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // deixa a chave dinâmica
        });
    }

    function handleChange(infoEvento) {
        const { getAttribute, value } = infoEvento.target;
        setValue(
            infoEvento.target.getAttribute('name'),
            infoEvento.target.value
        );

    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias, //coloca todos os itens que ja tem dentro da lista
                    values
                ]);
                setValues(valoresIniciais);
            }}>
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição:"
                    type="????"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadatroCategoria;