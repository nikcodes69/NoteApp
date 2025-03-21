import React from 'react'
import { Link } from 'react-router';

const ListItem = ({note}) => {

    console.log(note);
  
  return (
    <div>
      <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
          <h3>{note.body}</h3>
      </div>
      
      </Link>                            
    </div>  
  )
}

export default ListItem