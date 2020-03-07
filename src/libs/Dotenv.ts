import { resolve } from "path"
import { config } from "dotenv"

const env = process.env.ENV_NAME || '.env'
config({ path: resolve(__dirname, `../../${env}`) })