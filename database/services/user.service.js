import User from '../models/user.model'

export const userExists = async(login) =>{
    const checkUser = await User.findOne({login:login})
    if(checkUser) return true;
    return false
}