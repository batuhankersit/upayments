import {GetServerSideProps} from 'next'
import ProductsService from "@up-api/ProductsService";
import CategoriesService from "@up-api/CategoriesService";
import {Categories} from "@up-models/CategoriesModel";
import React, {FormEvent} from "react";
import {useForm,Controller} from "react-hook-form";
import classNames from "classnames";
import SelectBox from "@up-components/SelectBox";
import {useRouter} from "next/router";

interface Props {
    categories:Categories[]
}

const ProductCreate = ({categories}:Props) => {
    const router = useRouter()
    const methods = useForm();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = methods;

    const onFormSubmit = (data:any) => {
        ProductsService.productCreate(data).then(() => router.push("/"))
    }
    return (
        <div className={"container px-20 mx-auto flex justify-center py-20"}>
           <div className={"text-center"}>
               <p className={"text-3xl font-bold mb-10"}>Create Product</p>
               <form onSubmit={handleSubmit(onFormSubmit)} className="w-full max-w-7xl min-w-[25rem]">
                       <input
                           type="text"
                           className={classNames("placeholder-gray-600 bg-white rounded-lg drop-shadow-lg py-2 px-2 w-full",{
                               '!outline outline-red-500':errors?.name,
                               'focus:outline-0':!errors?.name
                           })}
                           placeholder="Name"
                           {...register('name', {
                               required: 'required',
                           })}
                           name="name"
                       />
                   <textarea
                       className={classNames("placeholder-gray-600 bg-white rounded-lg drop-shadow-lg py-2 px-2 w-full mt-4",{
                           '!outline outline-red-500':errors?.description,
                           'focus:outline-0':!errors?.description
                       })}
                       placeholder="Description"
                       {...register('description', {
                           required: 'required',
                       })}
                       rows={3}
                       name="description"
                   />
                   <input
                       type="text"
                       className={classNames("placeholder-gray-600 bg-white rounded-lg drop-shadow-lg py-2 px-2 w-full mt-4 mb-4",{
                           '!outline outline-red-500':errors?.avatar,
                           'focus:outline-0':!errors?.avatar
                       })}
                       placeholder="Image Url"
                       {...register('avatar', {
                           required: 'required',
                       })}
                       name="avatar"
                   />
                   <Controller
                       control={control}
                       render={({field}) => (
                           <div className={classNames("",{
                               '!outline outline-red-500':errors?.category,
                               'focus:outline-0':!errors?.category
                           })}>
                               <SelectBox  onChange={(data:Categories) => field.onChange(data.name)} data={categories} />
                           </div>
                       )}
                       {...register('category', {
                           required: 'required',
                       })}
                       name="category"
                   />
                   <input
                       type="number"
                       className={classNames("placeholder-gray-600 bg-white rounded-lg drop-shadow-lg py-2 px-2 w-full mt-4 mb-4",{
                           '!outline outline-red-500':errors?.price,
                           'focus:outline-0':!errors?.price
                       })}
                       placeholder="Price"
                       {...register('price', {
                           required: 'required',
                       })}
                       name="price"
                   />
                   <button className={"placeholder-gray-600 bg-white rounded-lg drop-shadow-lg py-2 px-2 w-full mt-4 mb-4 font-bold"} type={"submit"}>SUBMIT</button>
               </form>
           </div>
        </div>
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

ProductCreate.Layout = true

export default ProductCreate
