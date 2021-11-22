import BlogHomepage from '../../layout/BlogHomepage/BlogHomepage';
import Chatbox from '../../features/Chatbox/Chatbox';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Promoted from '../../features/Promoted/PromotedContainer';
import Promotions from '../../features/Promotions/Promotions';
import React from 'react';
import styles from './Homepage.module.scss';

// import Brands from '../../layout/Brands/Brands';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Gallery />
    <BlogHomepage />
    <Feedback />
    <Chatbox />
  </div>
);

export default Homepage;
