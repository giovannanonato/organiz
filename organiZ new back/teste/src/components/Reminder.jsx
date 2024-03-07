export default function Reminder() {

    return (
        /*section = conjunto de tudo*/
        <section id="main-container">
            {/*titulo da ação*/}
            <h1 className="name">To Do List</h1>

            {/*form para o conjunto de divs do formulario*/}
            <form action="#" id="lembrete">

                {/*div para inserir o titulo da tarefa*/}
                <div className="title">
                    <label for="title" className="form_label">Título</label>
                    <input type="text" className="form_input" placeholder="Insira um título" />
                </div>

                {/*div para selecionar a data da tarefa*/}
                <div className="date">
                    <label for="data" className="form_label">Data</label>
                    <input type="date" className="form_input" />
                </div>

                {/*div para selecionar o horario da tarefa*/}
                <div className="hour">
                    <label for="hora" className="form_label">Horário</label>
                    <input type="time" className="form_input" />
                </div>

                {/*div para selecionar a classificação da tarefa*/}
                <div className="classification">
                    <label for="class" className="form_label">Indique a classificação</label>
                    <select name="menu" id="" className="form_input">
                        <option value="options">Selecione uma opção</option>
                        <option value="events" id="even">Eventos</option>
                        <option value="appointments" id="appo">Compromissos</option>
                        <option value="studies" id="stud">Estudos</option>
                        <option value="professional" id="prof">Profissional</option>
                        <option value="tasks" id="task">Tarefas</option>
                    </select>
                </div>

                {/*div para adicionar uma descrição à tarefa(opcinal)*/}
                <div className="description">
                    <label for="desc" className="form_label">Descrição (opcional)</label>
                    <input type="text" className="form_input" placeholder="Informe uma descrição" />
                </div>
                {/*div com os botões de cancelar e concluir*/}
                <div className="buttons">
                    <input type="submit" value="Concluído" />
                    <input type="button" value="Cancelar" />
                </div>
            </form>
        </section>
    )
}