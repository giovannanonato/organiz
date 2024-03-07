import React, { useState } from 'react';
import Header2 from '../News/Header2';
import './Check.css';



const App = () => {

  //vai armazenar a informação
  const [notes, setNotes] = useState([]);

  //armazenar o conteúdo da nova informação
  const [newNote, setNewNote] = useState('');

  //vai guardar a data de conclusão da informação
  const [data, setDueDate] = useState('');


  //funçao para adicionar uma nova informaçao
  const addNote = () => {

    //confirma se todos os campos estão preenchidos
    if (newNote.trim() !== '' && data.trim() !== '') {

      //cria o campo com a informaçao e data
      const noteWithDate = `${newNote} - Data: ${data}`;

      //atualiza o estado dos campos adicionando a nova informação
      setNotes([...notes, noteWithDate]);

      //limpa os campos
      setNewNote('');
      setDueDate('');
    }
  };


  //funçao para excluir
  const deleteNote = (index) => {

    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className = "group_check">
    <Header2 />
    <div id = "div_check">
      

      <h1 className = "h1-cl">Check List</h1>
      <div>
        {/*campo de texto para inserir o conteúdo*/}
        <textarea
          rows="4"
          cols="50"
          placeholder="Adicione uma nova tarefa"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}/>
        <br />

        {/*campo de entrada para escolher a data de conclusão*/}
        <input className = "inpt_Date"
          type="date"
          value={data}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <br />

        {/*botão para adicionar*/}
        <button onClick={addNote} id = "button_check">Adicionar</button>

           {/*lista de tarefas */}
      <ul className = "ul_check">
        {notes.map((note, index) => (
          <li key={index} id = "li_check">
            {note}

            {/*botão para excluir a tarefa*/}
            <button onClick={() => deleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>

   
    </div>
  </div>
  );
};


export default App;
