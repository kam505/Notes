import {MdDeleteForever} from 'react-icons/md';
import {MdPushPin} from 'react-icons/md';
const Note = ({id, text, date, note, handleDeleteNote, handlePinNote}) =>{
    return (
        <div className={`note ${note.pinned ? 'pinned' : ''}`}>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever 
                onClick = {() => handleDeleteNote(id)} 
                className='delete-icon' 
                size='1.5em'
            />
            <MdPushPin
                 onClick = {()=> handlePinNote(id)}
                 className='pin-icon'
                 size='1.5em'
                 style={{ color: note.pinned ? 'red' : 'black' }}
            />
            
        </div>
     </div>
    );
};

export default Note;