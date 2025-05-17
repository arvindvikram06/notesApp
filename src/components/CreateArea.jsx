import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const[isExpanded,setisExpanded] = useState(false);
  function Expand(){
     setisExpanded(true);
  }


  const [note, setnote] = useState({
    title: "",
    content: ""
  });

  function Update(event) {
    const { name, value } = event.target;
    
    setnote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    
   
  }
  function submitNote(event){
    props.Addnote(note)
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
      { isExpanded ?
        <input
          name="title"
          value={note.title}
          onChange={Update}
          placeholder="Title"
        />:null}
        
        <textarea
          name="content"
          value={note.value}
          onClick={Expand}
          onChange={Update}
          placeholder="Take a note..."
          rows={isExpanded?"3":1}
        /> 
        
      
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
