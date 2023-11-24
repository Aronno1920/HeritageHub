export class Place {
    id!: number;
    name!: string;
    address!:string;
    description!: string;
    imageUrl!: string;
    entryfee!: number;
    reviews: number = 0;
    tags!: string[];
    offday!: string[];
}