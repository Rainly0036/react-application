import './App.css';
import { useState } from 'react'
import Title from '../Component/Title'
import Model from '../Component/Model/Model'
import EventList from '../Component/EventList'

function App() {
  const [showModel, setShowModel] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: 'learning react.js', id: 1 },
    { title: 'me:', id: 2 },
    { title: 'dying bruh', id: 3 }
  ])

  const handleClick = (id) => {
    setEvents(events.filter((event) => {
      return id !== event.id
    }))
  }

  const handleClose = (id) => {
    setShowModel(false)
  }

  return (
    <div className="App">
      
      <Title title="HUAHHA"/>
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

      { showEvents && <EventList events={events} handleClick={handleClick} />}

      { showModel && <Model handleClose={handleClose}>
        <h2>Support me from patron!</h2>
        <p>$1.99/month only!</p>
      </Model>}
    </div>
  )
}

export default App;
