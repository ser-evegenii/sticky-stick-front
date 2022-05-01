import React from 'react';


class ItemInfoName extends React.Component {

    constructor(props){
        super(props);
    }
    state = {
        tags: "#stickystick",
        login: "",
        sourceUser: "",
        name: ""
    }

    render() {
        return  (
            <div className="video-info_name">
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}

export default ItemInfoName;