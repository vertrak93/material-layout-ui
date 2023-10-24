export interface ISiteMapItem{
    route:string;
    icon?:string;
    title:string;
    roles?:string[];
    children?: ISiteMapItem[];
}