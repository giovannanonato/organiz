import conexao

def formatar_data(data):
    # Função para formatar a data como string
    return data.strftime("%Y-%m-%d")

def selecionar_usuario(cadastro_id):
    conex = conexao.conectar()
    cursor = conex.cursor()

    sql = "SELECT ID, NOME_CAD, DATA_NASC, EMAIL, SENHA_CAD, CONFIR_SENHA, ID_PLANOS FROM cadastros WHERE ID = %s"
    val = (cadastro_id, )

    cursor.execute(sql, val)
    usuario = cursor.fetchall()
    
    conex.close()
    return usuario


if __name__ == "__main__":
    
    cadastro = int(input("Digite o ID do usuario que deseja selecionar: "))
    print("Informações do usuário", cadastro)
    for cadastros in selecionar_usuario(cadastro):
        
        cadastros = list(cadastros)
        cadastros[2] = formatar_data(cadastros[2])
        
        print(cadastros)