import { Observable } from "rxjs";
import { Navigation } from "../models/navigation.model";

export abstract class NavigationInterface {
    abstract getNavigation(): Observable<Navigation[]>;

}
