import React, { Component } from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext();

const loadObjUrl = "http://localhost:4000/load?id="
const swipeUrl = "http://localhost:4000/swipe?direction="
const updateExtensionURL = "http://localhost:4000/switch_extension";
const deleteObjectURI = "http://localhost:4000/delete";

class AppContext extends Component {
    state = {
        currentId: "",
        currentLogin: "",
        displayObjURI: "",
    }

    swipeRequest = (direction) => {
        axios.get(swipeUrl+direction, )
            .then((response) => {
                this.state.currentId = response.data.Id
                this.setState({displayObjURI: loadObjUrl + response.data.Id})
                this.setState({currentLogin: response.data.Login})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateExtension = (extension) => {
        let data = JSON.stringify({
            "extension": extension,
        })
        // Send a POST request
        axios({
            method: 'post',
            url: updateExtensionURL,
            data: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            this.swipeRequest("")
            console.log(response.status)
            return (response.status)
        })
            .catch((error) => {
                console.log(error)
                return 500
            })}

    deleteObject = () => {
        let data = JSON.stringify({
            "objectId": this.state.currentId,
        })
        console.log(data)
        // Send a POST request
        axios({
            method: 'post',
            url: deleteObjectURI,
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            this.swipeRequest("")
            console.log(response.data)
        })
            .catch((error) => {
                console.log(error.response)
            })}


    render() {
        return (
            <Provider
                value={{ displayObjURI: this.state.displayObjURI,
                    currentId: this.state.currentId,
                    currentLogin: this.state.currentLogin,
                    swipeRequest: this.swipeRequest,
                    updateExtension: this.updateExtension,
                    deleteObject: this.deleteObject,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { AppContext, Consumer as AppContextConsumer };
