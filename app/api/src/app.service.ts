import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { Project } from '@prisma/client';

@Injectable()
export class AppService {
  prisma = new PrismaClient();
  getHello() {
    return this.prisma.user.findMany();
  }

  async fetchUsersAndProjects(campusId: number) {
    try {
      // Set the authorization header
      const accessToken = 'afad1365a8369e02c5d0bcf0b5612e13a144f423c7e6e2e4e5aa211b88ece7ff';
      const headers = { Authorization: `Bearer ${accessToken}` };
  
      // Fetch all users from the 42 API
      let currentPage = 1;
      let users: any[] = [];
      while (true) {
        const { data } = await axios.get(
          `https://api.intra.42.fr/v2/campus/${campusId}/users`,
          {
            headers,
            params: {
              page: currentPage,
              per_page: 100,
            },
          },
        );
        if (data.length === 0) {
          break;
        }
        users = users.concat(data);
        currentPage += 1;
      }
  
      // Save each user to the database and fetch their projects
      for (const user of users) {
        const prismaUser = await this.prisma.user.create({
          data: user
        });
  
        const { data: projects } = await axios.get(
          `https://api.intra.42.fr/v2/users/${user.id}/projects_users`,
          { headers },
        );
        
        const projectIds = projects.map((project: any) => project.project_id);
  
        // Add the projects to the user
        await this.prisma.user.update({
          where: { id: prismaUser.id },
          data: {
            Project: {
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
