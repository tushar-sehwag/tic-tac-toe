import React from 'react';

import logo from '../../images/Logo.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
          <img src={logo} width='90px' alt="logo"></img>
        </div>
        
    )
}

export default Header;
