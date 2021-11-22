import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import Swipeable from '../../features/Swipeable/Swipeable';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  render() {
    const { activePage } = this.state;
    const { feedbacks } = this.props;
    const pagesCount = Math.ceil(feedbacks.length);
    const pages = [];

    for (let i = 0; i < pagesCount; i++) {
      pages.push(
        feedbacks.slice(i, i + 1).map(feed => (
          <div key={feed.id} className='col text-center'>
            <div className='row justify-content-md-center'>
              <p className={styles.quoteBox}>{feed.clientText}</p>
            </div>
            <div className='row justify-content-md-center'>
              <div className='col col-lg-1'>
                <img
                  className={styles.img}
                  src={feed.clientImage}
                  alt='client avatar'
                />
              </div>
              <div className={'col col-lg-2 ' + styles.desc}>
                <h6>{feed.clientName}</h6>
                <p>Satisfied Client</p>
              </div>
            </div>
          </div>
        ))
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <SectionHeading
            title={'client feedback'}
            pagesCount={pagesCount}
            handlePageChange={activePage => this.setState({ activePage })}
            activePage={activePage}
          />
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <div className={styles.quoteArea}>
            <Swipeable
              activePage={activePage}
              handlePageChange={activePage => this.setState({ activePage })}
              pages={pages}
            />
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  children: PropTypes.node,
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      clientName: PropTypes.string,
      clientText: PropTypes.string,
      clientImage: PropTypes.string,
    })
  ),
};

Feedback.defaultProps = {
  feedbacks: [],
};

export default Feedback;
