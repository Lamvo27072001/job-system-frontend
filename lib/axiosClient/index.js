import axios from "axios";
import axiosConfig from "./config";

class AxiosCLient {
    static #client = axios.create(axiosConfig);

    static async fetching(httpMethod, url) {
        const res = await this.#client[httpMethod](url);

        return res.data.message;
    }

    static async fetchingWithData(httpMethod, url, data) {
        try {
            console.log(this.#client);
            const res = await this.#client[httpMethod](url, data);

            return [res.data, null];
        } catch (error) {
            if (error.response) {
                return [null, error.response.data];
            }
        }
    }
}

export default AxiosCLient;
