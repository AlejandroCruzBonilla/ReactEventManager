import Plot from 'react-plotly.js';

import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DashboardPage = () => {
  const events = useSelector((state: RootState) => state.events);

  const eventsByYear = (year: string) => {
    const ev = events.filter(event => event.date.includes(year));
    return months.map((_, index) => {
      const months = ev.filter(({ date }) => {
        const month = new Date(date).getMonth();
        return month === index;
      }).length;
      return months;
    });
  };

  const eventMonths2023 = eventsByYear('2023');
  const eventMonths2024 = eventsByYear('2024');

  return (
    <div>
      <div>
        <Plot
          data={[
            {
              x: months,
              y: eventMonths2023,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
            { type: 'bar', x: months, y: eventMonths2023 },
          ]}
          layout={{ title: 'Events 2023' }}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div>
        <Plot
          data={[
            {
              x: months,
              y: eventMonths2024,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
            { type: 'bar', x: months, y: eventMonths2024 },
          ]}
          layout={{ title: 'Events 2024' }}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
