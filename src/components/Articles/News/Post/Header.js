import React from 'react';

import TeamNfo from '../Elements/TeamNfo';
import PostData from '../Elements/PostData';

const Header = (props) => {

    const teamNfo = (team) => {
        return team ? (
            <TeamNfo team={team}/>
        ) : null;
    }

    const postData = (author, date) => (
        <PostData data={{author, date}}/>
    )

    return (
        <div>
            {teamNfo(props.teamData)}
            {postData(props.author, props.date)}
        </div>
    );
};

export default Header;