import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('Run after every rerender if data has changed');
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
