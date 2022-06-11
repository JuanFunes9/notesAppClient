import React,{ useState } from 'react';
//helpers
import putNotes from '../helpers/putNote';
import getNotes from '../helpers/getNotes';

const EditPopup = ({ note, setNotes, idEdit }) => {

  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [color, setColor] = useState(note.color);

  const handleEditPopup = () => {
    const editPopUp = document.querySelector( `#${ idEdit }` )
    editPopUp.classList.toggle( 'edit-popup-show' );
    const coverPopup = document.querySelector( '#cover-popup' );
    coverPopup.classList.toggle( 'cover-popup-show' );
  }

  const handleColorToggle = () => {
    const colorInput = document.querySelector(`#${ 'color' + idEdit }`)
    colorInput.classList.toggle( 'color-show' );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = {
      title: title,
      body: body,
      color: color,
    }

    putNotes( note._id, noteData );
    getNotes().then( data => setNotes( data ) );

    handleEditPopup();
  }

  return (
    <div className="edit-popup" id={ idEdit } >
      <form onSubmit={ handleSubmit }>
        <div className="header-note" >
          <input type="text" name="title" onChange={ e => setTitle( e.target.value ) } value={ title } required></input>
        </div>
        <div className="body-note" id="body-note-pop-edit">
          <textarea type="text-area" name="body" onChange={ e => setBody( e.target.value ) } value={ body } required></textarea>
        </div>
        <div className="choose-color-container" onClick={ handleColorToggle }>
          <span className="material-symbols-outlined">format_paint</span>
        </div>
        <input type="color" name="color" className="color-input" id={ 'color' + idEdit } onChange={ e => setColor( e.target.value ) } value={ color }></input>
        <button className="save-container" type="submit">
          <span className="material-symbols-outlined">save</span>
        </button>
      </form>

      <button className="close-container-popup" onClick={ () => handleEditPopup() }>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  )
}

export default EditPopup;