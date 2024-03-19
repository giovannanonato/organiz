import Header2 from "../News/Header2";
import './UpCheck.css';

export default function Reminder(){

  return (
      <div id = "div_color">
      <Header2 />
      
      <section id = "main-container">
      <h1 className = "name">Alterar tarefa</h1>

  <form action="#" id="lembrete">

      <div className = "title">
          <label for = "title" className = "form_label">Tarefa</label>
          <input type="text" className = "form_input" placeholder="Insira a nova tarefa" />
      </div>

      <div className = "date">
          <label for = "data" className = "form_label">Data</label>
          <input type="date" className = "form_input" />
      </div>

      <div className  = "buttons">
          <input type="submit" value = "Concluído" />
          <input type="button" value = "Cancelar" />
      </div>
  </form>
  </section>
  </div>
  )
}