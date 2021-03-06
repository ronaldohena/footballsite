import React from 'react';
import { Link } from 'react-router-dom';
 
import '../Button/Button.css'

const Buttons = (props) => {

    let template = null;
    switch(props.type) {
        case 'loadmore':
            template = (
                <div className="blue-btn"
                    onClick={props.loadMore}
                >
                    {props.cta}
                </div>
            );
            break;
            case 'linkTo':
                template = (
                    <div className="blue-btn">
                        <Link to={props.linkTo} >{props.cta}</Link>
                    </div>
                )
                break;
        default:
            template = null;
    }


    return template;
}


export default Buttons;