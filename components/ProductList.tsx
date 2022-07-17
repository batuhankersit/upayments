import {Products} from "@up-models/ProductsModel";
import Image from "next/image"
import {formatCurrency} from "@up-utils/index";

interface Props {
    productsData:Products[]
}

const ProductList = ({productsData}:Props) => {
    return (
        <div className={"container grid md:grid-cols-4 grid-cols-2 gap-4 mx-auto"}>
            {productsData.length > 0 ?productsData.map((p:Products,i:number) => {
                return (
                    <div key={`${p.name}+${i}`} className={" text-center cursor-pointer"}>
                        <div className={"my-4 mx-4 bg-white rounded-lg items-center py-10"}>
                            <Image unoptimized width={100} height={150} src={p.avatar.startsWith('https') ? p.avatar : '/vercel.svg'}/>
                        </div>
                        <div className={"w-full mx-4 font-medium"}>
                            <p className={"text-start"}>{p.name}</p>
                            <p>{formatCurrency(Number(p.price))}</p>
                        </div>
                    </div>
                )
            }) : 'No Data'}
        </div>
    )
}

export default ProductList