import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    //Empty tag groups things together.
    <>
    <NavBar></NavBar>
    <Component {...pageProps} />
    </>);
}

export default MyApp
