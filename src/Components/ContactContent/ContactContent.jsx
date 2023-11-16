

import { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import './ContactContent.css';

export default function ContactContent(){

    const themeContext = useContext(ThemeContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = [e.target[0].value,e.target[1].value,e.target[2].value];

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if(emailRegex.test(e.target[1].value) !== true && 
                           phoneRegex.test(e.target[1].value) !== true ){
                           
            return document.getElementById('invalid-data-message').style.display = 'block';

        }

        fetch(themeContext.APIURL+'mailbox',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            type:'cors',
            body:JSON.stringify(data)
        }).then(res =>{return res.json()})
        .then(res =>{
            console.log(res);
            if(res.ok === true) window.location.reload();
            else document.getElementById('error-message').style.display = 'block';
        }).catch(err =>{
            document.getElementById('error-message').style.display = 'block';
        })
    };

    return <>
            <section className='contact-container'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <h2 className='contact-h2'>Contacto</h2>
                    <label className='contact-label'>nombre:</label>
                    <input className='contact-input' type='text'></input>
                    <label className='contact-label'>mail o teléfono:</label>
                    <input className='contact-input' type='text'></input>
                    <div className='message-container'>
                        <label className='contact-label'>mensaje:</label>
                        <div className='textarea-container'>
                        <textarea className='contact-textarea'></textarea>
                        </div>
                    </div>
                    <div className='contact-submit-button-container'>
                        <p id='invalid-data-message' className='err-message'>debes ingresar un teléfono o email válidos</p>
                        <p id= "error-message" className='err-message'> hubo un error al enviar el mensaje</p>
                        <button className='contact-form-submit-bottom'>Enviar</button>
                    </div>
                </form>
            </section>
            </>;
}