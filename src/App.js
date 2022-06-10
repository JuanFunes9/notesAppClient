import React, { useState, useEffect } from 'react';
//components
import Navbar from './components/Navbar';
import NotesGrid from './components/NotesGrid';
import NewNote from './components/NewNote';
//helpers
import getNotes from './helpers/getNotes';

const App = () => {

  const [notes, setNotes] = useState([{}])

  useEffect( () => {
    getNotes()
      .then( data => setNotes( data ) )
  }, [] );

  const handlePopupShow = () => {
    const popUp = document.querySelector( '#pop-up' );
    const coverPopup = document.querySelector( '#cover-popup' );
    popUp.classList.toggle( 'new-note-popup-show' );
    coverPopup.classList.toggle( 'cover-popup-show' )
  }

  return (
    <>
      <Navbar setNotes={ setNotes }/>
      <main>
        <NotesGrid notes={ notes } setNotes={ setNotes } />
        <div className="new-note-btn" onClick={ handlePopupShow }>
            <span className="material-symbols-outlined">add</span>
        </div>
        <NewNote setNotes={ setNotes }/>
      </main>
      <div className="cover-popup" id="cover-popup"></div>
    </>
  )
}

export default App;