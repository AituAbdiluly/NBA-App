import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { firebaseArticles, firebaseTeams, firebaseLooper, firebase } from '../../../firebase';

import styles from './newsList.module.css';

import Button from '../Buttons/Button';
import CardInfo from '../CardInfo/CardInfo';

class NewsList extends Component {

    state = {
        teams: [],
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        if(this.state.teams.length < 1){

            firebaseTeams.once('value')
            .then(snapshot => {
                const teams = firebaseLooper(snapshot);

                this.setState({
                    teams
                })
            })

            // axios.get(`${URL}/teams`)
            // .then(  response => {
            //     this.setState({
            //         teams: response.data
            //     })
            // })

        }

        firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
        .then(snapshot => {
            const articles = firebaseLooper(snapshot);

            const asyncFunc = (item, i, callback) => {
                firebase.storage().ref('images')
                .child(item.image).getDownloadURL()
                .then(url => {
                    articles[i].image = url;

                    callback();
                })
            }

            let requests = articles.map((item, i) => {
                return new Promise(resolve => {
                    asyncFunc(item, i, resolve);
                })
            })

            Promise.all(requests)
            .then(()=>{
                this.setState({
                    items: [...this.state.items, ...articles],
                    start,
                    end
                })
            })
        })
        .catch(e => {
            console.log(e);
        })
        // axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        // .then( response => {
        //     this.setState({
        //         items: [...this.state.items, ...response.data],
        //         start,
        //         end
        //     })
        // })

        
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        
        this.request(this.state.end + 1, end);
    }

    renderNews = (type) => {
        let template = null;

        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition 
                        key={i}
                        classNames={{
                            enter: styles.newsList_wrapper,
                            enterActive: styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                    >
                        <div className={styles.newslist_item}>
                            <Link to={`/articles/${item.id}`}>
                                <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    </CSSTransition>
                ));
                break;
            case 'cardMian':
                template = this.state.items.map((item, i) => (
                    <CSSTransition 
                        key={i}
                        classNames={{
                            enter: styles.newslist_item,
                            enterActive: styles.newsList_wrapper_enter
                        }}
                        timeout={500}
                    >
                        <Link to={`/articles/${item.id}`}>
                            <div className={styles.flex_wrapper}>
                                <div className={styles.left} style={{
                                    backgroundImage: `url(${item.image})`
                                }}>
                                    <div></div>
                                </div>
                                <div className={styles.right}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>   
                        </Link>
                        
                    </CSSTransition>
                ));
                
                break;
            default:
                template = null;
                break;
        }

        return template;
    }
    
    render() {

        return (
            <div>
                <TransitionGroup
                    component='div'
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                
                <Button 
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta='Load more'
                />
        
            </div>
        );
    }
}

export default NewsList;