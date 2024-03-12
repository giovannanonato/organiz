import conexao

pedir  = int(input("Selecione a informação que deseja alterar, digite 1 para alterar o titulo, 2 para alterar a data, 3 para alterar o horario, 4 para alterar a classificação, 5 para alterar a descrição e 6 para alterar o usuário: "))

def atualizar_titulo(id_titulo, novo_titulo):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE todolist SET TITULO = %s WHERE ID = %s"
    val = (novo_titulo, id_titulo)

    cursor.execute(sql, val)
    conex.commit()

    print("Titulo atualizado com sucesso!")
    conex.close()


def atualizar_data(id_data, nova_data):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE todolist SET DATA_TODO = %s WHERE ID = %s"
    val = (nova_data, id_data)

    cursor.execute(sql, val)
    conex.commit()

    print("Data atualizada com sucesso!")
    conex.close()


def atualizar_horario(id_hora, novo_hora):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE todolist SET HORARIO = %s WHERE ID = %s"
    val = (novo_hora, id_hora)

    cursor.execute(sql, val)
    conex.commit()

    print("Horario atualizado com sucesso!")
    conex.close()


def atualizar_classificacao(id_classificacao, novo_classificacao):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE todolist SET CLASSIFICACAO = %s WHERE ID = %s"
    val = (novo_classificacao, id_classificacao)

    cursor.execute(sql, val)
    conex.commit()

    print("Classificação atualizada com sucesso!")
    conex.close()


def atualizar_descricao(id_descricao, novo_descricao):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE todolist SET DESCRICAO = %s WHERE ID = %s"
    val = (novo_descricao, id_descricao)

    cursor.execute(sql, val)
    conex.commit()

    print("Descrição atualizada com sucesso!")
    conex.close()


def atualizar_usuario(id_usuario, novo_usuario):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE todolist SET ID_CADASTRO = %s WHERE ID = %s"
    val = (novo_usuario, id_usuario)

    cursor.execute(sql, val)
    conex.commit()

    print("Cadastro atualizado com sucesso!")
    conex.close()


if pedir == 1:
    id_titulo = int(input("Insira o ID do titulo que deseja alterar: "))
    titulo = str(input("Insira o novo titulo: "))
    atualizar_titulo(id_titulo, titulo)

if pedir == 2:
    id_data = int(input("Insira o ID da data que deseja alterar: "))
    data = str(input("Insira a nova data: "))
    atualizar_data(id_data, data)

if pedir == 3:
    id_hora = int(input("Insira o ID do horario que deseja alterar: "))
    hora = str(input("Insira o novo horario: "))
    atualizar_horario(id_hora, hora)

if pedir == 4:
    id_classificacao = int(input("Insira o ID da classificação que deseja alterar: "))
    classificacao = str(input("Insira a nova classificação: "))
    atualizar_classificacao(id_classificacao, classificacao)

if pedir == 5: 
    id_descricao = int(input("Insira o ID da descrição que deseja alterar: "))
    descricao = str(input("Insira a nova descrição: "))
    atualizar_descricao(id_descricao, descricao)

if pedir == 6:
    id_cadastro = int(input("Insira o ID do cadastro: "))
    cadastro = int(input("Insira o ID do novo cadastro: "))
    atualizar_usuario(id_cadastro, cadastro)
