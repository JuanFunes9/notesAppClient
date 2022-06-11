import React, { useEffect } from 'react';
//Components
import EditPopup from './EditPopup';
//helpers
import deleteNotes from '../helpers/deleteNote';
import getNotes from '../helpers/getNotes';

const NoteItem = ({ note, setNotes, index }) => {

  useEffect(() => {
    const colorNote = document.querySelector(`#${'a' + note._id}`)
    colorNote.style.background = note.color;
  }, [note._id, note.color])

  const idEdit = 'edit' + index;

  const handleDelete = () => {
    deleteNotes( note._id );
    getNotes().then( data => setNotes( data ) );
  }

  const handleEditPopup = () => {
    const editPopUp = document.querySelector( `#${ idEdit }` );
    const coverPopup = document.querySelector( '#cover-popup' );
    editPopUp.classList.toggle( 'edit-popup-show' );
    coverPopup.classList.toggle( 'cover-popup-show' );
  }

  return (
    <>
      <div className="note-item" >
        <div className="header-note" >
                <h4>{ note.title }</h4>
                <button className="close-container" onClick={ handleDelete }>
                  <span className="material-symbols-outlined">close</span>
                </button>
        </div>
        <div className="body-note-item" id={ 'a' + note._id } >
                <p>{ note.body }</p>
        </div>
        <button className="edit-button" onClick={ () => handleEditPopup() }>
          <span className="material-symbols-outlined">border_color</span>
        </button>
      </div>
      <EditPopup note={ note } setNotes={ setNotes } idEdit={ idEdit }/>
    </>
  )
}

export default NoteItem