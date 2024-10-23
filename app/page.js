import { getLaunches } from './services/spacexService';
import Filter from './components/Filter';
import LaunchList from './components/LaunchList';
export default async function Home() {
  const launches = await getLaunches({ limit: 100 });

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <Filter />
      <LaunchList launches={launches} />
    </div>
  );
}
