import React from 'react';
import styles from './DashboardPage.module.scss';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import Select from '../../../components/site/Select/Select';
import Switch from '../../../components/site/Switch/Switch';
import Textarea from '../../../components/site/Textarea/Textarea';
import clsx from 'clsx';
import Chart from '../../../components/site/Chart/Chart';
import Tips from '../../../components/site/Tips/Tips';
const DashboardPage = () => {
  return (
    <>
      {' '}
      <ContentBlock
        leftTitle={'Add a new chart'}
        title={'Dashboard'}
        left={<>{/* <Chart /> */}</>}
        right={
          <div className={clsx(styles.wrap)}>
            <div className={clsx(styles.line)}>
              <Select value={'Purple'} onChange={(opt) => {}} label={'Color of chart'} list={['Purple', 'Green', 'Blue', 'Yellow', 'Pink', 'Orange', 'Red']} />
            </div>
            <div className={clsx(styles.line)}>
              <Tips text={'Choose chart'}>
                <Select value={'Bar chart'} onChange={(opt) => {}} label={'Make any tweaks to the chart'} list={['Bar chart', 'Area Chart', 'Line Chart', 'Composed chart', 'Pie Chart', 'Scatter Chart', 'Radar Chart', 'Radial Chart', 'Treemap Chart', 'Funnel Chart']} />
              </Tips>
            </div>
            <div className={clsx(styles.line)}>
              {' '}
              <Switch label={'Data source'} />
            </div>
            <div className={clsx(styles.line)}>
              {' '}
              <Switch label={'Show chart Title'} />
            </div>

            <div className={clsx(styles.line)}>
              {' '}
              <Switch label={'Show chart Legend'} />
            </div>
            <div className={clsx(styles.line)}>
              {' '}
              <Tips text={'Write here your question'}>
                <Textarea label={'What would you like to visualize?'} placeholder="Show me a bar chart with COVID-19 cases in London in Mrach 2020..." />
              </Tips>
            </div>
          </div>
        }
        buttonProps={{
          icon: '../img/pen.svg',
          text: 'Draw',
          onClick: () => {},
        }}
      />
    </>
  );
};

export default DashboardPage;
