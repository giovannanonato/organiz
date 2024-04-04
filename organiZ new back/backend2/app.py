from flask import Flask, request, jsonify
from flask_cors import CORS
from processamento import processar_dados
from select_upcad import selecionar_cadastro

# from processamento import processar_dados  # Importe a função processar_dados

app = Flask(__name__)
CORS(app)  # Permita solicitações CORS


@app.route('/receber-dados', methods=['POST'])
def receber_dados():
    dados = request.json
    ret = dados  # processar_dados(dados)  # Chame a função processar_dados
    ret = processar_dados(dados)
    print(dados)
    
    print('************************************************************************\n')
    print(ret)
    print('************************************************************************\n')
    return jsonify(ret)


@app.route('/login', methods=['POST'])  # Adicionado: rota para lidar com o login
def login():
    dados = request.json
    
    # Selecione o cadastro do usuário com base nos dados recebidos
    email = dados.get('email')
    senha = dados.get('senha')
    dados_usuario = selecionar_cadastro(email, senha)
    
    # Verifique se o cadastro foi encontrado
    if dados_usuario:
        mensagem = 'Login bem-sucedido'
    else:
        mensagem = 'Email ou senha incorretos'

    # Retorne a mensagem e os dados do usuário (se encontrados)
    return jsonify({'mensagem': mensagem, 'dados_usuario': dados_usuario})


if __name__ == '__main__':
    app.run(debug=True)
