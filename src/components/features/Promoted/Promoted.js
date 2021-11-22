import ProductSlider from '../../common/ProductSlider/ProductSlider';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Promoted.module.scss';

class Promoted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        sliderLeft: {
          id: 'left',
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseTime: 10000,
          arrowButtons: false,
          slideContent: 'productBox',
          dotsClass: styles.sliderdots,
          appendDots: dots => (
            <div className={styles.sliderdots}>
              <ul>{dots}</ul>
            </div>
          ),
          customPaging: () => {
            return <a> </a>;
          },
        },
        sliderRight: {
          id: 'right',
          dots: false,
          autoplay: false,
          pauseTime: 0,
          arrowButtons: true,
          slideContent: 'productImage',
          fade: true,
        },
      },
    };
  }

  static propTypes = {
    promotedProducts: PropTypes.array,
  };

  render() {
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className={'col-4 ' + styles.left}>
              <ProductSlider
                promotedProducts={this.props.promotedProducts}
                settings={this.state.settings.sliderLeft}
              />
            </div>
            <div className={'col-8 ' + styles.right}>
              <ProductSlider
                promotedProducts={this.props.promotedProducts}
                settings={this.state.settings.sliderRight}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Promoted;
