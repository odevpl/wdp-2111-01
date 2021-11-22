import PropTypes from 'prop-types';
import React from 'react';
import styles from './PaginationDots.module.scss';

const PaginationDots = ({ activeDot, dotsCount, handleChange }) => {
  function generateDotsList({ dotsCount, activeDot }) {
    let dotsList = [];
    for (let dotNum = 0; dotNum < dotsCount; dotNum++) {
      dotsList.push(
        <li key={dotNum}>
          <a
            onClick={() => handleDotClick(dotNum)}
            className={dotNum === activeDot ? styles.active : null}
          >
            page {dotNum}
          </a>
        </li>
      );
    }
    return dotsList;
  }

  function handleDotClick(index) {
    handleChange(index);
    generateDotsList({ dotsCount, index });
  }

  return (
    <div className={styles.root}>
      <ul>{generateDotsList({ dotsCount, activeDot })}</ul>
    </div>
  );
};

PaginationDots.propTypes = {
  activeDot: PropTypes.number,
  dotsCount: PropTypes.number,
  handleChange: PropTypes.func,
};

PaginationDots.defaultProps = {
  activeDot: 0,
  dotsCount: 1,
  handleChange: () => null,
};

export default PaginationDots;
