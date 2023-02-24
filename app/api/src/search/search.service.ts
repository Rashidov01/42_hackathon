import { PrismaClient } from '@prisma/client';
import { Injectable, NotFoundException } from "@nestjs/common";


@Injectable({})
export class SearchService {
	prisma = new PrismaClient();


    async getSearch(search: string) {
        const user = await this.prisma.user.findMany({
            where: {
                login: {
                    contains: search,
                    mode: "insensitive",
                },
            },
            select: {
                login: true,
            }
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}