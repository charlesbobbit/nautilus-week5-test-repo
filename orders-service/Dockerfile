# Use Node.js 20 as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3005 to the outside world
EXPOSE 3001

# Define the startup command for the container
CMD ["npm", "run", "start"]