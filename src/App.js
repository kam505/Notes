import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes,setNotes]=useState([{
    id: nanoid(),
    text:"Це моя перша нотатка!",
    date:"28.03.2023",
    pinned: false,
  },
  {
    id: nanoid(),
    text:"Це моя друга нотатка!",
    date:"29.03.2023",
    pinned: false,
  },
  {
    id: nanoid(),
    text:"Це моя третя нотатка!",
    date:"30.03.2023",
    pinned: false,
  },
  {
    id: nanoid(),
    text:"Це моя четверта нотатка!",
    date:"31.03.2023",
    pinned: false,
  }]);

  const[searchText, setSearchText] = useState('');

  const[darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	
  useEffect(() => {
    window.onbeforeunload = () => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        );
    };
  }, [notes]);

  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      pinned: false,
    }
    const newNotes=[...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note) =>note.id !== id);
    setNotes(newNotes);
  };

  const pinNote = (id) => {
    const newNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          pinned: !note.pinned,
        };
      } else {
        return note;
      }
    });
    setNotes(newNotes);
  };


  return (
    <div className ={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes
            .filter((note) => note.text.toLowerCase().includes(searchText))
            .sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1))}
          handleAddNote={AddNote}
          handleDeleteNote = {deleteNote}
          handlePinNote={pinNote}
        />
      </div>
    </div>
  );
};

export default App;