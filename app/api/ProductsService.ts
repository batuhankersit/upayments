import { AxiosResponse } from 'axios'
import {ApiResponse} from "@up-models/ApiResponse";
import {httpService} from "./HttpService";
import {API_URL} from "@up-constants/urls";
import {Products} from "@up-models/ProductsModel";

/**
 * Return list of products
 */
const productsList = (): Promise<AxiosResponse<ApiResponse<Products[]>>> => {
    return httpService.get<ApiResponse<Products[]>>(
        `${API_URL}products`
    )
}

export default {
    productsList
}