// import axios from "axios";

export class SaverLoader {
    static async saveShape(shape, token) {
        try {
            const url = "http://127.0.0.1:3000/storeshape";
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            };

            const response = await axios.post(url, shape, { headers });
            return response.data
        } catch (error) {
            throw new Error("Failed to save shape.")
        }
    }

    static async getShapes(token, type) {
        try {
            const url = "http://127.0.0.1:3000/shapes";
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            }

            const response = await axios.get(url, { headers });
            return response.data
        } catch (error) {
            throw new Error("Failed to get shapes");
        }
    }

    static async loadShape(token, name) {
        try {
            const url = `http://127.0.0.1:3000/shape:${name}`;
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            };

            const response = await axios.get(url, { headers });
            return response.data;
        } catch (error) {
            throw new Error(`Failed to load shape with name: ${name}`);
        }
    }

    static async updateShape() {

    }

    static async deleteShape(token, name) {
        try {
            const url = `http://127.0.0.1:3000/deleteshape:${name}`;
            const headers = {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            };

            const response = await axios.post(url, {}, { headers });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
