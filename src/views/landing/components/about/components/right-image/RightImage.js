import './RightImage.css';

function RightImage() {
    return (
        <div className="right-image-post">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-text">
                        <h4>Why do we use it?</h4>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout. The point of using Lorem Ipsum
                            is that it has a more-or-less normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like readable English.
                        </p>
                        <div className="white-button">
                            <a href="http://google.com">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-image">
                        <img src="assets/images/right-image.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightImage;