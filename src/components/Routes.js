import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';

//components
import Home from './Home/Home'
import Layout from '../hoc/Layout/Layout';
//import NewsList from './widgets/NewsList/NewsList';
import NewsArticle from './Articles/News/Post/index'
import VideosArticle from './Articles/Videos/Video/index';
import NewsMain from './Articles/News/Main/NewsMain';
import VideosMain from './Articles/Videos/Main/VideosMain';

class Routes  extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/new" exact component={NewsMain} />
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos/:id" exact component={VideosArticle} />
                    <Route path="/videos" exact component={VideosMain} />
                </Switch>
            </Layout>
        );
    }
}
export default Routes;
