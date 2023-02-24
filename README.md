# 42_hackathon

## QuickStart
to start the app run the command
```
docker-compose up
```
to stop the app from running run the command
```
docker-compose down
```
## Access DataBase
data is set to be saved when you close and reopen the container through the volume
to apply your new update to the database run the command:
```
docker exec -it <docker_name> npx prisma migrate dev
```
