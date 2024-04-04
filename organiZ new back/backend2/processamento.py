from gravar_bd import (
    inserir_cadastro, 
    verificar_login)
from validacoes import (
    validar_nome,
    validar_data_nascimento,
    validar_email,
    validar_senha,
    confirmar_senha
)
from select_upcad import (
    selecionar_cadastro
)


def processar_dados(dados):

    if dados.get('nome') != None:
        ret= processar_dados_cad(dados)
        return ret 
    elif dados.get('email') != None:
        ret= processar_dados_log(dados) 
        return ret 
    elif dados.get('id') != None:
        ret = selecionar_cadastro(dados.get('id', ''))
        return ret
    elif dados.get('datanasc') != None:
        #ret = update_dados(dados)
        #return ret
        pass

def processar_dados_cad(dados):
    # Função para processar os dados recebidos do Flask
    # Retorna os dados processados
    dados_processados = dados

    lista= []

    lista.append(dados_processados.get('nome'))
    lista.append(dados_processados.get('dataNascimento'))
    lista.append(dados_processados.get('email'))
    lista.append(dados_processados.get('senha'))
    lista.append(dados_processados.get('confirma'))
    lista.append('1')
    

    mensagens_erro = []

    # Chama a função para gravar os dados em um arquivo
      
    mensagens_erro.append(validar_nome(dados.get('nome', '')))
    mensagens_erro.append(validar_data_nascimento(dados.get('dataNascimento', '')))
    mensagens_erro.append(validar_email(dados.get('email', '')))
    mensagens_erro.append(validar_senha(dados.get('senha', '')))
    mensagens_erro.append(confirmar_senha(dados.get('senha', ''),dados.get('confirma', '')))


    # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        inserir_cadastro(lista)
        # Retorna os dados processados
        return {'erro': False, 'mensagem': 'Dados Processados com Sucesso!'}
    

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
  
    mensagens_erro.append(validar_email(dados.get('email', '')))
    mensagens_erro.append(validar_senha(dados.get('senha', '')))

        # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        dados_log = verificar_login((dados.get('email', '')), (dados.get('senha', '')))
        return {'erro': False, 'mensagens': dados_log}


def update_dados(dados):

    dados_processados = dados
    update= []

    
    update.append(dados_processados.get('datanasc'))
    update.append(dados_processados.get('nome'))
    update.append(dados_processados.get('email'))
    update.append(dados_processados.get('senha'))
    mensagens_erro = []

    mensagens_erro.append(validar_email(dados.get('email', '')))
    mensagens_erro.append(validar_senha(dados.get('senha', '')))
    mensagens_erro.append(validar_nome(dados.get('nome', '')))
    mensagens_erro.append(validar_data_nascimento(dados.get('dataNascimento', '')))

    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        selecionar_cadastro
        return{'mensagem': 'atualização'}