import NavBar from '../../Components/NavBar/NavBar.jsx';
import Shop from '../../Components/Shop/Shop';
import ContentContainer from '../../Components/ContentContainer/ContentContainer.jsx';
import './Index.css';
import Footer from '../../Components/Footer/Footer.jsx';

export default function Index({businesses}){

    
    return(
        <>
            <NavBar />
            <div className='index-container'>

                <ContentContainer >
                    { businesses ? businesses.map((business) => {
                        return <Shop image={business.image} businessName={business.name} businessLink={business.link} />
                    }): <></>}
                </ContentContainer>

            </div>
            <Footer />
        </>
    );
}