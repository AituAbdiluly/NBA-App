import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import NewsArticle from './components/Articles/News/Post';
import Layout from './hoc/Layout/Layout';
import VideoArticle from './components/Articles/Videos/Video';
import News from './components/Articles/News/Main/index';
import Videos from './components/Articles/Videos/Main/index';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashboard';

import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';

const Routes = (props) => {
    return (
        <Layout user={props.user}>
            <Switch>
                <PublicRoutes {...props} restricted={false} path="/" exact component={Home}/>
                <PublicRoutes {...props} restricted={false} path="/news" exact component={News}/>
                <PublicRoutes {...props} restricted={false} path="/articles/:id" exact component={NewsArticle}/>
                <PublicRoutes {...props} restricted={false} path="/videos/:id" exact component={VideoArticle}/>
                <PublicRoutes {...props} restricted={false} path="/videos" exact component={Videos}/>
                <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
                <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
            </Switch>
        </Layout>
    );
}

export default Routes;