export const isClientSide = (): boolean => typeof window !== "undefined"

export const formatCurrency = (number:number, cur:string = "USD") => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: cur,
    }).format(number);
};