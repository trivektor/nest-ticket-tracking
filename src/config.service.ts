import * as dotenv from 'dotenv';

// https://javascript.plainenglish.io/mongoose-with-nestjs-mongodb-a211c26d70da
export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    const result = dotenv.config();

    if (result.error) {
      console.log(result.error);
    } else {
      this.envConfig = result.parsed;
    }
  }

  async getMongoConfig() {
    console.log(this.envConfig);
    

    return {
      uri: this.envConfig.MONGO_URL,
      useNewUrlParser: false,
    };
  }
};