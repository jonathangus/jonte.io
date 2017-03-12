FROM node:5.0.0

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app

# Expose the app port
EXPOSE 80

# Start the app
CMD npm start
