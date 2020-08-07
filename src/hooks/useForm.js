import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  // chaves no nome da variavel abre o array que esta recebendo
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // deixa a chave dinâmica
    });
  }

  function handleChange(infoEvento) {
    setValue(
      infoEvento.target.getAttribute('name'),
      infoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
