import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Venue: 1500,
    Services: 650,
    Bookings: 2500,
  },
  {
    name: 'Feb',
    Venue: 3000,
    Services: 1398,
    Bookings: 4100,
  },
  {
    name: 'Mar',
    Venue: 2000,
    Services: 6000,
    Bookings: 400,
  },
  {
    name: 'Apr',
    Venue: 2780,
    Services: 3908,
    Bookings: 400,
  },
  {
    name: 'May',
    Venue: 1890,
    Services: 4800,
    Bookings: 2300,
  },
  {
    name: 'June',
    venue: 2390,
    Services: 3800,
    Bookings: 2500,
    Booking: 3500,
  },
  {
    name: 'July',
    Venue: 3490,
    Services: 4300,
    Bookings: 2100,
  },
  {
    name: 'Aug',
    venue: 3190,
    Services: 4300,
    Bookings: 2100,
  },
  {
    name: 'Sep',
    Venue: 3490,
    Services: 4300,
    Bookings: 2300,
  },
  {
    name: 'Oct',
    Venue: 3490,
    Services: 4300,
    Bookings: 2600,
  },
  {
    name: 'Nov',
    Venue: 3490,
    Services: 4300,
    Bookings: 2700,
  },
  {
    name: 'Dec',
    Venue: 3490,
    Services: 4300,
    Bookings: 2000,
  },
];
/**
 *
 * @returns {React.ReactElement} --
 */
const CustomBarChart = () => {
  return (
    <ResponsiveContainer>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Venue" fill="#FFBA00" />
        <Bar dataKey="Services" fill="#1BE3BB" width="10px" />
        <Bar dataKey="Bookings" fill="#FF5F6D" />

        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          justifyContent="space-evenly"
          padding="10px"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default CustomBarChart;
