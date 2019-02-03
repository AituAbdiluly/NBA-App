import React from 'react';
import Slick from 'react-slick';
import {Link} from 'react-router-dom';
import './slider.css';


const SliderTemplates = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }

    let template = null;

    switch (props.type) {
        case ('featured'):
            template = props.data.map((item, i) => {
                return(
                    <div key={i}>
                        <div className="featured_item">
                            <div className="featured_image"
                                style={{
                                    background: `url(../images/articles/${item.image})`
                                }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className="featured_caption">
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            });
            break;
    
        default:
            template = null;
    }

    return (
        <div>
            <Slick {...settings}>
                {template}
            </Slick>
        </div>
    );
};

export default SliderTemplates;