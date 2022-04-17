import { useContext } from 'react'
import { LaunchContext } from '../spacexContext'
import Link from 'next/link'
import Card from '../components/Card'


export const Home = () => {
  const data = useContext(LaunchContext);

  return (
    <>
      <div className='header'>
        <img src="https://img.icons8.com/cotton/64/000000/spacex-starship.png"/>
        <h1>SpaceX Launch Information</h1>
      </div>
      <div className="link-container">
        <Link href="/launchesPast">
          <div className="link-container-item">
            {data.launchesPast.length} Launches last year
          </div>
        </Link>
        <Link href="/launchesUpcoming">
          <div className="link-container-item">
            {data.launchesUpcoming.length} Launches coming up
          </div>
        </Link>
        <Link href="/missions">
          <div className="link-container-item">
            {data.missions.length} Missions to date
          </div>
        </Link>
        <Link href="/payloads">
          <div className="link-container-item">
            {data.payloads.length} Payloads to date
          </div>
        </Link>
        <Link href="/users">
          <div className="link-container-item">{data.users.length} Users</div>
        </Link>
        <Link href="/coresPast">
          <div className="link-container-item">
            {data.coresPast.length} Cores re-used to date
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;


