from validacoes import (
    validar_login,
    validar_senha_login
)
def processar_dados_log(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados

    lista= []

    lista.append(dados_processados.get('login'))
    lista.append(dados_processados.get('senha_login'))
    lista.append('1')
    

    mensagens_erro = []

    # Chama a função para gravar os dados em um arquivo
    if (dados_processados.get('login') == None):
        
        mensagens_erro.append(validar_login(dados.get('login', '')))
        mensagens_erro.append(validar_senha_login(dados.get('senha_login', '')))

        # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

  
    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}

    

