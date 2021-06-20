import convict from 'convict';
declare const config: convict.Config<{
    app: {
        useMock: boolean;
    };
    rules: {
        firstName: {
            minLength: number;
        };
        lastName: {
            minLength: number;
        };
        email: {
            minAlphaRate: number;
            maxNumberRate: number;
        };
        price: {
            quotationRate: number;
        };
    };
    externalService: {
        quotation: {
            url: string;
        };
        blacklist: {
            url: string;
        };
    };
}>;
export default config;
