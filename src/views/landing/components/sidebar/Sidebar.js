// Import static files or dependencies
import { useState } from 'react';
import './Sidebar.css';
import profile from '../../../../assets/images/Profile.png';

// Import components
import SocialNetwork from './components/social-network/SocialNetwork';
import Navigator from './components/navigator/Navigator';

function Sidebar() {

    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="responsive-nav">
            <i className="fa fa-bars" id="menu-toggle" onClick={showSidebar}></i>
            <div id="menu" className={sidebar ? 'menu open' : 'menu'}>
                <i className="fa fa-times" id="menu-close" onClick={showSidebar}></i>
                <div className="container">
                    <div className="image">
                        <img src={profile} alt="Profile" />
                    </div>
                    <div className="author-content">
                        <h4>Salim Vazquez Solis</h4>
                        <span>Backend Dev</span>
                    </div>
                    <Navigator></Navigator>
                    <SocialNetwork></SocialNetwork>
                    <div className="copyright-text">
                        <p>V1.0.1
                        <br />
                        Código para esta página <a href="https://github.com/SvS30/Blog"><strong>acá.</strong></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;