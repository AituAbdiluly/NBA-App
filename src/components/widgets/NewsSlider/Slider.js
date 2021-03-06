import React, { Component } from 'react';
import { firebaseArticles, firebaseLooper, firebase } from '../../../firebase';

import SliderTemplates from './SliderTemplates';

class NewsSlider extends Component {

    state = {
        news: []
    }

    componentWillMount() {

        firebaseArticles.limitToFirst(3).once('value')
        .then(snapshot => {
            const news = firebaseLooper(snapshot);            

            // news.forEach((item, i) => {
            //     firebase.storage().ref('images')
            //     .child(item.image).getDownloadURL()
            //     .then(url => {
            //         news[i].image = url;

            //         this.setState({
            //             news
            //         })
            //     })
            // })


            const asyncFunc = (item, i, callback) => {
                firebase.storage().ref('images')
                .child(item.image).getDownloadURL()
                .then(url => {
                    news[i].image = url;

                    callback();
                })
            }

            let requests = news.map((item, i) => (
                new Promise(resolve => {
                    asyncFunc(item, i, resolve);
                })
            ))

            Promise.all(requests)
            .then(() => {
                
                this.setState({
                    news
                })
            })

        })


        // axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        // .then(response => {
        //     this.setState({
        //         news: response.data
        //     });
        // });
    }

    render() {
        
        
        return (
            <div>
                <SliderTemplates 
                    data={this.state.news} 
                    type={this.props.type}
                    settings={this.props.settings}
                />
            </div>
        );
    }
}

export default NewsSlider;