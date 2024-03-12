import conexao

pedir = int(input("Selecione a informação que deseja alterar, digite 1 para alterar a tarefa e 2 para alterar o usuário: "))

def atualizar_tarefa(id_tarefa, nova_tarefa):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE anotacoes SET TAREFA_NOTES = %s WHERE ID = %s"
    val = (nova_tarefa, id_tarefa)

    cursor.execute(sql, val)
    conex.commit()

    print("Tarefa atualizada com sucesso!")
    conex.close()


def atualizar_cadastro(id_cadastro, novo_cadastro):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE anotacoes SET ID_CADASTRO = %s WHERE ID = %s"
    val = (novo_cadastro, id_cadastro)

    cursor.execute(sql, val)
    conex.commit()

    print("Cadastro atualizado com sucesso!")
    conex.close()


if pedir == 1:
    id_tarefa = int(input("Insira o ID da tarefa que deseja alterar: "))
    tarefa = str(input("Insira a nova tarefa: "))
    atualizar_tarefa(id_tarefa, tarefa)

if pedir == 2:
    id_cadastro = int(input("Insira o ID do usuário que deseja alterar: "))
    cadastro = str(input("Insira o novo usuário: "))
    atualizar_cadastro(id_cadastro, cadastro)