import React from 'react';
import Slick from 'react-slick';
import { Link } from 'react-router-dom';

import './slider.css'

const SliderTemplates = (props) =>{
    //console.log(props);
    
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings 
    }

    let template = null;

    switch(props.type){
        case('featured'):
            template = props.data.map((item, i) =>{
                return(
                    <div key={i}>
                        <div className="featured-item">
                            <div 
                                style={{
                                    background: `url(../images/articles/${item.image})`
                                }}
                                className="featured-image"
                            ></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className="featured-caption">
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })
            break;
        default:
        template = null;
    }

    return (
        <Slick {...settings}>
            {template} 
        </Slick>
    )
}


export default SliderTemplates;