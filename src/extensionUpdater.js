const baseURL = "http://localhost:4000/switch_extension";
const swipeURL = "http://localhost:4000/swipe?direction=";
import React from 'react';
import "./buttons.css"

import {AppContextConsumer} from "./AppContext";

class ExtensionUpdater extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex: null
        };
    }
    componentDidMount() {

    }

    //handleClick = (index) => this.setState({ activeIndex: index })

    render() {
        return  (
            <AppContextConsumer>
                {context => (
            <div className="updateTypeBlockMain">
                <MyClickable extension="gif" index={0} isActive={ this.state.activeIndex===0 } onClick={ context.updateExtension }/>
                <MyClickable extension="jpg" index={1} isActive={ this.state.activeIndex===1 } onClick={ context.updateExtension }/>
                <MyClickable extension="video" index={2} isActive={ this.state.activeIndex===2 } onClick={ context.updateExtension }/>
            </div>
                    )}
            </AppContextConsumer>
        );
    }
}

class MyClickable extends React.Component {
    handleClick = () => this.props.onClick(this.props.extension)
    render() {
        return <button
            className={this.props.isActive ? 'active' : 'album'}
            onClick={this.handleClick} > {this.props.extension}
        </button>
    }
}

export default ExtensionUpdater;