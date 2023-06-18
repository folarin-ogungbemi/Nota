import React from 'react'

const NotesListPage = () => {

    let [notes, setNotes] = React.useState([])

    React.useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        console.log("DATA", data)
        setNotes(data)
    }

  return (
    <div>
        <div>
            {notes.map((note, index) => (
                <h3 key={index}>{note.body}</h3>
            ))}
        </div>
    </div>
  )
}

export default NotesListPage