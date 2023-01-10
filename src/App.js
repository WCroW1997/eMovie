import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './Pages/Home';
// import Catalog from './Pages/Catalog'
// import Dateils from './Pages/Dateils'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

import Routes from './config/Routes'

function App() {
  return (
    <BrowserRouter>
      <Route render={props => (
       <>
          <Header {...props} />
          <Routes/>
          <Footer/>
       </>
      )}
      
      />
    </BrowserRouter>
  );
}

export default App;
