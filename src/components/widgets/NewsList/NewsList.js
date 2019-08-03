import React, {Component} from 'react';
import { CSSTransition, TransitionGroup }  from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './NewsList.css'

import {URL} from '../../../Config';
import Button from '../Button/Button';

import CardInfo from '../CardInfo/CardInfo';



class NewsList extends Component {

    state ={
        teams: [],
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }

    request = (start, end) =>{

        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(response =>{
                this.setState({
                    teams:response.data
                })
            })
        }

        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }

    loadMore = () =>{
        let end =  this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }
    
    renderNews = (type) =>{
        let template = null;

        const newslist_wrapper ={
            boxSizing: 'border-box',
            opacity: '0',
            transform: 'translateX(-100%)',
            transition: 'all .5s ease-in' 
        }

        const newslist_wrapper_enter = {
            opacity: '1',
            transform: 'translateX(10)'
        }

        switch(type){
            case('card'):
                template = this.state.items.map((item, i) =>(
                    <CSSTransition
                        styles={{
                            enter: newslist_wrapper,
                            enterActive: newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div >
                            <div className="newslist-item">
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo 
                                        teams={this.state.teams}
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                    <p className="itemtext">{item.body}</p>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break;
            case('cardMain'):
                template = this.state.items.map((item, i) =>(
                    <CSSTransition
                        styles={{
                            enter: newslist_wrapper,
                            enterActive: newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <Link to={`/articles/${item.id}`}>
                            <div className="flex">
                                <div className="left"
                                    style={{
                                        background: `url('/images/articles/${item.image}')`
                                    }}
                                >
                                    <div></div>
                                </div>
                                <div className="right">
                                    <CardInfo 
                                        teams={this.state.teams} 
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2> 
                                </div>
                            </div>
                        </Link>
                    </CSSTransition>
                ))
                break; 
            default:
            template = null;
        }

        return template;
    }

    render() {
        //console.log(this.state.teams);
        return(
            
            <div className="readmore">
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button 
                    type="loadmore"
                    loadMore={()=> this.loadMore()}
                    cta = "Load More News"
                />
            </div>
        )
    }
}

export default NewsList;