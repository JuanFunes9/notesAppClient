import React, { useEffect } from 'react';
//Components

//helpers
import deleteNotes from '../helpers/deleteNote';
import getNotes from '../helpers/getNotes';

const NoteItem = ({ note, setNotes, index }) => {

  useEffect(() => {
    const colorNote = document.querySelector(`#${'a' + note._id}`)
    colorNote.style.background = note.color;
  }, [note._id, note.color])

  const handleDelete = () => {
    deleteNotes( note._id );
    getNotes().then( data => setNotes( data ) );
  }

  return (
    <div className="note-item" >
      <div className="header-note" >
              <h4>{ note.title }</h4>
              <button className="close-container" onClick={ handleDelete }>
                <span className="material-symbols-outlined">close</span>
              </button>
      </div>
      <div className="body-note" id={ 'a' + note._id } >
              <p>{ note.body }</p>
      </div>
      <button className="edit-button">
              <span className="material-symbols-outlined">border_color</span>
      </button>
    </div>
  )
}

export default NoteItem