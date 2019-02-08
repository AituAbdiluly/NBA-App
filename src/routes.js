import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import NewsArticle from './components/Articles/News/Post';
import Layout from './hoc/Layout/Layout';
import VideoArticle from './components/Articles/Videos/Video';
import News from './components/Articles/News/Main/index';
import Videos from './components/Articles/Videos/Main/index';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={News}/>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                    <Route path="/videos/" exact component={Videos}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;