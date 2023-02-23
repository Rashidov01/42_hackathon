import { PrismaClient } from '@prisma/client';
import { Injectable, NotFoundException } from "@nestjs/common";
import axios from 'axios';
import * as jwt from 'jsonwebtoken';


@Injectable({})
export class AuthService {
	prisma = new PrismaClient();
	
	GetToken(name: any): string{
		let token: string = name.split(' ')[1];
		return token;
	}
	
	async getAccessToken(authCode) {
		const response = await axios.post('https://api.intra.42.fr/oauth/token', {
			grant_type: process.env.GRANT_TYPE,
			client_id: process.env.CLIENT_ID,
			client_secret: process.env.CLIENT_SECRET,
			code: authCode,
			redirect_uri: process.env.REDIRECT_URI
		});
		const accessToken = response.data.access_token;
		return accessToken;
	}
	
	async getProfile(accessToken) {
		const response = await axios.get('https://api.intra.42.fr/v2/me', {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});
		const profile = response.data;
		return profile;
	}

	async GetUserInfo(data) {
		const token = {
			login: data.login,
		}
		const key = jwt.sign(token, process.env.JWT_SECRET);
        return key;
	}

	async getUser(login) {
		const user = await this.prisma.user.findUnique({
			where: {
				login: login
			},
			include: {
				Project_users: true,
			}
		});
		if (!user)
			throw new NotFoundException('User not found');
		return user;
	}

}