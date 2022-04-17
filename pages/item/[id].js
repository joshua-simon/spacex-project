import { useState,useContext,useEffect } from 'react'
import { LaunchContext } from '../../spacexContext';
import { useRouter } from 'next/router'

const ListItem =  () => {
    const data = useContext(LaunchContext)
    const [ path,setPath ] = useState('')
    const [ launchInfo, setLaunchInfo ] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (router.isReady) {
          setPath(router.query.id);
        }
      }, [router.isReady]);

       //function to extract pathname and id from URL
      const retrievePathAndId = (path) => {
        const newPath = path.split('')
        let arr = []
        for(let i=0; i<newPath.length; i++){
          if(newPath[i] === '-'){
            newPath[i] = ' '
          }
        }
        const splitWords = newPath.join('')
        const result = splitWords.split(' ')
        const data = {pathName: result[0], id: result[1]}
        return data
      }

      const result = retrievePathAndId(path)
      const { pathName, id } = result
      
      useEffect(() => {
        const getData = async () => {
          const response = await data
          setLaunchInfo(response)
        }
        getData()
      },[])
     
      const filteredItem = launchInfo && launchInfo[pathName] && launchInfo[pathName].filter(item => {
        return(item.id === id)
      })

    return ( 
        <div>
            {filteredItem && filteredItem.map((item,i) => {
              return (
                <div key = {i} className = 'list-container'>
                  <p>Mission name: {item.mission_name}</p>
                  <p>Mission type: {item.__typename}</p>
                  <p>Mission date: {item.launch_date_local}</p>
                </div>
              )
            })}
        </div>
     );
}
 
export default ListItem;