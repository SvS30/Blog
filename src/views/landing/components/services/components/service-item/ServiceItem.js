// import static files or dependencies
import React, { Component } from "react";
import './ServiceItem.css';

class ServiceItem extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-6">
                    <div className="service-item">
                        <div className={`service-icon ${this.props.dataFromParent[0]}`}></div>
                        <h4>{this.props.dataFromParent[1]}</h4>
                        <p>{this.props.dataFromParent[2]}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ServiceItem;