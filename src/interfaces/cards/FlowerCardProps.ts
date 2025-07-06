import type { IbaseCard } from "./BaseCardInterface";


export interface FlowerCardProps extends IbaseCard {
category:string,
id?:string,
price:string,
img:string,
}

