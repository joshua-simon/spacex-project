import { useRouter } from 'next/router'


const Items = () => {
    const router = useRouter()
    console.log('router', router.query.id)
    const id = router.query.id
    return ( 
        <div>
            this is items
        </div>
     );
}
 
export default Items;