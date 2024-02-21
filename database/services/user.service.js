import User from '../models/user.model'

export const userExists = async(login) =>{
    const checkUser = await User.findOne({login:login})
    console.log(checkUser);
    if(checkUser) return true
    return false
}

export const findUserByLogin = async(login,select) =>{
    return await User.findOne({login:login}).select(select)  
}