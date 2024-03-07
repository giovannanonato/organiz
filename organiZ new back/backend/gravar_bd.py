import conexao

def inserir_cadastro(dados_processados):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "INSERT INTO cadastros (NOME_CAD, DATA_NASC, EMAIL, SENHA_CAD, CONFIR_SENHA, ID_PLANOS) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (dados_processados)
    print(val)
    cursor.execute(sql, val)
    conex.commit()
    print("inserido com sucesso!")
    conex.close()


def inserir_todolist(id, titulo, data_todo, horario, classificacao, descricao, id_cadastro):
    cursor = conexao.cursor()

    sql = "INSERT INTO todolist (ID, TITULO, DATA_TODO, HORARIO, CLASSIFICACAO, DESCRICAO, ID_CADASTRO) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    val = (id, titulo, data_todo, horario, classificacao, descricao, id_cadastro)

    cursor.execute(sql, val)
    conexao.commit()
    print("inserido com sucesso!")


def inserir_checklist(id, tarefa_check, data_check, id_cadastro):
    cursor = conexao.cursor()

    sql = "INSERT INTO checklist (ID, TAREFA_CHECK, DATA_CHECK, ID_CADASTRO) VALUES (%s, %s, %s, %s)"
    val = (id, tarefa_check, data_check, id_cadastro)

    cursor.execute(sql, val)
    conexao.commit()
    print("inserido com sucesso!")


def inserir_anotacoes(id, tarefa_notes, id_cadastro):
    cursor = conexao.cursor()

    sql = "INSERT INTO anotacoes (ID, TAREFA_NOTES, ID_CADASTRO) VALUES (%s, %s, %s)"
    val = (id, tarefa_notes, id_cadastro)

    cursor.execute(sql, val)
    conexao.commit()
    print("inserido com sucesso!")


def inserir_planos(id, tipo_plano, valor_plano):
    cursor = conexao.cursor()

    sql = "INSERT INTO planos (ID, TIPO_PLANO, VALOR_PLANO) VALUES (%s, %s, %s)"
    val = (id, tipo_plano, valor_plano)

    cursor.execute(sql, val)
    conexao.commit()
    print("inserido com sucesso!")

    conexao.close()