import React from 'react';
//helpers
import deleteAllNotes from '../helpers/deteleAllNotes';
import getNotes from '../helpers/getNotes';

const Navbar = ({ setNotes }) => {

  const handleDeleteAll = () => {
    deleteAllNotes();
    getNotes().then( data => setNotes( data ) )
  }

  const handleToggleInfo = () => {
    const toggle = document.querySelector( '#toggle-info' );
    toggle.classList.toggle( 'toggle-info-show' );
    const coverPopup = document.querySelector( '#cover-popup' );
    coverPopup.classList.toggle( 'cover-popup-show' );
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
          <div className="about-me-container" onClick={ () => handleToggleInfo() }>
            <p>About me</p>
            <span className="material-symbols-outlined">read_more</span>
          </div>
        </div>
      </div>
      <div className="toggle-info" id="toggle-info" >
        <div className= "header-content">
          <div className="img-container" >
            <img src="https://i.postimg.cc/5t74d5kC/profile.png" alt="img"></img>
          </div>
          <div className="info-container" >
            <div className="name" >
              <h4>Juan Ignacio Funes</h4>
            </div>
            <div className="info" >
              <p>💻 Full-stack developer</p>
              <p>📍 Bs. As. - Argentina</p>
            </div>
            <div className="links" >
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-solid fa-house"></i>
            </div>
          </div>
        </div>
        <div className="info-app" >
            <h4>Bienvenidx!</h4>
            <p>Esta aplicación es mi primera aplicacion full stack MERN. El servidor recibe, procesa y  devuelve datos sobre las notas agregadas por el usuario. En el front-end, la API es consumida con React para mostrar las notas en pantalla y brindar una interfaz atractiva e intuitiva para facilitar el uso de la app.</p>
        </div>
        <div className="tecno" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="img" ></img>
        </div>
        <div className="close-toggle" onClick={ () => handleToggleInfo() } >
          <span class="material-symbols-outlined">close</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar