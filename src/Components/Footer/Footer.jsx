

import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer(){

    return <footer className='web-footer'>
                <ul className='footer-first-ul'>
                    <li className='footer-li'>
                        <ul className='footer-ul'>
                            <li className='footer-li-1'>
                                <h5 className='footer-h2'>Contacto:</h5>
                            </li>
                            <li className='footer-li-1'>
                                <p className='contact-p'>contacto@pilar-shopping.com</p>
                            </li>
                        </ul>
                    </li>
                    <li className='footer-li'>
                        <ul className='footer-ul'>
                            <li className='footer-li-2'>
                                <h5 className='footer-h2'>Links:</h5>
                            </li>
                            <li className='footer-li-2'>
                                <p className='link-container'>
                                    <Link to={'/'} className='footer-link'>Indice</Link>
                                </p>
                                <p className='link-container'>
                                    <Link to={'/contacto'} className='footer-link'>Contacto</Link>
                                </p>
                                <p className='link-container'>
                                    <Link to={'/sobre-nosotros'} className='footer-link'>Sobre Nosotros</Link>
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li className='footer-li'>
                        <ul className='footer-ul'>
                            <li className='footer-li-3'>
                                <h5 className='footer-h2'>Redes:</h5>
                            </li>
                            <li className='footer-li-3'>
                                
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className='copyright-disclaimer'>Todos los derechos reservados, pilar-shopping</p>
            </footer>;
}