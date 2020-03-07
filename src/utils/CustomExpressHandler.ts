import { Request, Response } from "express"

import { DefaultResponse } from "../http/Default"

type MabobsaRequest = Request
type MabobsaResponse = Response & {
  default: (res: DefaultResponse) => void
}

type Handler = (req: MabobsaRequest, res: MabobsaResponse) => void | Promise<void>

export const createHandler = (handler: Handler) => (req: Request, res: Response) => {
  const mabobsaRequest = req as MabobsaRequest
  const mabobsaResponse = res as MabobsaResponse
  mabobsaResponse.default = (defaultResponse: DefaultResponse) => res.status(200).json(defaultResponse)
  handler(mabobsaRequest, mabobsaResponse)
}