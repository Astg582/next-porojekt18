import {DetailedHTMLProps} from "react";
import {HTMLAttributes} from "react";
import {ProductModel} from "../../interfaces/product.interface";


export interface ProductProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel
}
