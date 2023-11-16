
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';


export default function NavBar(){

    const themeContext = useContext(ThemeContext);
    const navigate = useNavigate();

    const submitSearch = (searchWord,objectList) =>{
        const searchLower = searchWord.toLowerCase();

        // Perform a linear search through the list of objects
        const results = objectList.filter(obj => obj.name.toLowerCase().includes(searchLower));
    
        return results;
    }
    const handleShoppingPilarClick = (e) =>{
        navigate('/');
    };
    
    const handleAboutUsClick = (e) =>{
        navigate('/sobre-nosotros');
    };

    const handleContactClick = (e) =>{
        navigate('/contacto');
    };

    const inputClickCaptureHandler = (e) =>{
        e.target.placeholder = '';
    };

    const inputBlurHandler = (e) =>{
        e.target.placeholder = 'Buscar...';
    };

    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
           let searchResult = submitSearch(e.target.value,themeContext.businesses);
           themeContext.setDisplayedBusinesses(searchResult);
           navigate(`/search/${document.getElementById('search-bar').value}`);
        }
    };

    const handleSearchClick = (e) =>{
        if(document.getElementById('search-bar').value !== ''){
            let searchResult = submitSearch(document.getElementById('search-bar').value,themeContext.businesses);
            themeContext.setDisplayedBusinesses(searchResult);
            navigate(`/search/${document.getElementById('search-bar').value}`);
        }
    }

    return <header className='web-nav-bar'>
                <ul className='nav-bar-ul'>
                    <li className='nav-bar-li-1' onClick={handleShoppingPilarClick}>
                        shopping-pilar
                    </li>
                    <li className='nav-bar-li-2'>

                        <input id="search-bar" className='search-bar-input' placeholder='buscar...' onClickCapture={inputClickCaptureHandler} onBlur={inputBlurHandler} onKeyDown={handleKeyDown}></input>
                        <button className='nav-bar-search-button' onClick={handleSearchClick}><i className="fa-solid fa-magnifying-glass maginfying-glass"></i></button>
                    </li>
                    <li className='nav-bar-li-3'>
                        <ul className='nav-bar-center-ul'>

                            <li className='nav-bar-center-li' onClick={handleAboutUsClick}>
                                Sobre Nosotros
                            </li>
                            <li className='nav-bar-center-li' onClick={handleContactClick}>
                                Contacto
                            </li>
                        </ul>
                    </li>
                </ul>
            </header>
}