"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const publication_options_enum_1 = require("../types/publication.options.enum");
const rule_engine_1 = require("../rules/rule.engine");
const offer = {
    contacts: {
        firstName: 'Christophe',
        lastName: 'Dupont',
        email: 'testdepot@yopmail.fr',
        phone: {
            value: '0607080901'
        }
    },
    creationDate: moment_1.default().toDate(),
    price: 19000,
    publicationOptions: [publication_options_enum_1.PublicationOptionsEnum.STRENGTHS, publication_options_enum_1.PublicationOptionsEnum.BOOST_VO],
    reference: 'B350003983',
    vehicle: {
        registerNumber: 'AA123AA',
        make: 'HONDA',
        model: 'CR-V',
        version: 'IV 2',
        category: 'SUV',
        mileage: 100000
    }
};
const rulesEngine = new rule_engine_1.RuleEngine();
rulesEngine.checkOffer(offer).then(console.log);
//# sourceMappingURL=check.offer.script.js.map