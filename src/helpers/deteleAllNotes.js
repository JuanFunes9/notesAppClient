const axios = require( 'axios' );

const deleteAllNotes = () => {

  const apiUrl = 'http://localhost:8080/notes/delete-all';
  axios.delete( apiUrl )
    .then( res => console.log( res ) )
    .catch( err => console.log( err ) );

}

export default deleteAllNotes;