FROM node:5.0.0

# Prepare app directory
RUN mkdir -p /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Start the app
CMD ["npm", "start"]
