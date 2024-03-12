import conexao

pedir = int(input("Selecione a tabela que deseja deletar a informação, digite 1 para acessar o cadastro, 2 para acessar o todolist, 3 para acessar o checklist e 4 para acessar as anotações: "))

def excluir_usuario(usuario_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "DELETE FROM cadastros WHERE ID = %s"
    val = (usuario_id,)

    cursor.execute(sql, val)
    conex.commit()

    print("Usuário excluído com sucesso!")
    conex.close()

def excluir_todolist(todolist_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "DELETE FROM todolist WHERE ID = %s"
    val = (todolist_id,)

    cursor.execute(sql, val)
    conex.commit()

    print("Tarefa excluída com sucesso!")
    conex.close()

def excluir_checklist(checklist_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "DELETE FROM checklist WHERE ID = %s"
    val = (checklist_id,)

    cursor.execute(sql, val)
    conex.commit()

    print("Tarefa excluída com sucesso!")
    conex.close()

def excluir_anotacoes(notes_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "DELETE FROM anotacoes WHERE ID = %s"
    val = (notes_id,)

    cursor.execute(sql, val)
    conex.commit()

    print("Tarefa excluída com sucesso!")
    conex.close()


if pedir == 1:
    id_cad = int(input("Digite o ID do usuário que deseja excluir: "))
    excluir_usuario(id_cad)

if pedir == 2:
    id_todo = int(input("Digite o ID da tarefa que deseja excluir: "))
    excluir_todolist(id_todo)

if pedir == 3:
    id_check = int(input("Digite o ID da tarefa que deseja excluir: "))
    excluir_checklist(id_check)

if pedir == 4: 
    id_notes = int(input("Digite o ID da tarefa que deseja excluir: "))
    excluir_anotacoes(id_notes)