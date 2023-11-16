import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContext from './contexts/ThemeContext';
import './App.css';
import Index from './Routes/Index/Index';
import AboutUs from './Routes/AboutUs/AboutUs';
import Contact from './Routes/Contact/Contact';
import Search from './Routes/Search/Search';
import { useEffect, useState } from 'react';
import NotFound from './Routes/NotFound/NotFound';


function App() {
  const APIURL = 'http://pilar-shopping.com:8001/';
  const [businesses,setBusinesses] = useState([]);
  const [displayedBusinesses,setDisplayedBusinesses] = useState([]);
  
  useEffect(() =>{
    fetch(APIURL,{
      method:'GET',
      mode:'cors'
    }).then(res => {return res.json();})
      .then(res =>{

        setBusinesses(res);
        setDisplayedBusinesses(res);
      })
      .catch(err => console.log(err));

  },[]);

  
  return (
    <div className="App">
      <ThemeContext.Provider value={{businesses,setDisplayedBusinesses,APIURL}}>
        <BrowserRouter>
        <Routes>
          <Route exact path={`/`} element={<Index businesses={businesses} />}></Route>
          <Route exact path ='/sobre-nosotros' element={<AboutUs />} />
          <Route exact path='/contacto' element={<Contact />} />
          <Route path = '/search/:id' element={<Search businesses= {displayedBusinesses}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
