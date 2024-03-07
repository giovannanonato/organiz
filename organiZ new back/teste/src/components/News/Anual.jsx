import './Login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirma: '',
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

        navigate('/alogin')
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

        <div id="main-container">
          <h1>Cadastro Anual</h1>
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
              <label htmlFor="nome" className="form_label" id = "espaço_nome">Nome completo</label>
              <input type="text" name="nome" className="form_input" id="nome" placeholder="Nome completo" required data-required data-min-length="3" data-max-length="40" value={formValues.nome} onChange={handleChange} />
            </div>

            <div className="form_grupo">
              <label htmlFor="data" className="form_label">Data de nascimento</label>
              <input type="date" name="dataNascimento" className="form_input" id="dataNascimento" required value={formValues.dataNascimento} onChange={handleChange} />
            </div>

            <div className="full-box">
              <label htmlFor="email" className="form_label">Email</label>
              <input type="email" name="email" className="form_input" id="email" placeholder="seuemail@email.com"
                data-email-validate value={formValues.email} onChange={handleChange} />
            </div>

            <div className="half-box spacing">
              <label htmlFor="lastname" className="form_label">Crie sua senha</label>
              <input type="password" name="senha" className="form_input" id="senha" placeholder="Digite sua senha"
                data-password-validate data-required value={formValues.senha} onChange={handleChange} />
            </div>

            <div className="half-box">
              <label htmlFor="passconfirmation" className="form_label">Confirme sua senha</label>
              <input type="password" name="confirma" className="form_input" id="confirma" placeholder="Digite sua senha"
                data-equal="password" value={formValues.confirma} onChange={handleChange} />
            </div>


            <div className="full-box">
              {/*<Link id = "button" to = "/glogin">Registrar</Link>*/}
              <input className="botaao" type="submit" value="Registrar" />
              <input className="botaao" type="submit" value="Cancelar" />
            </div>

            <div>
              <input type="checkbox" name="agreement" id="agreement" />
              <label htmlFor="agreement" id="agreement-label">
                Eu li e aceito os <a href="#">Termos de Uso</a></label>
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