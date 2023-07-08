import {
  BarChart as BChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarChart = ({ data }: { data: any; }) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='10 10 ' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey='count' fill='#3b82f6' barSize={75} />
      </BChart>
    </ResponsiveContainer>
  );
};

export default BarChart;