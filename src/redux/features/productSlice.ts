import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/app/admin/dashboard/page";

const initialState: IProduct ={
    _id:"",
    imgsrc: "",
    filekey: "",
    name: "",
    price: "",
    category: "",
}
export const ProductSlice = createSlice(
    {
        name: "productSlice",
        initialState,
        reducers: {
           setProduct: (state, action: PayloadAction<IProduct>) => {
            return action.payload
           }

        }
    }
);
export const {setProduct} = ProductSlice.actions
export default ProductSlice.reducer