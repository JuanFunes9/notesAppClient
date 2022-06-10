import React from 'react';
//helpers
import deleteAllNotes from '../helpers/deteleAllNotes';
import getNotes from '../helpers/getNotes';

const Navbar = ({ setNotes }) => {

  const handleDeleteAll = () => {
    deleteAllNotes();
    getNotes().then( data => setNotes( data ) )
  }

  return (
    <nav>
      <div className="nav-content" >
        <div className="left-navbar">
          <h1>ColorNotes</h1>
          <ul>
            <li>
              <p>Intructions</p>
            </li>
            <li>
              <p>Docs</p>
            </li>
          </ul>
        </div>
        <div className="right-navbar">
          <div className="delete-all-container" onClick={ () => handleDeleteAll() }>
            Delete all
            <span className="material-symbols-outlined">delete</span>
          </div>
          <div className="about-me-container">
            <p>About me</p>
            <span className="material-symbols-outlined">read_more</span>
          </div>
        </div>
      </div>
      <div className="toggle-info" id="toggle-info" >
        
      </div>
    </nav>
  )
}

export default Navbar