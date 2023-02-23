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
		const auth = await this.authService.getAccessToken(token);
		const data = await this.authService.getProfile(auth);
		return ({
			access_token: await this.authService.GetUserInfo(data)
		});
	}

	@UseGuards(AuthGuard('jwt'))
	@Get('/users/me')
	async GetMe(@Req() request) {
		console.log(`name: ${request.user.login}`)
		return (await this.authService.getUser(request.user.login));
	}

}