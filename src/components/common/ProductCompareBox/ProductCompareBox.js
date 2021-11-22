import { faHeart, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProductCompareBox.module.scss';

const ProductCompareBox = ({ id, image, remove, favorites, oldPrice, price, name }) => {
  return (
    <React.Fragment>
      <div className={styles.root}>
        <button onClick={() => remove(id)} className={`container ${styles.photo}`}>
          <img src={image} alt='arb bed' />
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faTimesCircle} className='fa-2x' />
          </div>
        </button>
      </div>
      <div className={styles.description}>
        <h5>{name}</h5>
        <Button
          className={`${styles.favIcon} ${
            favorites ? styles.favorites : styles.outlines
          }`}
          onClick={e => {
            e.preventDefault();
            // favorites ? removeFromFavorites({ id }) : addToFavorites({ id });
          }}
          variant='outline'
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <div className={styles.price}>
          <div className={styles.oldPrice}>{oldPrice}</div>
          <Button noHover variant='small' className={styles.newPrice}>
            $ {price}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

ProductCompareBox.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  remove: PropTypes.func,
  favorites: PropTypes.bool,
  oldPrice: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
};

export default ProductCompareBox;
