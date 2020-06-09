import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'
import talks from './data.json'

const cors = initMiddleware(Cors({ methods: ['GET'] }))

export default async function api(req, res) {
  await cors(req, res)
  res.status(200).json(talks)
}
