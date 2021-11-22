/* eslint-disable no-console */

import React, { useState } from 'react';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import ProductPopup from '../../features/ProductPopup/ProcuctPopup';
import PropTypes from 'prop-types';
import RatingStars from '../RatingStars/RatingStarsContainer';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductBox.module.scss';

const ProductBox = ({
  name,
  price,
  promo,
  stars,
  arrows,
  image,
  oldPrice,
  addToFavorites,
  removeFromFavorites,
  id,
  favorites,
  addToCompare,
  compareCount,
  compareList,
  viewPromoted,
  isHovered = () => null,
  category,
  userRating,
}) => {
  const handleAddToCompare = (event, id) => {
    const inCompare = compareList.some(product => product.id === id);
    event.preventDefault();
    if (compareCount < 4 && !inCompare) {
      addToCompare({ id });
    }
  };

  const setFavorite = favorites => {
    favorites && localStorage.setItem(id + '.fav', true);
  };
  setFavorite(favorites);

  const handleFavClick = e => {
    e.preventDefault();
    if (Object.keys(localStorage).indexOf(id + '.fav') > -1) {
      console.log('been present, is removed', id);
      removeFromFavorites({ id });
      localStorage.removeItem(id + '.fav');
    } else {
      console.log('been absent, is added', id);
      addToFavorites({ id });
    }
  };

  const [showPopup, togglePopup] = useState(false);

  const handlePopup = event => {
    event.preventDefault();
    return togglePopup(!showPopup);
  };

  return (
    <div
      className={styles.root}
      onMouseEnter={() => isHovered(true)}
      onMouseLeave={() => isHovered(false)}
    >
      <div className={styles.photo}>
        <Link to={`/product/${id}`}>
          <img src={image} alt='arb bed' />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div
          className={`${styles.buttons} ${viewPromoted ? styles.hotDealButtons : null}`}
        >
          {!viewPromoted ? <Button variant='small'>Quick View</Button> : null}
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      {showPopup ? (
        <ProductPopup
          id={id}
          name={name}
          price={price}
          category={category}
          image={image}
          closePopup={handlePopup}
        />
      ) : (
        ''
      )}
      <div className={styles.content}>
        <Link to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.stars}>
          <RatingStars stars={stars} id={id} userRating={userRating} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            className={
              localStorage.getItem(id + '.fav') ? styles.favorites : styles.outlines
            }
            onClick={e => {
              handleFavClick(e);
            }}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            onClick={e => handleAddToCompare(e, id)}
            className={arrows ? styles.arrows : ''}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <div className={styles.oldPrice}>{oldPrice ? '$ ' + oldPrice : ''}</div>
          <Button noHover variant='small' className={styles.newPrice}>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  arrows: PropTypes.bool,
  image: PropTypes.node,
  favorites: PropTypes.bool,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  id: PropTypes.string,
  oldPrice: PropTypes.number,
  addToCompare: PropTypes.func,
  compareCount: PropTypes.number,
  compareList: PropTypes.array,
  isHovered: PropTypes.func,
  viewPromoted: PropTypes.bool,
  category: PropTypes.string,
  userRating: PropTypes.number,
  heart: PropTypes.node,
};

export default ProductBox;
