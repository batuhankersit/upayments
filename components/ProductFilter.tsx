import SelectBox from "./SelectBox";
import {Categories} from "@up-models/CategoriesModel";

interface Props {
    categoriesData:Categories[]
}

const ProductFilter = ({categoriesData}:Props) => {
    return (
        <div className={"px-12 my-10"}>
            <div className={"my-4 flex justify-between"}>
                <input placeholder={"Apple Watch, Samsung, Macbook Pro"}
                       className={"placeholder-gray-600 bg-white rounded-lg drop-shadow-lg w-2/5 py-2 px-2 outline-0"}/>

                <div className={"w-1/5"}>
                    <SelectBox data={categoriesData} />
                </div>
            </div>
        </div>
    )
}

export default ProductFilter
