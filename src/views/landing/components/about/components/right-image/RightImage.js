// import static files or dependencies
import './RightImage.css';
import rightImage from '../../../../../../assets/images/pexels-blog.jpg'

function RightImage() {
    return (
        <div className="right-image-post">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-text">
                        <h4>Entrada Blog 2</h4>
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
                        <img src={rightImage} alt="About img 2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightImage;