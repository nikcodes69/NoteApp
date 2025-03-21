import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import LeftArrow from '../assets/arrow-left.svg'
import { useState } from 'react';
import { useEffect } from 'react';

const NotePage = () => {
   
    let {noteId} = useParams();
    console.log(noteId);

    let [note,setNote] = useState(null);
    const [error, setError] = useState(null)

    useEffect(()=>{
      getNote()
    },[noteId])    
    
    let getNote = async () => {
      try {
        let response = await fetch(`http://localhost:8000/notes/${noteId}`);

        if (response.status === 404) {
          setError("Note not found. Please check if the note ID is correct.")
          return
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        setNote(data);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };

  return (
    <div className="note">
        <div className="note-header">
          <h3>
            <Link to="/">
            <img src={LeftArrow} alt="Back" />
            </Link>

          </h3>
        </div>
        <textarea value={note?.body || 'ABC'} readOnly/>
    </div>
  )
}

export default NotePage  