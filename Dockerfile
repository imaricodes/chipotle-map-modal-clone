#install node
#'FROM' creates an image
#'as' allows you to name the image: a name can be given to a new build stage by adding AS name to the FROM instruction. The name can be used in subsequent FROM and COPY --from=<name> instructions to refer to the image built in this stage.
FROM node:alpine as dist

ENV NODE_ENV=production
#create the docker image directory (this is where the build container above exists)
#the build container also contains the source files (after the copy command is executed)
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

#copy all files application dev source to the docker worker directory created above (/app)
#the fist '.' is the path to all of the application dev files
#the second '.' points to the declared worddir above
COPY ./ /app/

#run the package build script (in this case creates directory named 'dist')
RUN npm run build

#SECOND STAGE

#create image with nginx as the server
#FROM nginx:1.19

#copy nginx configuration file
#first argument is path to nginx config file, 
#second argument is where it will be copied to (since destination directory does not exist, it will also be created with this operation)

#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

#Add build folder created above container
COPY --from=dist /app/dist/ /usr/shared/nginx/html




