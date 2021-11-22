import { faCalendarAlt, faComments } from '@fortawesome/free-regular-svg-icons';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import styles from './BlogHomepage.module.scss';

const BlogHomepage = () => {
  function renderBlogEntries(entriesNum) {
    const entries = [];
    for (let i = 0; i < entriesNum; i++) {
      entries.push(
        <div className='col-4'>
          <div className={styles.blogPhoto}>
            <img src='src=../../images/chairs.jpg' alt='promotions chair' />
            <div className={styles.blogArticle}>
              <div className='row text-center'>
                <div className='col-6'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <span>15 JAN 2016</span>
                </div>
                <div className={'col-6 ' + styles.comment}>
                  <FontAwesomeIcon icon={faComments} />
                  <span>4 Comments</span>
                </div>
                <div className='col-12'>
                  <div className={styles.articleTitle}>
                    <h3>Products That Fight Static</h3>
                  </div>
                </div>
                <div className='col-12'>
                  <div className={styles.articleDescription}>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industrys standard dummy text
                      ever
                    </span>
                  </div>
                </div>
                <div className={'col-12 ' + styles.articleButton}>
                  <Button variant='blog'>READ MORE</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return entries;
  }
  return (
    <div className={styles.root}>
      <div className='container'>
        <SectionHeading title={'Latest blog'} pagesCount={3} />
        <div className='row'>{renderBlogEntries(3)}</div>
      </div>
    </div>
  );
};

export default BlogHomepage;
