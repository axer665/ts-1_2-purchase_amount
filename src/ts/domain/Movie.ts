import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,

    readonly nameOriginal: string,
    readonly formats: string[], // 2D, 3D, IMAX
    readonly timing: number, // seconds
    readonly imageUrl: string,
    readonly age: number, // 0+, 6+, 18+
    readonly slogan: string,
    readonly genre: string[], 
  ) {}
}