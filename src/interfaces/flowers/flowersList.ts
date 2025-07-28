import type { ISingleFlower } from "./flower";

export interface IFlowersList {
    flowersList:ISingleFlower[],
    isLoading: boolean,
    error:string | null
    
}