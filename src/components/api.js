
import { LANGUAGE_VERSIONS } from "../constants/data";
import axios from "axios";

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
});

export const excuteCode = async (language, sourceCode) => {
    const response = await API.post("/execute", {
        "language": language,
        "version": LANGUAGE_VERSIONS[language],
        "files": [
            {
                "content": sourceCode
            }
        ],
    });
    return response.data;
}
