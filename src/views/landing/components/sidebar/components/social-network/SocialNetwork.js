import './SocialNetwork.css'

function SocialNetwork() {
    return (
        <div className="social-network">
            <ul className="soial-icons">
                <li>
                    <a href="https://twitter.com/salim_vazquez"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://github.com/SvS30"><i className="fa fa-github"></i></a>
                </li>
                <li>
                    <a href="https://gitlab.com/SvS21"><i class="fa fa-gitlab"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/salim-vazquez-solis-6565b7170/"><i className="fa fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="http://google.com"><i className="fa fa-dribbble"></i></a>
                </li>
            </ul>
        </div>
    );
}

export default SocialNetwork;