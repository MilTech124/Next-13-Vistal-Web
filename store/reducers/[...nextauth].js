import NextAuth from "next-auth/next";
import CreadentialsProvider from "next-auth/providers/credentials";
import connectToDb from "../../database/db";
import { findUserByLogin } from "../../database/services/user.service";
import { passwordCheck } from "../../database/utils/tools";

export default NextAuth({
	session:{
		jwt:true
	},
	providers:[
		CreadentialsProvider({
			async authorize(credentials){
				await connectToDb()
				const user = await findUserByLogin(credentials.login,{})
				if(!user) throw new Error('User not found')

				if(!await passwordCheck(creadentials.password,user.password)) throw new Error('Wrong password')
				return {login:user.login,role:user.role}
			}
		})
	]
})