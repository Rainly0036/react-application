import './App.css';
import { useState } from 'react'
import Title from '../Component/Title/Title.js'
import Model from '../Component/Model/Model.js'
import EventList from '../Component/EventList/EventList.js'
import NewEventForm from '../Component/NewEventForm/NewEventForm';

function App() {
  const [showModel, setShowModel] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents(prevEvents => {
      return [...prevEvents, event]  
    })
    setShowModel(false)
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      <Title title="Marioland Events" subtitle={subtitle} />
      
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      
      {showModel && (
        <Model>
          <NewEventForm addEvent={addEvent} />
        </Model>
      )}

      <div>
        <button onClick={() => setShowModel(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;