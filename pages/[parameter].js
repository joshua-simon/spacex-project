import { useRouter } from 'next/router'
import { useContext,useState,useEffect } from 'react'
import { LaunchContext } from '../spacexContext'

const Items = () => {
   
    const [ path, setPath ] = useState('')

    const data =  useContext(LaunchContext)
    const router =  useRouter()

    useEffect(() => {
        if(router.isReady){
            setPath(router.query.parameter)
        }         
    },[router.isReady])
    
    console.log('this is data', data[path])

    return ( 
        <div>
            {data && path && data[path].map(item => {
                return(
                    <p>{item.id}</p>
                )
            })}
        </div>
     );
}
 
export default Items;