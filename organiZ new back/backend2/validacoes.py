import re
from datetime import datetime


def validar_nome(nome):
    if len(nome) < 3 or ' ' not in nome:
        return {'erro': True, 'mensagem': 'O nome deve ter pelo menos 3 caracteres e conter um espaço.'}
    return {'erro': False, 'mensagem': ''}


def validar_data_nascimento(dataNascimento):
    try:
        dataNascimento = datetime.strptime(dataNascimento, '%Y-%m-%d')
        idade = datetime.now().year - dataNascimento.year
        if idade < 16:
            return {'erro': True, 'mensagem': 'Você deve ter pelo menos 16 anos.'}
        return {'erro': False, 'mensagem': ''}
    except ValueError:
        return {'erro': True, 'mensagem': 'Data de nascimento inválida.'}


def validar_email(email):
    #utilizando uma expressao regular simples para validar o formato do e-mail
    padrao_email = r'^\S+@\S+\.\S+$'
    if not re.match(padrao_email, email):
        return {'erro': True, 'mensagem': 'E-mail inválido.'}
    return {'erro': False, 'mensagem': ''}


def validar_senha(senha):
    # Adicione suas próprias regras de validação para senha aqui
    # Por exemplo, garantir que a senha contenha pelo menos um caractere maiúsculo, um minúsculo, um número e um caractere especial
    if not any(c.isupper() for c in senha) or not any(c.islower() for c in senha) or not any(c.isdigit() for c in senha) or not any(c in "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~" for c in senha):
        return {'erro': True, 'mensagem': 'A senha deve atender a requisitos específicos.'}
    return {'erro': False, 'mensagem': ''}


def confirmar_senha(senha, confirma):

    if senha != confirma:
        return {'erro': True, 'mensagem': 'As senhas devem ser iguais'}
    return {'erro': False, 'mensagem': ''}