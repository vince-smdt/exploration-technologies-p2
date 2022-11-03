import axios from 'axios';
const url = "/api/product";

export default class API {
    // to get all the products from the server
    static async getAllProduct() {
        const res = await axios.get(url);
        return res.data;
    }

    // to get single product by id
    static async getProductByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // to insert product into database
    static async addProduct(product) {
        const res = await axios.post(url, product);
        return res.data;
    }

    // to update product into database
    static async updateProduct(id, product) {
        const res = await axios.patch(`${url}/${id}`, product);
        return res.data;
    }

    // to delete a product
    static async deleteProduct(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}