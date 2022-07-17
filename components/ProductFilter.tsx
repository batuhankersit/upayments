import SelectBox from "./SelectBox";
import {Categories} from "@up-models/CategoriesModel";
import React from "react";

interface Props {
    categoriesData:Categories[],
    onFilterSelect:Function,
    onInputChange:Function,
}

const ProductFilter = ({categoriesData,onFilterSelect,onInputChange}:Props) => {
    const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
        onInputChange(e.currentTarget.value)
    }
    return (
        <div className={"px-12 my-10"}>
            <div className={"my-4 flex justify-between"}>
                <input placeholder={"Apple Watch, Samsung, Macbook Pro"}
                       onChange={onChangeInput}
                       className={"placeholder-gray-600 bg-white rounded-lg drop-shadow-lg w-2/5 py-2 px-2 outline-0"}/>

                <div className={"w-1/5"}>
                    <SelectBox onChange={onFilterSelect} data={categoriesData} />
                </div>
            </div>
        </div>
    )
}

export default ProductFilter
