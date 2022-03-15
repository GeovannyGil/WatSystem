import { v4 as uuid } from 'uuid'

export const uniqueid = () => {
  return uuid().slice(0, 12)
}

export default uniqueid
