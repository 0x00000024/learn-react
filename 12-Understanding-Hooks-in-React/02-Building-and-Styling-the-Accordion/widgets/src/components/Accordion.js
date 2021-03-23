import React from 'react';
import PropTypes from 'prop-types';

const Accordion = ({items}) => {
  const onTitleClicked = (index) => {
    console.log('Title clicked', index);
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
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.array,
};

export default Accordion;
