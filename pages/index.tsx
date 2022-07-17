import ProductFilter from "@up-components/ProductFilter";
import {GetServerSideProps} from 'next'
import CategoriesService from "@up-api/CategoriesService";
import {Categories} from "@up-models/CategoriesModel";
import {Products} from "@up-models/ProductsModel";
import ProductList from "@up-components/ProductList";
import ProductsService from "@up-api/ProductsService";
import {useState} from "react";
import PlusIcon from "@up-components/Icons/PlusIcon";

interface Props {
    categories:Categories[]
    products:Products[]
}

const Home = ({categories,products}:Props) => {
  const [selectedFilter,setSelectedFilter] = useState<string | undefined>(undefined)
  const [productData,setProducts] = useState<Products[]>(products)
  const [searchFilter,setSearchFilter] = useState<string | undefined>(undefined)

   const onFilterSelect = (val:Categories) => {
      setSelectedFilter(val.name)
   }

   const onInputChange = (val:string)=> {
       setSearchFilter(val.toLowerCase())
   }

  return (
    <>
    <ProductFilter onFilterSelect={onFilterSelect} onInputChange={onInputChange} categoriesData={categories} />
    <ProductList productsData={(selectedFilter || searchFilter) ?
        productData
        .filter(x => selectedFilter ? x.category === selectedFilter: true)
        .filter(x => searchFilter ? x.name.toLowerCase().includes(searchFilter) : true) : productData}
    />
        <div className={"fixed bottom-0 w-full flex h-[54px] bg-dark justify-end pr-5 z-[11]"}>
           <PlusIcon className={"w-10 h-10 bg-black rounded-full p-[5px]"} />
        </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
   const categories = await CategoriesService.categoriesList().then(res => res.data)
   const products = await ProductsService.productsList().then(res => res.data)
    return {
        props: {
            categories,
            products
        }
    }
}
Home.Layout = true
export default Home
