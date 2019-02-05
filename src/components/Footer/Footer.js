import React from 'react';
import {Link} from 'react-router-dom';

import styles from './footer.module.css';
import {CURRENT_YEAR} from '../../config';

const Footer = () => {

    
    
    return (
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img src="/images/nba_logo.png" alt="nba logo"/>
            </Link>

            <div className={styles.right}>
                @NBA {CURRENT_YEAR} All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;