import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"> </i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.array,
};

export default Accordion;
