import http from "./http-common";
import configData from "../config.json"

const upload = (file,name,category, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file", file);
    formData.append("name", name);
    formData.append("category", category);


    return http.post(configData.UPLOAD_FILE, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

const uploadByURI = (name, uri, category, onUploadProgress) => {
    let formData = new FormData();

    formData.append("name", name);
    formData.append("uri", uri);
    formData.append("category", category);

    return http.post(configData.UPLOAD_FILE_BY_URI, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
    });
};

export default {
    upload,
    uploadByURI,
};