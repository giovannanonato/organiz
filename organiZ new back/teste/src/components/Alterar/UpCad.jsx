import React, { useState, useEffect } from 'react';
import Header2 from "../News/Header2";
import './UpCad.css';

const AlterarCadastro = () => {
    const [userData, setUserData] = useState({
        nome: '',
        datanasc: '',
        email: '',
        senha: '',
        id: '' // Adicionando id ao estado
    });

    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('ID'));
        if (storedUserData) {
            setUserData(prevState => ({
                ...prevState,
                id: storedUserData // Define o ID recuperado do localStorage
            }));
            console.log(storedUserData)
            // Enviar apenas o ID para o backend no momento do carregamento
            enviarIdParaBackend(storedUserData);
        }
    }, []);

    // Função para enviar apenas o ID para o backend
    const enviarIdParaBackend = async (id) => {
        console.log(id)
        try {
            const response = await fetch('http://localhost:5000/receber-dados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id // Envia apenas o ID para o backend
                })
            });
            const data = await response.json();
            console.log(data)
            if (Array.isArray(data) && data.length >= 4) {
                // Atualiza o estado userData com os dados recebidos
                setUserData({
                    nome: data[2],
                    datanasc: data[0],
                    email: data[3],
                    senha: "", // Como a senha não é retornada do backend, mantenha-a vazia ou mantenha o valor existente
                    id: userData.id // mantém o ID existente no estado
                });
            }else {
                console.log('Usuário não encontrado');
            }
        } catch (error) {
            console.error('Erro ao enviar dados para o backend:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados atualizados para o backend
    };

    return (
        <div id="div_color">
            <Header2 />
            <section id="main-container">
                <h1 className="name">Alterar Cadastro</h1>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="id" value={userData.id} /> {/* Campo "id" invisível */}
                    <div className="title">
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="nome" value={userData.nome} onChange={handleChange} />
                    </div>
                    <div className="date">
                        <label htmlFor="dateOfBirth">Data de Nascimento:</label>
                        <input type="date" id="dateOfBirth" name="datanasc" value={userData.datanasc} onChange={handleChange} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} />
                    </div>
                    <div className="senha">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="senha" value={userData.senha} onChange={handleChange} />
                    </div>
                    <button className='savealt' type="submit">Salvar Alterações</button>
                </form>
            </section>
        </div>
    );
};

export default AlterarCadastro;
