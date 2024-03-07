import Header2 from '../News/Header2';
import './News.css';

function Reminder_(){

    function myReminder(){
        window.alert(<div>
            <Header2 />
            
            <section id = "main-container">
            <h1 className = "name">To Do List</h1>
    
        <form action="#" id="lembrete">
    
            <div className = "title">
                <label for = "title" className = "form_label">Título</label>
                <input type="text" className = "form_input" placeholder="Insira um título" />
            </div>
    
            <div className = "date">
                <label for = "data" className = "form_label">Data</label>
                <input type="date" className = "form_input" />
            </div>
    
            <div className = "hour">
                <label for = "hora" className = "form_label">Horário</label>
                <input type="time" className = "form_input" />
            </div>
    
            <div className = "classification">
                <label for = "class" className = "form_label">Indique a classificação</label>
                <select name="menu" id="" className = "form_input">
                    <option value="options">Selecione uma opção</option>
                    <option value="events" id = "even">Eventos</option>
                    <option value="appointments" id = "appo">Compromissos</option>
                    <option value="studies" id = "stud">Estudos</option>
                    <option value="professional" id = "prof">Profissional</option>
                    <option value="tasks" id = "task">Tarefas</option>
                </select>
            </div>
    
            <div className = "description">
                <label for = "desc" className = "form_label">Descrição (opcional)</label>
                <input type="text" className = "form_input" placeholder="Informe uma descrição"/>
            </div>
    
            <div className  = "buttons">
                <input type="submit" value = "Concluído" />
                <input type="button" value = "Cancelar" />
            </div>
        </form>
        </section>
        </div>)
    }
    return(
        <div>
            <button onClick = {myReminder}>Criar evento 2</button>
        </div>
    )
}

export default Reminder_;