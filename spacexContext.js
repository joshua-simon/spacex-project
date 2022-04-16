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
              id
            }
            launchesUpcoming {
              id
              details
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
