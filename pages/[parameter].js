import { useRouter } from 'next/router'
import { useContext,useState,useEffect } from 'react'
import { LaunchContext } from '../spacexContext'

const Items = () => {

  const [path, setPath] = useState("");
  const data = useContext(LaunchContext);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setPath(router.query.parameter);
    }
  }, [router.isReady]);

  return (
    <div>
      {data &&
        path &&
        data[path].map((item, i) => {
          console.log(item.missions[0].name)
          return (
              <div key={i}>
                <p>{item.mission_name || item.name || item.manufacturer || item.missions[0].name}</p>
                <p>{item.launch_date_local}</p>
              </div>
          )
        })}
    </div>
  );
};
 
export default Items;