const axios = require( 'axios' );

const getNotes = async() => {

  const apiUrl = 'http://localhost:8080/notes';

  const results = await axios.get( apiUrl );
  const { data } = results;

  return data;

}

export default getNotes;