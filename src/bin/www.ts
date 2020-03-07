import express from "express"

import { createHandler } from "../utils/CustomExpressHandler"

export const WebApplication = express()

WebApplication.get('/', createHandler((req, res) => {
  res.default({status: true, message: 'Mabobsa-API ver 1.0'})
}))