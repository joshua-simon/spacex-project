import { useContext } from 'react'
import { LaunchContext } from '../spacexContext'
import Link from 'next/link'


export const Home = () => {
  
  const value = useContext(LaunchContext)
  console.log(value)
  return (
    <div>
      this is landing page
    </div>
  )
}

export default Home
