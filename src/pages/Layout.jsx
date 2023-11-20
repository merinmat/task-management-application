import { Outlet, Link } from "react-router-dom";
import { nav, underline, styles } from '../style.js';

const Layout = () => {
    return (
        <div>
           
            <nav className={`${nav.text} ${nav.bgcolor}`}>
            
                <ul className={`${styles.center}`}>
                    <li className={`${underline.underline}`}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={`${underline.underline}`}>
                        <Link to="/alltasks">All Tasks</Link>
                    </li>
                </ul>              
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout