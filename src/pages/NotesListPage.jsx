import React from 'react'
import ListItem from '../components/ListItem'
import { useState } from 'react'
import { useEffect } from 'react'

const NotesListPage = () => {

    let [notes,setNotes] = useState([]);

    useEffect(()=>{
        getNotes();
        console.log("Fetched Notes:",notes);
    },[])

    let getNotes =async()=>{
            try {
              let response = await fetch("http://localhost:8000/notes");
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              let data = await response.json();
              setNotes(data);
            } catch (error) {
              console.error("Failed to fetch notes:", error);
            }
        };

  return (
    <div className="notes">
        <div className="notes-header">
            <h2 className="notes-title">&#9782; Notes </h2>
            <p className="notes-count">{notes.length} </p>
        </div>
        <div className="notes-list">
          {notes.length > 0 ? (
            notes.map((note, idx) => <ListItem key={idx} note={note} />)
          ) : (
            <p className="no-notes">No notes found. Create your first note!</p>
          )}
        </div>
    </div> 
  )
}

export default NotesListPage