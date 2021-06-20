declare const _default: {
    app: {
        useMock: {
            format: BooleanConstructor;
            default: boolean;
            env: string;
        };
    };
    rules: {
        firstName: {
            minLength: {
                doc: string;
                format: NumberConstructor;
                default: number;
                env: string;
            };
        };
        lastName: {
            minLength: {
                doc: string;
                format: NumberConstructor;
                default: number;
                env: string;
            };
        };
        email: {
            minAlphaRate: {
                doc: string;
                format: NumberConstructor;
                default: number;
                env: string;
            };
            maxNumberRate: {
                doc: string;
                format: NumberConstructor;
                default: number;
                env: string;
            };
        };
        price: {
            quotationRate: {
                doc: string;
                format: NumberConstructor;
                default: number;
                env: string;
            };
        };
    };
    externalService: {
        quotation: {
            url: {
                doc: string;
                format: StringConstructor;
                default: string;
                env: string;
            };
        };
        blacklist: {
            url: {
                doc: string;
                format: StringConstructor;
                default: string;
                env: string;
            };
        };
    };
};
export default _default;
