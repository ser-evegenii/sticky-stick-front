const baseURL = "http://localhost:4000/update_type";
import React from 'react';
import axios from 'axios';
import "./buttons.css"


class TypeUpdater extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        };
        this.click = this.click.bind(this);
    }

    click(newType) {

        axios.post(baseURL, newType)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return  (
            <div className="updateTypeBlockMain">
                <div className="updateTypeBtn"><button onClick={() => this.click("gif")} > gif </button></div>
                <div className="updateTypeBtn"><button onClick={() => this.click("jpg")} > jpg </button></div>
                <div className="updateTypeBtn"><button onClick={() => this.click("shortVideo")} > video </button></div>
            </div>
        );
    }
}

export default TypeUpdater;
/*

    render(){
        return(
            <React.Fragment>
                <img src={this.state.imageURL} alt="image" />
            </React.Fragment>
        )
    }
 */