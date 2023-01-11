import React from 'react'
import { User } from '../sharedTypes';

interface DashboardProps {
  user: User | null;
}
const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <section className="section">
      <h4>Hello, {user?.name}</h4>
    </section>
  )
}

export default Dashboard;