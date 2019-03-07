FROM node:latest

# Create app directory in image
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json And package-lock.json are copied
# where abailable (npm@5+)
COPY package*.json ./

# Use below command for development and staging env
#RUN npm install

# Use below command for production env
RUN npm install --only=production

# Bundle app source
COPY . .


EXPOSE 3000

#CMD ["npm","start"]

# Use below command in staging env
#CMD ["npm","run","staging"]

# Use below command in production env
CMD ["npm", "build"]
