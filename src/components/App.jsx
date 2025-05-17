import React,{useState,useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

 const[Notes ,setNotes] = useState(
  JSON.parse(localStorage.getItem('react-notes-app-data'))||[]);
  function addNote(newNotes){
    setNotes((prev)=>{
      return [...prev ,newNotes]
    })
  }
  function deleteNote(id){
      setNotes(prev=>{
        return prev.filter((noteItem,index)=>{
          return id!==index
        })
      })
  }
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(Notes)
    );
  }, [Notes]);


  return (
    <div>
      <Header />
      <CreateArea Addnote ={addNote}/>
      {Notes.map((item,index)=>{
             return <Note id={index} key={index} title = {item.title} content ={item.content} Delete = {deleteNote}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
