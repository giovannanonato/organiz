import conexao 


def atualizar_nome(id_nome, novo_nome):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "UPDATE cadastros SET NOME_CAD = %s WHERE ID = %s"
    val = (novo_nome, id_nome)

    cursor.execute(sql, val)
    conex.commit()

    print("Nome do cadastro atualizado com sucesso!")
    conex.close()

if __name__ == "__main__":
    id = int(input("Digite o ID do nome que deseja alterar: "))
    novo = str(input("Insira o novo nome: "))
    atualizar_nome(id, novo) 