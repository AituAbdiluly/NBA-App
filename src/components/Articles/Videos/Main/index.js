import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/Slider';
import VideoList from '../../../widgets/VideoList/VideoList';

const Videos = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={6}
                amount={9}
                settings={{
                    dots: false
                }}
            />
             <VideoList
                type="card"
                loadmore={true}
                start={0}
                amount={6}
                title={false}
            />
        </div>
    );
};

export default Videos;