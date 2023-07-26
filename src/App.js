import  './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/contact.scss';
import './styles/footer.scss';
import './styles/service.scss';
import './styles/mediaquery.scss';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Service from './components/Service';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
function App() {
  return (
<>
<Router>
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/services' element={<Service/>}/>
</Routes>
<Footer/>
</Router>
</>
  );
}

export default App;
