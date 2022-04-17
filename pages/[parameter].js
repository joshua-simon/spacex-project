import { useRouter } from 'next/router'
import { useContext,useState,useEffect } from 'react'
import { LaunchContext } from '../spacexContext'
import Link from 'next/link'


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
          return (
            <Link href = {`/item/${item.id}`}>
              <div key={i} className = 'list-container'>
                <p>{item.mission_name || item.name || item.manufacturer}</p>
                <p>{item.launch_date_local}</p>
              </div>
            </Link>
          )
        })}
    </div>
  );
};
 
export default Items;