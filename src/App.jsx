import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const notesEl = notes.map((item, index) => {
    return (
      <Note
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        onDelete={deleteNote}
      />
    );
  });

  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <AddNote onAdd={addNote} />
      <div className="notes-con">{notesEl}</div>
    </div>
  );
}

export default App;
