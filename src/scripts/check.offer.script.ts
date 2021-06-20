import moment from "moment";
import { IOffer } from "../types/offre";
import { PublicationOptionsEnum } from "../types/publication.options.enum";
import {RuleEngine} from "../rules/rule.engine";

const offer: IOffer = {
    contacts: {
        firstName: 'Christophe',
        lastName: 'Dupont',
        email: 'testdepot@yopmail.fr',
        phone: {
            value: '0607080901'
        }
    },
    creationDate: moment().toDate(),
    price: 19000,
    publicationOptions: [PublicationOptionsEnum.STRENGTHS, PublicationOptionsEnum.BOOST_VO],
    reference: 'B350003983',
    vehicle: {
       registerNumber: 'AA123AA',
        make: 'HONDA',
        model: 'CR-V',
        version: 'IV 2',
        category: 'SUV',
        mileage: 100000
    }
}

const rulesEngine = new RuleEngine();

rulesEngine.checkOffer(offer).then(console.log)
