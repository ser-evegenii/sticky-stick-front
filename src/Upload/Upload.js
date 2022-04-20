import React, { useState } from "react";
import FileUploadService from "./FileUploadService";
import "../styles/UploadStules.css"
import {useHistory} from "react-router-dom";

const Upload = () => {
    const ObjectTypes = [
        { label: "video", value: "video" },
        { label: "image", value: "image" },
    ]
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    let [selectedName, setSelectedName] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [selectedCategory, setCheckBoxChecked] = useState(false);
    const history = useHistory();

    const selectFile = (event) => {
        setSelectedFiles(event.target.files);
    };

    const selectName = (event) => {
        setSelectedName(event.target.value);
    };

    const onAddCategory = value => {
        setCheckBoxChecked(value);
    };

    const ObjectCategoryRadio = props => {
        return (
            <div>
                <ul>
                    {props.options.map(option => (
                        <li key={props.key}>
                            <label>
                                {option.label}
                                <input
                                    name="test"
                                    checked={option.value === props.selectedCategory}
                                    onChange={() => props.onChange(option.value)}
                                    type="radio"
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    function handleClick() {
        history.push("/");
    }

    function UploadByUri(event) {
        event.preventDefault();
        if (selectedCategory == false) {
            setMessage("Category does`t chosen");
            return
        }
        FileUploadService.uploadByURI(event.target.name.value, event.target.uri.value, selectedCategory, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage("Success. Choose another file for upload");
            })
            .then((files) => {
                console.log("file was added")
            })
            .catch(() => {
                setProgress(0);
                setMessage("Could not upload the file!");
                setCurrentFile(undefined);
            });
    }

    const UploadFile = () => {
        setMessage("");
        if (selectedCategory == false) {
            setMessage("Category does`t chosen");
            return
        }
        //filter out files less than 5MB
        if (selectedFiles[0].size > 5242880) {
            setMessage("file size is too big");
            return
        }
        let currentFile = selectedFiles[0];
        setProgress(0);
        setCurrentFile(currentFile);

        FileUploadService.upload(currentFile, selectedName, selectedCategory, (event) => {
            setProgress(Math.round((100 * event.loaded) / event.total));
        })
            .then((response) => {
                setMessage("Success. Choose another file for upload");
            })
            .then((files) => {
                console.log("file was added")
            })
            .catch(() => {
                setProgress(0);
                setMessage("Could not upload the file!");
                setCurrentFile(undefined);
            });

        setSelectedFiles(undefined);
    };

    return(
        <div className="App">
        <div className="uploadScreen">
            <div className="uploadForm">
                {currentFile && (
                    <div className="progress">
                        <div
                            className="progress-bar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: progress + "%" }}
                        >
                            {progress}%
                        </div>
                    </div>
                )}
                <label className="btn btn-default">
                    <input type="file" onChange={selectFile} />
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" onChange={selectName}/>
                </label>
                <button
                    className="btn btn-success"
                    disabled={!selectedFiles}
                    onClick={UploadFile}
                >
                    Upload
                </button>
            </div>
            <div className="uploadDelimiter">
                <p> Delimiter </p>
            </div>
            <div className="uploadFormByURI">
                <form onSubmit={UploadByUri} className="uploadForm">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name"/>
                    <label htmlFor="uri">Source uri: </label>
                    <input type="text" name="uri"/>
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="MainPageBtn">
                <label htmlFor="contained-button-file">
                    <button type="button" className="btn auth-btn btn-lg" onClick={handleClick}>MainPage</button>
                </label>
            </div>
            <div className="ObjectCategoryUpdater">
                <ObjectCategoryRadio
                    key={ObjectTypes.name}
                    options={ObjectTypes}
                    onChange={value => onAddCategory(value)}
                    selectedCategory={selectedCategory}
                />
            </div>
            <div className="alert" role="alert">
                {message}
            </div>
        </div>
        </div>
            )
};

export default Upload;