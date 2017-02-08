FROM node:5.0.0

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

RUN npm install -g yarn
RUN yarn
RUN npm rebuild node-sass

# Build the app
RUN npm run build

# Expose the app port
EXPOSE 8080

# Start the app
CMD npm start