import {GetServerSideProps} from 'next'
import {Products} from "@up-models/ProductsModel";
import ProductsService from "@up-api/ProductsService";
import Image from "next/image";
import {formatCurrency} from "@up-utils/index";

interface Props {
    product:Products
}

const ProductDetail = ({product}:Props) => {
    return (
        <div className={"container px-20 mx-auto"}>
            <div className={"flex my-4 mx-4"}>
                <a className={"text-center cursor-pointer"}>
                    <div className={" px-10 bg-white rounded-lg items-center py-10"}>
                        <Image unoptimized width={100} height={150} src={product.avatar.startsWith('https') ? product.avatar : '/vercel.svg'}/>
                    </div>
                </a>
                <div className={"mx-8 flex flex-col"}>
                    <p className={"text-3xl font-bold"}>{product.name}</p>
                    <p className={"text-2xl font-medium mt-auto"}>{formatCurrency(Number(product.price))}</p>
                </div>
            </div>
            <hr className={"border-2 border-[#AAAAA8] mx-6"}/>
              <div className={"my-4 mx-4"}>
                  <p className={"text-2xl font-bold"}>Description</p>
                  <p className={"my-4"}>{product.description}</p>
              </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const rewriteId = context.params?.['rewriteId']
    const product = await ProductsService.productDetail(rewriteId).then(res => res.data)
    if(!product){
       return {
           notFound:true
       }
    }
    return {
        props: {
            product
        }
    }
}

ProductDetail.Layout = true

export default ProductDetail
