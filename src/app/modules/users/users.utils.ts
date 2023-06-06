import { User } from './users.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { userId: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.userId
}

export const generatedUserId = async () => {
  const currentId = (await findLastUserId()) || '0'
  return (parseInt(currentId) + 1).toString().padStart(5, '0')
}
