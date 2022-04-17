import { useState,useContext,useEffect } from 'react'
import { LaunchContext } from '../../spacexContext';
import { useRouter } from 'next/router'

const ListItem = () => {
    const data = useContext(LaunchContext)
    const [ path,setPath ] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
          setPath(router.query.id);
        }
      }, [router.isReady]);

      console.log(router.query)
    return ( 
        <div>
            this is the list item
        </div>
     );
}
 
export default ListItem;