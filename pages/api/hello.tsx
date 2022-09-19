// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"

type responseData = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<responseData>) => {
  res.status(200).json({ name: 'John Doe' })
}
