from gravar_bd import inserir_cadastro
from validacoes import (
    validar_nome,
    validar_data_nascimento,
    validar_email,
    validar_senha,
    confirmar_senha
)



def processar_dados(dados):
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
    if (dados_processados.get('login') == None):
        
        mensagens_erro.append(validar_nome(dados.get('nome', '')))
        mensagens_erro.append(validar_data_nascimento(dados.get('dataNascimento', '')))
        mensagens_erro.append(validar_email(dados.get('email', '')))
        mensagens_erro.append(validar_senha(dados.get('senha', '')))
        mensagens_erro.append(confirmar_senha(dados.get('senha', ''),dados.get('confirma', '')))

    else:

        mensagens_erro.append(validar_nome(dados.get('login', '')))
        mensagens_erro.append(validar_senha(dados.get('senha', '')))

        # Remove mensagens de erro vazias
    mensagens_erro = [msg for msg in mensagens_erro if msg['erro']]

    print(mensagens_erro)

  
    if mensagens_erro:
        return {'erro': True, 'mensagens': mensagens_erro}
    else:
        if (dados_processados.get('login') == None):
            #gravar_em_arquivo(dados_processados)
            inserir_cadastro(lista)
        else:
            inserir_cadastro(lista)
        # Retorna os dados processados
        return {'erro': False, 'mensagem': 'Dados Processados com Sucesso!'}
    

