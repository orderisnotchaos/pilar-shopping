
import './AboutUsContent.css';

export default function AboutUsContent(){

    return <>
            <section className='about-us-content-section'>
                <div className='content-wrapper'>
                    <h2 className='about-us-content-h2'>
                        Nombre
                    </h2>
                    <p className='about-us-paragraph'>
                        el nombre surge tras haber pensado qué nombre ponerle a un sitio que contiene links
                        y imágenes de locales en pilar, es importante entender que el sitio solo abarca shoppings
                        de la localidad de pilar.
                    </p>
                </div>
                <div className='content-wrapper'>
                    <h2 className='about-us-content-h2'>
                        Objetivo
                    </h2>
                    <p className='about-us-paragraph'>
                        Nuestro objetivo es facilitarle a la gente el proceso de realizar una compra en la ciudad de pilar
                        brindando los links y logos de un número de negocios de pilar.
                    </p>
                </div>
            </section>

            </>;
}