import ProductFilter from "@up-components/ProductFilter";
import { GetServerSideProps } from 'next'
import CategoriesService from "@up-api/CategoriesService";
import {Categories} from "@up-models/CategoriesModel";

interface Props {
    categories:Categories[]
}

const Home = ({categories}:Props) => {
  return (
    <>
     <ProductFilter categoriesData={categories} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
   const categories = await CategoriesService.categoriesList().then(res => res.data)
    return {
        props: {
            categories
        }
    }
}

export default Home
