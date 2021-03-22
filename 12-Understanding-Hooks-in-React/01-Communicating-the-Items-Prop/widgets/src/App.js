import React from 'react'
import Accordion from "./components/Accordion";

const items = [
  {
    title: 't1',
    content: 'c1'
  },
  {
    title: 't2',
    content: 'c2',
  },
  {
    title: 't3',
    content: 'c3',
  },
]

const App = () => {
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App;