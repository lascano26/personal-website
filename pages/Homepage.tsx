import Navbar from '../src/components/Navbar';
import MainCard from '../src/components/MainCard';

export default function Homepage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0
    }}>
      <Navbar />
      <MainCard />
    </div>
  );
}