// import static files or dependencies
import './LeftImage.css';
import leftImage from '../../../../../../assets/images/pexels-blog.jpg'

function LeftImage() {
    return (
        <div className="left-image-post">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-image">
                        <img src={leftImage} alt="About img 1" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-text">
                        <h4>Entrada Blog 1</h4>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin professor
                            at Hampden-Sydney College in Virginia, looked up one of the more
                            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
                            going through the cites of the word in classical literature, 
                            discovered the undoubtable source.
                        </p>
                        <div className="white-button">
                            <a href="http://google.com">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftImage;