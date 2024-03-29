import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    //Empty tag groups things together.
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>);
}

export default MyApp;
