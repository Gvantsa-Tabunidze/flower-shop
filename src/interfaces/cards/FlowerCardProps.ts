import type { IbaseCard } from "./BaseCardInterface";


export interface FlowerCardProps extends IbaseCard {
id?:string,
price:string,
img:string,
inStock:boolean,
bestSeller:boolean,
origin: string
}

