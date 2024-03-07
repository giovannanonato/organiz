import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    login: '',
    senha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [mensagensErro, setMensagensErro] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('http://localhost:5000/receber-dados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const resultado = await resposta.json();

      if (resultado.erro) {
        // Exibe mensagens de erro no console.log ou em algum local visível
        console.error('Erro no servidor:', resultado.mensagens);

        // Atualiza o estado com as mensagens de erro para exibição no formulário
        setMensagensErro(resultado.mensagens);
      } else {
        // Dados foram processados com sucesso
        console.log('Dados processados com sucesso!', resposta);

        navigate('/entrar')
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div>
      <header className="imagem">
        <img src="img/thumbnail_OrganiZ__1_-removebg-preview.png" alt="logo" height="50px" />
        <h1 className="nome2">Organi<span>Z</span></h1>
      </header>
      <div className="cor_fundo">

        <div id="main-container" className="formLogin">
          <h1>Login</h1>
          {mensagensErro.length > 0 && (
            <div style={{ color: 'red' }}>
              <p>Erro ao processar os dados:</p>
              <ul>
                {mensagensErro.map((mensagem, index) => (
                  <li key={index}>{mensagem.mensagem}</li>
                ))}
              </ul>
            </div>
          )}

          <form id="register-form" name="formulario" className="form" action="" method="post" onSubmit={handleSubmit}>


            <div className="half-box spacing">
              <label htmlFor="nome" className="form_label">Nome de usuário</label>
              <input type="text" name="login" className="form_input" id="login" placeholder="Nome de usuário" required data-required data-min-length="3" data-max-length="40" value={formValues.login} onChange={handleChange} />
            </div>

            <div className="half-box spacing">
              <label htmlFor="lastname" className="form_label">Insira sua senha</label>
              <input type="password" name="senha" className="form_input" id="senha" placeholder="Insira sua senha"
                data-password-validate data-required value={formValues.senha} onChange={handleChange} />
            </div>


            <div className="full-box">
              <input className="botaao" type="submit" value="Entrar" />
              {/*<Link className = "botaao" type = "submit" to = "/entrar">Entrar</Link>*/}
            </div>


          </form>
        </div>
      </div>
      <p className="error-validation template"></p>
      <script src="js/script.js"></script>
    </div>
  )
}

export default Form;