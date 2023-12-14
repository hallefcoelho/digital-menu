import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { MostProductOrdered } from "../models/most-ordered-product.model";

export abstract class ProductInterface {
    abstract getProduct(): Observable<Product[]>;
    abstract getMostOrderedProduct(): Observable<MostProductOrdered[]>;

}
