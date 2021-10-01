import './SocialNetwork.css'

function SocialNetwork() {
    return (
        <div className="social-network">
            <ul className="soial-icons">
                <li>
                    <a href="http://google.com"><i className="fa fa-facebook"></i></a>
                </li>
                <li>
                    <a href="http://google.com"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                    <a href="http://google.com"><i className="fa fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="http://google.com"><i className="fa fa-dribbble"></i></a>
                </li>
                <li>
                    <a href="http://google.com"><i className="fa fa-rss"></i></a>
                </li>
            </ul>
        </div>
    );
}

export default SocialNetwork;