// Import static files
import './Sidebar.css';
import profile from '../../../../assets/images/avatar.png';

// Import components
import SocialNetwork from './components/social-network/SocialNetwork';
import Navigator from './components/navigator/Navigator';

function Sidebar() {
    return (
        <div className="responsive-nav">
            <i className="fa fa-bars" id="menu-toggle"></i>
            <div id="menu" className="menu">
                <i className="fa fa-times" id="menu-close"></i>
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
                        <p>Copyright 2019 Reflux Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;