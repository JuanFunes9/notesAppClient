const axios = require( 'axios' );

const deleteNotes = ( noteId ) => {

  const apiUrl = `http://localhost:8080/notes/delete-note/${ noteId }`;
  axios.delete( apiUrl )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );

}

export default deleteNotes;