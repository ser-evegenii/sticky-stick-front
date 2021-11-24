const baseURL = "http://localhost:4000/switch_extension?extension=";
const swipeURL = "http://localhost:4000/swipe?direction=";
import React from 'react';
import axios from 'axios';
import "./buttons.css"


class ExtensionUpdater extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        };
        this.click = this.click.bind(this);
    }

    click(extension) {
        this.setState({ isLoading: true });
        axios.get(baseURL+extension, )
            .then((response) => {
                window.location.reload();
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

export default ExtensionUpdater;
/*

    render(){
        return(
            <React.Fragment>
                <img src={this.state.imageURL} alt="image" />
            </React.Fragment>
        )
    }
 */