

import './Shop.css';

export default function Shop({image,businessName, businessLink}){
    const handleClick = (e)=>{
        window.open(businessLink,'_blank');
    }

    return <div className='shop-container'>
                <h4 className='shop-h4'>{businessName}</h4>
                <div className='shop-link'>

                    <div className='shop-image-fade-component' onClick={handleClick}>  
                        <h4 className='mobile-shop-h4'>{businessName}</h4>  
                    </div>
                    <img src={`/images/${image}`} alt={`${businessName}-img`} className='shop-img'/>
                </div>
            </div>;
}