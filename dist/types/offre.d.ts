import { PublicationOptionsEnum } from './publication.options.enum';
export interface IPhone {
    value: string;
}
export interface IContactInfos {
    firstName: string;
    lastName: string;
    email: string;
    phone: IPhone;
}
export interface IVehicleInfos {
    make: string;
    model: string;
    version: string;
    category: string;
    registerNumber: string;
    mileage: number;
}
export interface IOffer {
    contacts: IContactInfos;
    creationDate: Date;
    price: number;
    publicationOptions: PublicationOptionsEnum[];
    reference: string;
    vehicle: IVehicleInfos;
}
