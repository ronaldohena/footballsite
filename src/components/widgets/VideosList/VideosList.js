import React,{Component} from 'react'
import {URL} from '../../../Config';
import axios from 'axios';
import '../VideosList/VideosList.css'
import Button from '../Button/Button';


class VideosList extends Component {
    state={
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = () =>{
        return this.props.title ? 
            <h3><strong>Roni</strong> Videos</h3>
        : null;
    }

    renderButton = () =>{
        return this.props.loadmore ? 
        'loadmore' 
        : 
        <Button 
            type="linkTo" 
            cta="More Videos"
            linkTo="/videos" 
        />
    }

    render (){
        return(
            <div className="videosList">
                {this.renderTitle()}
                {this.renderButton()}
            </div>
        )
    } 
}

export default VideosList;