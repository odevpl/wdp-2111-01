import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../features/Banner/Banner';
import NavBar from '../../features/NavBar/NavBar';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpandArrowsAlt,
  faShoppingBasket,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faExchangeAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import Button from '../../common/Button/Button';
import RatingStars from '../../common/RatingStars/RatingStarsContainer';
import ProductReviews from '../../features/ProductReviews/ProductReviews';

const ProductPage = (id, stars, userRating) => (
  <div className={styles.root}>
    <Banner />
    <NavBar />
    <div className={'container ' + styles.pageWrapper}>
      <div className='row'>
        <div className={'col-5 ' + styles.pageColumnLeft}>
          <div className={styles.photoContainer}>
            <img className={styles.photo} src={''} alt='' />
            <Button className={styles.expandButton} variant='outline'>
              <FontAwesomeIcon icon={faExpandArrowsAlt}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={'row ' + styles.sliderBox}>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>
            <div className={'col ' + styles.photoContainerMini}>
              <img className={styles.photoMini} src={''} alt='' />
            </div>

            <div className={'col-12 ' + styles.sideArrow}>
              <Button variant='sideArrows'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button variant='sideArrows'>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </div>
        </div>

        <div className={'col-7 ' + styles.pageColumnRight}>
          <div className={styles.productInfoContainer}>
            <div className={'row ' + styles.productName}>
              <h4>Sunbaby Magic Bear Chair</h4>
              <div className={'row ' + styles.productName}>
                <div className={styles.buttonContainer}>
                  <Button variant='sideArrows'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Button>
                </div>
                <div className={styles.buttonContainer}>
                  <Button variant='sideArrows'>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Button>
                </div>
              </div>
            </div>
            <div className={'row ' + styles.starsContainer}>
              <RatingStars stars={stars} id={id} userRating={userRating} />
              <p>(0 reviews)</p>
              <p>Add Your Review</p>
            </div>
          </div>

          <div className={'row ' + styles.productInfoContainer}>
            <div className={styles.oldPrice}>$350.00</div>
            <div className={styles.newPrice}>$250.00</div>
          </div>

          <div className={styles.productInfoContainer}>
            <div className={'row ' + styles.quantityContainer}>
              <div className={styles.buttonContainer}>
                <Button variant='basket'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='sideArrows'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Button>
              </div>
            </div>
            <div className={'row ' + styles.quantityContainer}>
              <p>Quantity:</p>
              <div className={styles.quantity}>2</div>
              <div className={styles.buttonContainer}>
                <Button variant='quantityChange'>-</Button>
              </div>
              <div className={styles.buttonContainer}>
                <Button variant='quantityChange'>+</Button>
              </div>
            </div>
          </div>

          <div className={styles.productInfoContainer}>
            <p className={styles.overview}>Quick Overview</p>
            <p className={styles.description}>
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus
              augue, eu euis mod tellus. Nam mattis eros tis sagittis. Vestibulum
              suscipit cursus biben.
            </p>
          </div>

          <div className={styles.productInfoContainer}>
            <div className={'row ' + styles.availabilityContainer}>
              <p>Availability:</p>
              <div>In Stock</div>
            </div>

            <div className={'row ' + styles.availabilityContainer}>
              <p>Category:</p>
              <div>Furniture</div>
            </div>
          </div>

          <div className={'row ' + styles.productInfoContainer}>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='facebook'>
                <FontAwesomeIcon
                  className={styles.facebook}
                  icon={faFacebookF}
                ></FontAwesomeIcon>{' '}
                Share
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='google'>
                <FontAwesomeIcon
                  className={styles.google}
                  icon={faGooglePlusG}
                ></FontAwesomeIcon>{' '}
                Google+
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='tweet'>
                <FontAwesomeIcon
                  className={styles.twitter}
                  icon={faTwitter}
                ></FontAwesomeIcon>{' '}
                Tweet
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='pinterest'>
                <FontAwesomeIcon
                  className={styles.pinterest}
                  icon={faPinterestP}
                ></FontAwesomeIcon>{' '}
                Pinterest
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.brands} variant='linkedin'>
                <FontAwesomeIcon
                  className={styles.linkedIn}
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>{' '}
                Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProductReviews />
      </div>
    </div>
  </div>
);

ProductPage.propTypes = {
  stars: PropTypes.number,
  id: PropTypes.string,
  userRating: PropTypes.number,
};

export default ProductPage;
