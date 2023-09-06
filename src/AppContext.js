import React, { Component } from "react";
import axios from "axios";

import configData from "./config.json"

const { Provider, Consumer } = React.createContext();
const emptyCookie = "ssid=; expires=Thu, 01 Jan 1970 00:00:00 UTC"

class AppContext extends Component {
    state = {
        currentId: "",
        currentLogin: "",
        displayObjURI: "",
        name: "Name",
        sourceUser: "",
        likes: "",
        dislikes: "",
        extension: "",
        imageIsLoaded: false,
    }

    swipeRequest = (direction) => {
        axios.get(configData.SWIPE_URI+direction, {withCredentials: true})
            .then((response) => {
                if (response.headers.hasOwnProperty("ssid")) {
                    document.cookie = "ssid=" + response.headers["ssid"];
                } else {
                    document.cookie = emptyCookie;
                }
                this.state.currentId = response.data.nextId.Id
                this.setState({ displayObjURI: configData.LOAD_IMG_URI + response.data.nextId.Id })
                this.setState({ currentLogin: response.data.nextId.Name })
                this.setState({ name: response.data.nextId.Name })
                this.setState({ sourceUser: response.data.nextId.SourceUser })
                this.setState({ likes: response.data.rating.Likes })
                this.setState({ dislikes: response.data.rating.Dislikes })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateRating = (direction, objectId) => {
        axios.post(configData.UPDATE_RATING_URI, {
            objectId: objectId,
            direction: direction
        }, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        })
            .then((response) => {
                this.setState({likes: response.data.Likes})
                this.setState({dislikes: response.data.Dislikes})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    updateExtension = (category) => {
        let data = JSON.stringify({
            //TODO: update extension var name to name type
            "category": category,
        })
        this.setState({ extension: category })
        // Send a POST request
        return axios({
            method: 'post',
            url: configData.UPDATE_EXTENSIONS_URI,
            data: data,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            this.swipeRequest("")
            return (response.status)
        })
            .catch((error) => {
                return 500
            })}

    deleteObject = () => {
        let data = JSON.stringify({
            "objectId": this.state.currentId,
        })
        // Send a POST request
        axios({
            method: 'post',
            url: configData.DELETE_OBJ_URI,
            data: data,
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            this.swipeRequest("")
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
                    name: this.state.name,
                    sourceUser: this.state.sourceUser,
                    likes: this.state.likes,
                    dislikes: this.state.dislikes,
                    extension: this.state.extension,
                    swipeRequest: this.swipeRequest,
                    updateExtension: this.updateExtension,
                    deleteObject: this.deleteObject,
                    updateRating: this.updateRating,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export { AppContext, Consumer as AppContextConsumer };
