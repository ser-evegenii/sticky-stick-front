const baseURL = "http://localhost:4000/switch_extension";
const swipeURL = "http://localhost:4000/swipe?direction=";
import React from 'react';
import axios from 'axios';
import "./buttons.css"

class ExtensionUpdater extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activeIndex: null
        };
        this.click = this.click.bind(this);
    }

    click(index, extension) {
        let data = JSON.stringify({
            "extension": extension,
        })
        // Send a POST request
        axios({
            method: 'post',
            url: baseURL,
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            this.setState({ activeIndex: index })
            console.log(response.status)
        })
            .catch((error) => {
                console.log(error)
            })}
    //handleClick = (index) => this.setState({ activeIndex: index })

    render() {
        return  (
            <div className="updateTypeBlockMain">
                <MyClickable extension="gif" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.click }/>
                <MyClickable extension="img" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.click }/>
                <MyClickable extension="video" index={2} isActive={ this.state.activeIndex===2 } onClick={ this.click }/>
            </div>
        );
    }
}

class MyClickable extends React.Component {
    handleClick = () => this.props.onClick(this.props.index, this.props.extension)

    render() {
        return <button     className={
            this.props.isActive ? 'active' : 'album'
        }
                       onClick={this.handleClick} > {this.props.extension}
        </button>
    }
}

/*
return <button
    type='button'
    className={
        this.props.isActive ? 'active' : 'album'
    }
    onClick={ this.handleClick }
>
    <span>{ this.props.name }</span>
</button>
*/

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