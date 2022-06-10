import React from 'react';
//Component
import NoteItem from './NoteItem';

const NotesGrid = ({ notes, setNotes }) => {

  return (
    <div className="notes-grid" >
      {
        notes.map( (note, index) => {
          return(
            <NoteItem note={ note } setNotes={ setNotes } key={ 'a' + note._id } index={ index }/>
          )
        })
      }
    </div>
  )
}

export default NotesGrid