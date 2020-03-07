import "./libs/Dotenv"
import { WebApplication } from "./bin/www"

const port = process.env.PORT || 3000

WebApplication.listen(port, () =>
  console.log(`Mabobsa Back-end API Application has started on port ${port}`)
)