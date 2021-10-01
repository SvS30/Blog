import './LeftImage.css';

function LeftImage() {
    return (
        <div className="left-image-post">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-image">
                        <img src="assets/images/left-image.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-text">
                        <h4>Where does it come from?</h4>
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