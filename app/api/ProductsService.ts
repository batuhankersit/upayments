import {AxiosResponse} from 'axios'
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

/**
 * Return product detail by rewriteId
 * @param rewriteId
 */
const productDetail = (rewriteId?: string | string[] | undefined): Promise<AxiosResponse<ApiResponse<Products>>> => {
    return httpService.get<ApiResponse<Products>>(
        `${API_URL}products/${rewriteId}`
    ).catch(() => <AxiosResponse<ApiResponse<Products>>>{})
}

/**
 * product create
 */
const productCreate = (data: Products): Promise<AxiosResponse<ApiResponse<Products>>> => {
    return httpService.post<ApiResponse<Products>>(
        `${API_URL}products/`,data
    ).catch(() => <AxiosResponse<ApiResponse<Products>>>{})
}

export default {
    productsList,
    productDetail,
    productCreate
}
