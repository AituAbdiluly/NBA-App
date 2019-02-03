import React, { Component } from 'react';
import axios from 'axios';

import {URL} from '../../../config';
import Button from '../Buttons/Button';

import './videoList.css';

class VideoList extends Component {

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    renderTitle = (title) =>{
        return title ? 
        <h3><strong>NBA</strong> Videos</h3> 
        : 
        null
    }

    loadMore = () => {

    }

    renderBtn = () => {
        return this.props.loadmore ?
        <Button
            type='loadmore'
            cta='Load more videos'
            loadMore={() => this.loadMore()}
        />
        :
        <Button 
            type="linkTo"
            cta="More videos"
            linkTo='/videos'
        />
    }

    render() {
        return (
            <div className="videoList_wrapper">
                {this.renderTitle(this.props.title)}
                {this.renderBtn()}
            </div>
        );
    }
}

export default VideoList;