import { useContext } from 'react'
import { LaunchContext } from '../spacexContext'
import Link from 'next/link'


export const Home = () => {
  
  const data= useContext(LaunchContext)
  console.log(data)
  return (
    <div>
      this is landing page
    </div>
  )
}

export default Home
