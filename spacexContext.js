import { createContext } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const LaunchContext = createContext();

const getLaunchData= async () => {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
            launchesPast(limit: 10) {
              mission_name
              launch_date_local
              links {
                article_link
                video_link
              }
              id
            }
            launchesUpcoming {
              id
              mission_name
              launch_date_local
            }
            missions {
              id
              name
            }
            payloads {
              id
              manufacturer
              nationality
            }
            users {
              id
              name
            }
            coresPast {
              reuse_count
              missions {
                flight
                name
              }
            }
          }
    `,
  });

  return data;
};

const data = await getLaunchData();

const LaunchContextProvider = (props) => {
  return (
    <LaunchContext.Provider value={data}>
      {props.children}
    </LaunchContext.Provider>
  );
};

export default LaunchContextProvider;
