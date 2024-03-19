import conexao

pedir = int(input("Selecione a tabela que deseja inserir os dados, digite 1 para cadastros, 2 para todolist, 3 para checklist e 4 para anotações: "))

def inserir_cadastro(id, nome, datanasc, email, senha, confir, idplano):
    conex = conexao.conectar()
    cursor = conex.cursor()
    
    sql = "INSERT INTO cadastros (ID, NOME_CAD, DATA_NASC, EMAIL, SENHA_CAD, CONFIR_SENHA, ID_PLANOS) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    val = (id, nome, datanasc, email, senha, confir, idplano)
    
    cursor.execute(sql, val)
    conex.commit()
    
    print("Novo usuário inserido com sucesso!")
    conex.close()


def inserir_todolist(id, titulo, data_todo, horario, classificacao, descricao, id_cadastro):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "INSERT INTO todolist (ID, TITULO, DATA_TODO, HORARIO, CLASSIFICACAO, DESCRICAO, ID_CADASTRO) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    val = (id, titulo, data_todo, horario, classificacao, descricao, id_cadastro)

    cursor.execute(sql, val)
    conex.commit()

    print("Novo todolist inserido com sucesso!")
    conex.close()


def inserir_checklist(id, tarefa_check, data_check, id_cadastro):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "INSERT INTO checklist (ID, TAREFA_CHECK, DATA_CHECK, ID_CADASTRO) VALUES (%s, %s, %s, %s)"
    val = (id, tarefa_check, data_check, id_cadastro)

    cursor.execute(sql, val)
    conex.commit()

    print("Checklist inserido com sucesso!")
    conex.close()


def inserir_anotacoes(id, tarefa_notes, id_cadastro):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "INSERT INTO anotacoes (ID, TAREFA_NOTES, ID_CADASTRO) VALUES (%s, %s, %s)"
    val = (id, tarefa_notes, id_cadastro)

    cursor.execute(sql, val)
    conex.commit()

    print("Anotação inserida com sucesso!")
    conex.close()

if pedir == 1:
    id = int(input("Insira o id: ")) 
    nome = str(input("Insira o nome: "))
    data = str(input("Insira a data de nascimento (AAAA-MM-DD): "))
    email = str(input("Insira o email: "))
    senha = str(input("Insira a senha: "))
    confir = str(input("Confirme a senha: "))
    tipo = int(input("Insira o tipo de plano (gratuito: 1, mensal: 2, anual: 3): "))
    inserir_cadastro(id, nome, data, email, senha, confir, tipo)

if pedir == 2:
    id = int(input("Insira o id: "))
    titulo = str(input("Insira o titulo: "))
    data = str(input("Insira a data: "))
    horario = str(input("Insira o horário: "))
    classificacao = str(input("Insira a classificação: "))
    descricao = str(input("Insira a descrição: "))
    cadastro = int(input("Insira o id do cadastro: "))
    inserir_todolist(id, titulo, data, horario, classificacao, descricao, cadastro)

if pedir == 3:
    id = int(input("Insira o id: "))
    tarefa = str(input("Insira a tarefa: "))
    data = str(input("Insira a data: "))
    cadastro = int(input("Insira o id do cadastro: "))
    inserir_checklist(id, tarefa, data, cadastro)

if pedir == 4:
    id = int(input("Insira o id: "))
    anotacao = str(input("Faça a anotação: "))
    cadastro = int(input("Insira o id do cadastro: "))
    inserir_anotacoes(id, anotacao, cadastro)

#else:
#   print("Digite uma opção válida, execute novamente.")