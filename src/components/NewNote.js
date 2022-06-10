import React, { useState, useEffect } from 'react';
//helpers
import postNotes from '../helpers/postNote';
import getNotes from '../helpers/getNotes';

const NewNote = ({ setNotes }) => {

  const [color, setColor] = useState('#E1D90F');

  useEffect(() => {
    const popupColor = document.querySelector('#body-note-pop');
    popupColor.style.background = color;
  }, [ color ])

  const handleColorToggle = () => {
    const colorInput = document.querySelector('#color-input')
    colorInput.classList.toggle( 'color-show' );
  }

  const handlePopupShow = () => {
    const colorInput = document.querySelector('#color-input');
    const popUp = document.querySelector( '#pop-up' );
    const coverPopup = document.querySelector( '#cover-popup' );
    const inputTitle = document.querySelector('#title');
    const inputBody = document.querySelector('#body');

    popUp.classList.toggle( 'new-note-popup-show' );
    coverPopup.classList.toggle( 'cover-popup-show' );
    colorInput.classList.remove( 'color-show' );
    inputTitle.value = '';
    inputBody.value = '';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = {
      title: document.querySelector('#title').value,
      body: document.querySelector('#body').value,
      color: document.querySelector('#color-input').value,
    }

    postNotes( noteData );
    getNotes().then( data => setNotes( data ) );

    handlePopupShow();
  }

  return (
    <div className="new-note-popup" id="pop-up">
      <form onSubmit={ handleSubmit }>
        <div className="header-note" >
          <input type="text" name="title" id="title" placeholder="Note title" required></input>
        </div>
        <div className="body-note" id="body-note-pop">
          <textarea type="text-area" name="body" id="body" placeholder="Write a body" required></textarea>
        </div>
        <div className="choose-color-container" onClick={ handleColorToggle }>
          <span className="material-symbols-outlined">format_paint</span>
        </div>
        <input type="color" name="color" id="color-input" className="color-input" onChange={ e => setColor( e.target.value ) }></input>
        <button className="save-container" type="submit">
          <span className="material-symbols-outlined">save</span>
        </button>
      </form>

      <button className="close-container-popup" onClick={ handlePopupShow }>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  )
}

export default NewNote;