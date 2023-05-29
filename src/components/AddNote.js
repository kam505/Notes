import{useState} from 'react';

const AddNote=({handleAddNote})=>{
   const [noteText, setNoteText]=useState('');
   const characterLimit = 300;

   const handleChange=(Event)=>{
      if(characterLimit - Event.target.value.length >=0){
         setNoteText(Event.target.value);
      }
   };
   const handleSaveClick=()=>{
      if(noteText.trim().length > 0){
         handleAddNote(noteText);
         setNoteText('');
      }
   };
   return (
      <div className='note new'>
        <textarea   
          rows='8'
          cols='10'
          placeholder='Натисни щоб додати запис...'
          value={noteText}
          onChange={handleChange}
          >
        </textarea>
         <div className='note-footer'>
            <small> {characterLimit - noteText.length} Залишилося </small>
            <button className="save" onClick={handleSaveClick}>Зберегти</button>
         </div>
      </div> 
   );
};

export default AddNote;