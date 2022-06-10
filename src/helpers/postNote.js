const axios = require( 'axios' );

const postNotes = ( noteData ) => {

  const apiUrl = 'http://localhost:8080/notes/new-note';

  axios.post( apiUrl, noteData )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );

}

export default postNotes;