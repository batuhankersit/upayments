import {Products} from "@up-models/ProductsModel";
import Image from "next/image"
import {formatCurrency} from "@up-utils/index";
import Link from "next/link";
import XCircleIcon from "@up-components/Icons/XCircleIcon";
import ProductsService from "@up-api/ProductsService";
import {set} from "react-hook-form";

interface Props {
    productsData:Products[],
    setProducts?:Function
}

const ProductList = ({productsData,setProducts}:Props) => {

    const onDeleteClick = (id:string) => {
        ProductsService.productDelete(id).then(() =>
        setProducts && ProductsService.productsList().then(res => setProducts(res.data))
        )
    }

    return (
        <div className={"container grid md:grid-cols-4 grid-cols-2 gap-4 mx-auto"} data-testid="product-list-container">
            {productsData.length > 0 ?productsData.map((p:Products,i:number) => {
                return (
                    <div className={"group"} key={`${p.name}+${i}`} >
                        <div className={"hidden group-hover:flex float-right mr-8 mt-8 cursor-pointer"} onClick={() => onDeleteClick(p.id)} data-testid="remove-button"><XCircleIcon  className={"h-6 w-6"}/></div>
                        <Link href={`product/${p.id}`}  >
                            <a className={"text-center cursor-pointer"}>
                                <div className={"my-4 mx-4 bg-white rounded-lg items-center"}>
                                    <div className={"py-10"}><Image unoptimized width={100} height={150} src={p.avatar.startsWith('https') ? p.avatar : '/vercel.svg'}/></div>
                                </div>
                                <div className={"w-full mx-4 font-medium"}>
                                    <p className={"text-start"}>{p.name}</p>
                                    <p>{formatCurrency(Number(p.price))}</p>
                                </div>
                            </a>
                        </Link>
                    </div>
                )
            }) : 'No Data'}
        </div>
    )
}
ProductList.Layout = true


export default ProductList
