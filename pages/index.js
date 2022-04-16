import { useContext } from 'react'
import { LaunchContext } from '../spacexContext'
import Link from 'next/link'
import Card from '../components/Card'

export const Home = () => {
  const data= useContext(LaunchContext)

  return (
    <div>
        <Link href = {`/launchesPast`}>
        <div>{data.launchesPast.length}</div>
        </Link>
    </div>
  )
}

export default Home


