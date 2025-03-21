import React, { use } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import LeftArrow from '../assets/arrow-left.svg'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotePage = () => {

    const navigate = useNavigate();

    let {noteId} = useParams();
    console.log(noteId);
       
    let[note,setNote] = useState(null);

    useEffect(()=>{
      getNote();
    },[noteId])

    let getNote =async ()=>{

      if(noteId === 'new')return;

      let response = await fetch(`http://localhost:8000/notes/${noteId}`);
      let data = await response.json();
      console.log(data);
      setNote(data);
    }

    let createNote = async()=>{
      
      await fetch(`http://localhost:8000/notes/`,{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({...note,'updated': new Date()})
      })
      navigate('/');
    }


    let updateNote = async()=>{

      await fetch(`http://localhost:8000/notes/${noteId}`,{
        method: 'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({...note,'updated':new Date()})
      })
    }

    let deleteNote = async()=>{
      
      await fetch(`http://localhost:8000/notes/${noteId}`,{
        method: 'DELETE',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(note)
      })
      navigate('/');
    }

    const handleSubmit =()=>{

     if ((noteId) !== 'new'&& !(note.body)){
        deleteNote();
     }

     else if(noteId !== 'new'){
      updateNote();
     }

     else if(noteId === 'new' && note.body !== null){
      createNote();
     }

      navigate('/');
    }
 
  return (
    <div className="note">
        <div className="note-header">
          <h3>
            <Link to="/">
            <img src={LeftArrow} alt="Back" onClick={handleSubmit}/>
            </Link>
          </h3>
          {noteId !== 'new' ? 
            <button onClick={deleteNote}>Delete</button>
          :
            <button onClick={handleSubmit}>Done</button>
          }

        </div>
        <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} value={note?.body}/>
    </div>
  )
}

export default NotePage  