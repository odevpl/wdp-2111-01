import BlogHomepage from '../../layout/BlogHomepage/BlogHomepage';
import Chatbox from '../../features/Chatbox/Chatbox';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Feedback from '../../layout/Feedback/FeedbackContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import Promoted from '../../features/Promoted/PromotedContainer';
import React from 'react';
import styles from './Homepage.module.scss';
import Promotions from '../../features/Promotions/Promotions';
import Brands from '../../layout/Brands/BrandsContainer';




const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <BlogHomepage />
    <Gallery />
    <Brands />
    <Feedback />
    <Chatbox />
  </div>
);

export default Homepage;
