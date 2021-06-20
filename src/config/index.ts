import convict from 'convict';
import configSchema from './config';


const config = convict(configSchema);

export default config;
