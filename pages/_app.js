import LaunchContextProvider from '../spacexContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LaunchContextProvider>
      <Component {...pageProps} />
    </LaunchContextProvider>
  )
}

export default MyApp
