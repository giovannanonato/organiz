import conexao

def inserir_todolist(id, titulo, data_todo, horario, classificacao, descricao):
    cursor = conexao.cursor()

    sql = "INSERT INTO autor (ID, TITULO, DATA_TODO, HORARIO, CLASSIFICACAO, DESCRICAO) VALUES (%s, %s, %s, %s, %s, %s)"
    val = (id, titulo, data_todo, horario, classificacao, descricao)

    cursor.execute(sql, val)
    conexao.commit()
    print("inserido com sucesso!")





    

