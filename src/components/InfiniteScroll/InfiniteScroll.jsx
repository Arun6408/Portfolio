import React from 'react';
import Marquee from 'react-marquee-slider';
import styles from './index.module.css';
import { getImageUrl } from '../../utils';


const InfiniteScroll = ({ items, duration, startingSide, width = '90%' }) => {
  return (
    <div className={styles['marquee-wrapper']} style={{ width }}>
      <Marquee
        velocity={duration} 
        direction={startingSide === 'left' ? 'ltr' : 'rtl'}
        resetAfterTries={200}
      >
        {items.map((item, index) => (
          <div key={index} className={styles["marquee-item"]}>
            <div style={item.class}>
              <img style={item.innerclass} src={getImageUrl(`${item.icon}`)} alt="" />
            </div>
            <div>{item.title}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default InfiniteScroll;
