import React, { useState } from 'react'

function AddNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        const {name, value} = e.target
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function submitNote(e) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();
    }

    return (
      <div>
        <form>
          <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
          <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
          <button onClick={submitNote}><i className="fa-solid fa-plus"></i></button>
        </form>
      </div>
    );
  }

export default AddNote
