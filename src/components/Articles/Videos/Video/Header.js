import React from 'react';

import TeamNfo from '../../News/Elements/TeamNfo';

const Header = (props) => {

    const teamNfo = (team) => {
        return team ? (
            <TeamNfo team={team}/>
        ):null;
    }

    return (
        <div>
            {teamNfo(props.teamData)}
        </div>
    );
};

export default Header;