import { Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'
import { JwtAuthGuard } from "./guard/auth.guard";

@Controller('/api')
export class AuthController {

	constructor(private authService: AuthService) {}

	@Post('/auth')
	async GetAuth(@Req() request) {
		let token = this.authService.GetToken(request.headers.authorization);
		return ({
			access_token: await this.authService.getAccessToken(token)
		});
	}

	@Get('/users/me')
	async GetMe(@Req() request) {
		console.log(request.headers.authorization);
		let token = this.authService.GetToken(request.headers.authorization);
		const login = await this.authService.getProfile(token);
		return await this.authService.getUser(login);
	}

}