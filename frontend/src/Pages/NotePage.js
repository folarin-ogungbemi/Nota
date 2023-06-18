import React, {useState, useEffect} from 'react'

const NotePage = ({match}) => {

  // the ".id" is the name we passed in our NotePage Route path
  let noteId = match.params.id

  const [note, setNote] = useState(null)

  useEffect(() =>{
    let getNote = async () =>{
    const response = await fetch(`/api/notes/${noteId}/`)
    const data = await response.json
    setNote(data)
    }

    getNote()
  }, [noteId])
  
  return ( 
    <div className='note'>
      {/* the question mark in the p tag makes sure
       that we do not get error if note.body is not found */}
      <p>{note?.body}</p>
    </div>
  )
}

export default NotePage