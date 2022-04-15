import { useState,useEffect,createContext } from 'react'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

export const LaunchContext = createContext()


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

const LaunchContextProvider = (props) => {

    return(
        <LaunchContext.Provider value = 'test'>
            {props.children}
        </LaunchContext.Provider>
    )
}

export default LaunchContextProvider