import { useState } from 'react'

import Title from './components/Title'
import EventList from './components/EventList'
import Form from './components/Form';

function App() {
  const [events, setEvents] = useState([])

  return (
    <div>
      <Title />
      <Form setEvents={setEvents} />
      <EventList events={events} />
    </div>
  );
}

export default App;
