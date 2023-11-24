import { Observable } from "rxjs";
import { Product } from "../models/product.model";

export abstract class ProductInterface {
    abstract getProduct(): Observable<Product[]>;

}
