import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
// import notes from "./assets/Notes";
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
      <Footer />
    </div>
  );
}

export default App;
