import React from 'react'
import {animateScroll as scroll, Link} from 'react-scroll'


const Nav=()=>{


    return(
    <div className="nav">
            <ul>
                <li className="logo">
                Priroda
                </li>
                <Link
                smooth={true}
                to="kontakt">
                Kontakt
                </Link>
                <Link
                smooth={true}
                to="lokacije">
                Lokacije
                </Link>
            </ul>
    </div>
    );
}

export default Nav;