import conexao

pedir = int(input("Selecione a informação que você deseja alterar, digite 1 para alterar o nome, 2 para alterar a data de nascimento, 3 para alterar o email, 4 para alterar a senha e 5 para alterar o plano: "))

def atualizar_nome(id_nome, novo_nome):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE cadastros SET NOME_CAD = %s WHERE ID = %s"
    val = (novo_nome, id_nome)

    cursor.execute(sql, val)
    conex.commit()

    print("Nome do cadastro atualizado com sucesso!")
    conex.close()


def atualizar_data_nasc(id_data, nova_data):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE cadastros SET DATA_NASC = %s WHERE ID = %s"
    val = (nova_data, id_data)

    cursor.execute(sql, val)
    conex.commit()

    print("Data de nascimento atualizada com sucesso!")
    conex.close()


def atualizar_email(id_email, novo_email):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE cadastros SET EMAIL = %s WHERE ID = %s"
    val = (novo_email, id_email)

    cursor.execute(sql, val)
    conex.commit()

    print("Email atualizado com sucesso!")
    conex.close()


def atualizar_senha(id_senha, nova_senha):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE cadastros SET SENHA_CAD = %s WHERE ID = %s"
    val = (nova_senha, id_senha)

    cursor.execute(sql, val)
    conex.commit()

    print("Senha atualizada com sucesso!")
    conex.close()

def confir_senha(id_confir, novo_confir):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE cadastros SET CONFIR_SENHA = %s WHERE ID = %s"
    val = (novo_confir, id_confir)

    cursor.execute(sql, val)
    conex.commit()
    conex.close()


def atualizar_plano(id_plano, novo_plano):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE cadastros SET ID_PLANOS = %s WHERE ID = %s"
    val = (novo_plano, id_plano)

    cursor.execute(sql, val)
    conex.commit()

    print("Plano atualizado com sucesso!")
    conex.close()


if pedir == 1:
    id_nome = int(input("Digite o ID do nome que deseja alterar: "))
    novo_nome = str(input("Insira o novo nome: "))
    atualizar_nome(id_nome, novo_nome)

if pedir == 2:
    id_data = int(input("Digite o ID da data de nascimento que deseja alterar: "))
    nova_data = str(input("Insira a nova data (AAAA-MM-DD): "))
    atualizar_data_nasc(id_data, nova_data)

if pedir == 3:
    id_email = int(input("Digite o ID do email que deseja alterar: "))
    novo_email = str(input("Insira o novo email: "))
    atualizar_email(id_email, novo_email)

if pedir == 4:
    id_senha = int(input("Digite o ID da senha que deseja alterar: "))
    nova_senha = str(input("Insira a nova senha: "))
    atualizar_senha(id_senha, nova_senha), 
    confir_senha(id_senha, nova_senha)

if pedir == 5:
    id_plano = int(input("Digite o ID do plano que deseja alterar: "))
    novo_plano = int(input("Insira o ID do novo plano (gratuito: 1, mensal: 2, anual: 3): "))
    atualizar_plano(id_plano, novo_plano)

#else:
#    print("Digite uma opção válida, execute novamente.")