import React from 'react'
import ListItem from '../components/ListItem'
import { useState,useEffect } from 'react'
import AddBtn from '../components/AddBtn'

const NotesListPage = () => {

  const apiUrl = import.meta.env.REACT_APP_API_URL||'http://localhost:10000/notes';

  fetch(`${apiUrl}`)
    .then(res => res.json())
    .then(data => console.log(data));

    let [notes,setNotes] = useState([]);

    useEffect(()=>{
        getNotes();
        console.log("Fetched Notes:",notes);
    },[])

    let getNotes =async()=>{
            try {
              let response = await fetch(`${apiUrl}`);
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
        <AddBtn/>
    </div> 
  )
}

export default NotesListPage