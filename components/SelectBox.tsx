import { Listbox, Transition } from '@headlessui/react'
import {useState,Fragment} from "react";
import ChevronDownIcon from "./Icons/ChevronDownIcon";
import CheckIcon from "./Icons/CheckIcon";
import {Categories} from "@up-models/CategoriesModel";

interface Props {
    data:any[],
    labelValue?:string,
    onChange?:Function
}

const SelectBox = ({data,labelValue='name',onChange}:Props) => {
    const [selected, setSelected] = useState<{[key: string]: any} | undefined>()

    const onItemSelect = (val:any) => {
        onChange && onChange(val)
        setSelected(val)
    }
    return (
        <Listbox value={selected} onChange={onItemSelect} data-testid={"list-box"}>
            <div className="relative mt-1">
                <Listbox.Button data-testid={"list-open-button"} className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate cursor-pointer">{selected?.[labelValue] || 'Categories'}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronDownIcon className={"h-4 w-4"} />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    data-testid="listbox-option"
                >
                    <Listbox.Options  className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                        {data?.map((item, index) => (
                            <Listbox.Option
                                key={index}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`}

                                value={item}>
                                {({ selected }) => (
                                <>
                                    <span
                                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                    {item[labelValue]}
                                  </span>
                                    {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <CheckIcon className="h-6 w-6"/>
                                    </span>
                                    ) : null}
                                </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default SelectBox
