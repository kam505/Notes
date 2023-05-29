import Note from './Note';
import AddNote from './AddNote';

const NotesList=({notes, handleAddNote, handleDeleteNote, handlePinNote})=>{
    return (
       <div className='notes-list'>
        {notes.map((note)=>(
          <Note 
            id={note.id} 
            text={note.text} 
            date={note.date}
            note={note}
            handleDeleteNote = {handleDeleteNote}
            handlePinNote ={handlePinNote}
            />
        ))}
        <AddNote handleAddNote={handleAddNote}/>
       </div>
    );
};

export default NotesList;