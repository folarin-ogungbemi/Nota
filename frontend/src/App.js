import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

import React from "react"
import Header from './components/Header'
import NotesListPage from './Pages/NotesListPage'
import NotePage from './Pages/NotePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<NotesListPage/>} />
          <Route path="/note/:id" element={<NotePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
