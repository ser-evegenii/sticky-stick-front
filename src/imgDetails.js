import React from 'react';
import "./App.css"

class ImgDetails extends React.Component {

    constructor(props){
        super(props);
    }
    state = {
        tags: "#tag1 #tag2 #tag3 #tag4 #tag5",
        login: "",
    }


    render() {
        return  (
            <div className="imgDetails">
                <p className="tags">
                    {this.state.tags.length > 18 ?
                        `${this.state.tags.substring(0, 18)}...` : this.state.tags
                    }
                </p>
                <p className="login">awesome user</p>
            </div>
        );
    }
}

export default ImgDetails;