import { useContext } from 'react'
import { LaunchContext } from '../spacexContext'
import Link from 'next/link'
import Card from '../components/Card'


export const Home = () => {
  const data= useContext(LaunchContext)

  return (
    <div>
        <Link href = '/launchesPast'>
          <div>{data.launchesPast.length} launches last year</div>
        </Link>
        <Link href = '/launchesUpcoming'>
          <div>{data.launchesUpcoming.length} launches coming up</div>
        </Link>
        <Link href = '/missions'>
          <div>{data.missions.length} missions to date</div>
        </Link>
        <Link href = '/payloads'>
          <div>{data.payloads.length} payloads to date</div>
        </Link>
        <Link href = '/users'>
          <div>{data.users.length} Users</div>
        </Link>
        <Link href = '/coresPast'>
          <div>{data.coresPast.length} Cores re-used to date</div>
        </Link>
    </div>
  )
}

export default Home


