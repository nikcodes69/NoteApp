import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import {Routes, Route} from 'react-router-dom'
import ListItem from './components/ListItem'

function App() {

  const appElements = (
    <div>
      <Header />
      <NotesListPage />
    </div>
  );

  return (
    <> 
         <div className="container dark">
         <div className="app">
          <Routes>
            <Route path="/" element={appElements} />
            <Route path="/note/:noteId" element={<NotePage />} />
          </Routes>
          </div>
          </div>
    </>
  )
}

export default App
