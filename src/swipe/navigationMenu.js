import React from 'react';

import {AppContextConsumer} from "../AppContext";

class NavigationMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex: null,
            showErr: false
        };
        this.showError = this.showError.bind(this);
    }
    componentDidMount() {
        this.handleClick(0)
    }

    handleClick = (index) => this.setState({ activeIndex: index })

    showError = (status) => {
        this.setState({ showErr: status })
    }

    render() {
        return  (
            <AppContextConsumer>
                {context => (
            <div className="header-navigation_menu">
                <div className="header-menu" id="header-menu">
                <MyClickable extension="image" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleClick } updateExtFunc={ context.updateExtension }
                             showError={ this.showError }/>
                <MyClickable extension="video" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleClick }  updateExtFunc={ context.updateExtension }
                             showError={ this.showError }/>
                <p className="errMsgDisabled" style={{ display: this.state.showErr ? 'block' : 'none' }}>Sorry, cant find images with this type</p>
                </div>
            </div>
                    )}
            </AppContextConsumer>
        );
    }
}

class MyClickable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: null
        };
    }

    componentDidMount() {
        if (this.props.extension === "image") {
            this.handleClick().then(r => {})
        }
    }

    handleClick =  async () => {
        let response = await this.props.updateExtFunc(this.props.extension)
        if (response === 200) {
            this.props.onClick(this.props.index)
            this.props.showError(false)
        } else {
            this.props.showError(true)
        }
    }
    render() {
        return <a
            className={this.props.isActive ? 'active' : 'album'}
            onClick={this.handleClick} > {this.props.extension}
        </a>
    }
}

export default NavigationMenu;