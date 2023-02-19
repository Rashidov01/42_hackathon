import { PrismaClient } from '@prisma/client';
import { Injectable } from "@nestjs/common";
import axios from 'axios';
import * as jwt from 'jsonwebtoken';
// require('dotenv').config();



@Injectable({})
export class AuthService {
	prisma = new PrismaClient();
	
	GetToken(name: any): string{
		let token: string = name.split(' ')[1];
		return token;
	}
	
	async getAccessToken(authCode) {
		const response = await axios.post('https://api.intra.42.fr/oauth/token', {
			grant_type: 'authorization_code',
			client_id: 'u-s4t2ud-70128b8cb6e7301d51af612bab45dbd49c633a5dd15eedec24161c475b98bc1c',
			client_secret: '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',
			code: authCode,
			redirect_uri: 'http://127.0.0.1/api'
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
		const key = jwt.sign(token, 'process.env.JWT_SECRET');
        return key;
	}

}