import {
  ResponsiveContainer,
  AreaChart as AChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChart = ({ data }: { data: any; }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type='monotone' dataKey='count' stroke='#1e3a8a' fill='#3b82f6' />
      </AChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;