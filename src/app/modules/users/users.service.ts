import config from '../../../config'
import { UserType } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

const createUser = async (user: UserType): Promise<UserType | null> => {
  // auto generated incremental id
  const newUserId = await generatedUserId()
  user.userId = newUserId
  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('Failed to create user!')
  }
  return createdUser
}

export default {
  createUser,
}
