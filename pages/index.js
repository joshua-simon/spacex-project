import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Link from 'next/link'

export const getStaticProps = async () => {

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });

  return {
    props: {
      launches: data.launchesPast
    }
  }
}

export default function Home({ launches }) {

  return (
    <div>
      {launches.map(launch => {
        return(
          <Link href = {`/items/${launch.id}`} key = {launch.id}>
            <a>
              <p>{launch.mission_name}</p>
            </a>
          </Link>
        )
      })}
    </div>
  )
}
