import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class AppService {
  prisma = new PrismaClient();
  getHello() {
    return this.prisma.user.findMany();
  }

  async fetchUsersAndProjects(campusId: number) {
    const Token = '';
    try {
      // Fetch all users from the 42 API, with their current projects
      const { data: users } = await axios.get(
        `https://api.intra.42.fr/v2/campus/${campusId}/users`,
        {
          params: {
            per_page: 100,
            sort: "id",
            page: {
              number: 1,
              size: 1000,
            },
            filter: "primary_campus_id==${campusId}",
            "expand[users]": "project_users.project",
          },
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
  
      // Save each user and their current project to the database
      for (const user of users) {
        const prismaUser = await this.prisma.user.create({
          data: user,
        });
  
        const currentProjects = user.project_users.filter(
          (pu: any) => pu.status === "in_progress"
        );
  
        const projectIds = currentProjects.map(
          (pu: any) => pu.project.id
        );
  
        // Add the current projects to the user
        await this.prisma.user.update({
          where: { id: prismaUser.id },
          data: {
            projects: {
              connect: projectIds.map((id: number) => ({ id })),
            },
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  

// Example usage: fetch all users from the campus with ID 43
// fetchUsersAndProjects(43);

}
