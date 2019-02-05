import React from 'react';

//Components
import NewsSlider from '../widgets/NewsSlider/Slider';
import NewsList from '../widgets/NewsList/NewsList';
import VideoList from '../widgets/VideoList/VideoList';

const Home = () => {
    return (
        <div>
            <NewsSlider 
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots: false
                }}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
            />
            <VideoList
                type="card"
                loadmore={true}
                start={0}
                amount={3}
                title={true}
            />
        </div>
    );
};

export default Home;