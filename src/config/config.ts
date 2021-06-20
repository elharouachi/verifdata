export default {
    app: {
        useMock: {
            format: Boolean,
            default: false,
            env: 'USE_MOCK'
        }
    },
    rules: {
        firstName: {
            minLength: {
                doc: 'firstname min length',
                format: Number,
                default: 2,
                env: 'FIRST_NAME_RULE_MIN_LENGTH'
            }
        },
        lastName: {
            minLength: {
                doc: 'lastName min length',
                format: Number,
                default: 2,
                env: 'LAST_NAME_RULE_MIN_LENGTH'
            }
        },
        email: {
            minAlphaRate: {
                doc: 'email min alpha rate',
                format: Number,
                default: 70,
                env: 'EMAIL_RULE_MIN_ALPHA_RATE'
            },
            maxNumberRate: {
                doc: 'email max number rate',
                format: Number,
                default: 30,
                env: 'EMAIL_RULE_MAX_NUMBER_RATE'
            }
        },
        price: {
            quotationRate: {
                doc: 'price quotation rate',
                format: Number,
                default: 20,
                env: 'PRICE_RULE_QUOTATION_RATE'
            }
        },
    },
    externalService: {
        quotation: {
            url: {
                doc: 'quotation api url',
                format: String,
                default: 'https://quotation.io',
                env: 'QUOTATION_API_URL'
            }
        },

        blacklist: {
            url: {
                doc: 'blacklist api url',
                format: String,
                default: 'https://blacklist.io',
                env: 'BLACKLIST_API_URL'
            }
        }
    },
}
