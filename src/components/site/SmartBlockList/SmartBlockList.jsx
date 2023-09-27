import React from 'react';
import styles from './SmartBlockList.module.scss';
import SmartBlock from '../SmartBlock/SmartBlock';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
const SmartBlockList = () => {
  const { activeSmartBlock, activeSmartView } = useSelector((state) => state.app);
  const getSmartBlocks = () => {
    switch (activeSmartBlock) {
      case 'SWOT':
        return [
          { label: 'Strength', height: '361px' },
          { label: 'Weaknesses', height: '361px' },
          { label: 'Opportunities', height: '361px' },
          { label: 'Threats', height: '361px' },
        ];
      case 'PESTEL':
        return [
          { label: 'Political', height: '361px' },
          { label: 'Economic', height: '361px' },
          { label: 'Social', height: '361px' },
          { label: 'Technical', height: '361px' },
        ];
      case 'LEAN CANVAS':
        return [
          { label: 'Problem', height: '58px', gridColumn: '1/3' },
          { label: 'Solution', height: '95px' },
          { label: 'Key metrics', height: '95px' },
          { label: 'Unique value proposition', height: '95px' },
          { label: 'Unfair advantage', height: '95px' },
          { label: 'Channels', height: '95px' },
          { label: 'Customer segments', height: '95px' },
          { label: 'Revenue streams', height: '95px' },
          { label: 'Cost structure', height: '95px' },
        ];
      case 'CATWOE':
        return [
          { label: 'Costumer', height: '188px' },
          { label: 'Actors', height: '188px' },
          { label: 'Transformation', height: '188px' },
          { label: 'Worldview', height: '188px' },
          { label: 'Owner', height: '188px' },
          { label: 'Envoriment', height: '188px' },
        ];
      case '5 WHYS':
        return [
          { label: 'Problem', height: '203px' },
          { label: '1.Why?', height: '97px' },
          { label: '2.Why?', height: '97px' },
          { label: '3.Why?', height: '97px' },
        ];
      default:
        return [];
    }
  };
  return (
    <>
      <div className={clsx(styles.list, activeSmartView == 'list' && styles.listViewInline)}>
        {' '}
        {getSmartBlocks()?.map((item) => (
          <SmartBlock title={item?.label} height={item?.height} gridColumn={activeSmartView == 'list' ? '1/2' : item?.gridColumn} />
        ))}
      </div>
    </>
  );
};

export default SmartBlockList;
