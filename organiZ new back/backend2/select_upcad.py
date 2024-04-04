import conexao 

def selecionar_cadastro(id):
    try:
        # Conectar ao banco de dados
        with conexao.conectar() as conex:
            # Criar cursor
            cursor = conex.cursor()

            # Consulta SQL
            sql = "SELECT DATE_FORMAT(DATA_NASC, '%Y-%m-%d'), ID, NOME_CAD, EMAIL FROM cadastros WHERE ID = %s"

            # Parâmetros da consulta
            val = (id,)

            # Executar consulta
            cursor.execute(sql, val)

            # Recuperar dados do usuário
            dados_usuario = cursor.fetchone()

            # Fechar cursor (e conexão)
            cursor.close()

            # Retornar dados do usuário
            return dados_usuario
    except Exception as e:
        # Se ocorrer algum erro, imprima-o e retorne None
        print("Erro ao selecionar cadastro:", e)
        return None
