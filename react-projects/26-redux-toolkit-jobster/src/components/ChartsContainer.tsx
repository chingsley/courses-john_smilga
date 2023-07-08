import { useState } from 'react';
import { useSelector } from 'react-redux';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { ChartsContainerWrapper } from '../assets/wrappers';
import { RootState } from '../app/store';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store: RootState) => store.allJobs);

  return (
    <ChartsContainerWrapper>
      <h4>Monthly applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </ChartsContainerWrapper>
  );
};

export default ChartsContainer;