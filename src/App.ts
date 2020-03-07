import "./libs/Dotenv"
import { WebApplication } from "./bin/www"

import debug from "debug"

const [logEvent, logWarning, logError] = [debug('www:event'), debug('www:warning'), debug('www:error')]
const port = process.env.PORT || 3000

WebApplication.listen(port, () =>
    logEvent(`Mabobsa Back-end API Application has started on port ${port}`)
)