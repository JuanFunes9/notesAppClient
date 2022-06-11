const axios = require( 'axios' );

const putNotes = ( noteId, noteData ) => {

  const apiUrl = `http://localhost:8080/notes/edit-note/${ noteId }`;

  axios.put( apiUrl, noteData )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );

}

export default putNotes;