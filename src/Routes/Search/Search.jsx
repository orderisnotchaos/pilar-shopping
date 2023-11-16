

import NavBar from '../../Components/NavBar/NavBar';
import ContentContainer from '../../Components/ContentContainer/ContentContainer';
import Shop from '../../Components/Shop/Shop';
import './Search.css';
import Footer from '../../Components/Footer/Footer';


export default function Search({businesses}){

    return <>
            <NavBar />
            <ContentContainer >
                    { businesses ? businesses.map((business) => {
                        return <Shop image={business.image} businessName={business.name} businessLink={business.link} />
                    }): <></>}
            </ContentContainer>
            <Footer/>
            </>
}