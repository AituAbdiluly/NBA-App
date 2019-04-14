import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/Slider';
import NewsList from '../../../widgets/NewsList/NewsList';

const News = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={3}
                amount={6}
                settings={{
                    dots: false
                }}
            />
            <NewsList 
                type="cardMian"
                loadmore={true}
                start={0}
                amount={2}
            />
        </div>
    );
};

export default News;