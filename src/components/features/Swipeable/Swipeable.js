import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

const Swipeable = ({ activePage, handlePageChange, pages }) => {
  return (
    <SwipeableViews
      enableMouseEvents
      index={activePage}
      onChangeIndex={index => {
        handlePageChange(index);
      }}
      slideStyle={{ overflow: 'hidden' }}
    >
      {pages.map(page => (
        <React.Fragment key={pages[activePage]}>
          <div className='container'>
            <div className='row'>{page}</div>
          </div>
        </React.Fragment>
      ))}
    </SwipeableViews>
  );
};

Swipeable.propTypes = {
  activePage: PropTypes.number,
  handlePageChange: PropTypes.func,
  pages: PropTypes.array,
  // pages.map: PropTypes.node,
};
export default Swipeable;
