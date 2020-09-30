// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = function() {
  return (
    <div>
      <label htmlFor="name" className="label">Enter name:</label>
      <input type="text" id="name"/>
      <button style={{background: 'blue', color: 'white'}}>Submit</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
