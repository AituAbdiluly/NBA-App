import React from 'react';
import '../videoList.css';

import VideosTemplate from '../VideosTemplate';

const VideosRelated = (props) => {
    return (
        <div className="relatedWrapper">
            <VideosTemplate 
                data={props.data}
                team={props.teams}
            />
        </div>
    );
};

export default VideosRelated;