import { ConfigService } from "@nestjs/config";
import { TypegooseModuleOptions } from "nestjs-typegoose";

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => {
  return {
    uri: `mongodb+srv://${configService.get('MONGO_LOGIN')}:${configService.get('MONGO_PASSWORD')}@cluster0.vsfbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ...getMongoOptions()
  };
};



const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
