import { AxiosResponse } from 'axios'
import {ApiResponse} from "@up-models/ApiResponse";
import {Categories} from "@up-models/CategoriesModel";
import {httpService} from "./HttpService";
import {API_URL} from "@up-constants/urls";

/**
 * Return list of categories
 */
const categoriesList = (): Promise<AxiosResponse<ApiResponse<Categories>>> => {
    return httpService.get<ApiResponse<Categories>>(
        `${API_URL}categories`
    )
}

export default {
    categoriesList
}