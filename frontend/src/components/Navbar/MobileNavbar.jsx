//Style
import styles from '../../styles/Navbar/MobileNavbar.module.scss'
import { FaTimes, FaBars } from "react-icons/fa";

//Components
import ListItemLink from "./ListItemLink";

//Util
import { useState, useEffect } from "react";

const MobileNavbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const closeNav = ()=>{
        setNavOpen(false)
    }

    return (
        <div className = {styles.container}>
            <div>
                {/* BARS */}
                <div className={`${styles.iconContainer} ${styles.bar}`}
                    onClick ={() => setNavOpen(true)}
                > 
                    <FaBars />
                </div>

                {/* NAV */}
                <nav className={navOpen ? styles.navActive : undefined}>
                <ul>
                        {/*TIMES*/}
                        <div className={`${styles.iconContainer} ${styles.times}`}
                        onClick={() => setNavOpen(false)}
                        >
                            <FaTimes />
                        </div>
                        
                        {/* HOME */}
                        <ListItemLink 
                            url=""
                            optionClass={styles.linkColor}
                            clickHandler={closeNav}
                        >
                            <h3>Home</h3>
                        </ListItemLink>
                        
                        {/* CATEGORIES */}
                        <ListItemLink 
                            url="categories"
                            optionClass={styles.linkColor}
                            clickHandler={closeNav}
                        >
                            <h3>Categories</h3>
                        </ListItemLink>
                        
                        {/* TRANSACTIONS */}
                        <ListItemLink 
                            url="transactions"
                            optionClass={styles.linkColor}
                            clickHandler={closeNav}
                        >
                            <h3>Transactions</h3>
                        </ListItemLink>

                        {/* Wallet */}
                        <ListItemLink
                            url="wallet"
                            optionClass={styles.linkColor}
                            clickHandler={closeNav}
                        >
                            <h3>Wallet</h3>
                        </ListItemLink>
                        
                        {/* Profile */}
                        <div className={styles.mobileMenuLinks}></div>
                        < ListItemLink url="profile"
                            optionClass={styles.linkColor}
                            clickHandler={closeNav}
                        >
                            <h3>Profile</h3>
                            </ListItemLink>
                        
                        {/* Settings */}
                        <div className={styles.mobileMenuLinks}
                            optionClass={styles.linkColor}
                            clickHandler={closeNav}
                        >
                            <ListItemLink url="settings">
                                <h3>Settings</h3>
                            </ListItemLink>
                        </div>

                        {/* AUTH MENU */}
                        <ListItemLink url="logout" optionClass={styles.linkColor}>
                            <h3>Logout</h3>
                        </ListItemLink>
                    </ul>   
                </nav>

            </div>
        </div>

    )
}

export default MobileNavbar;