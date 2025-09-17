
#  Use an official Node.js runtime as base image
#  FROM node:20

#  Set the working directory inside the container
# WORKDIR /app

# Copy package.json and package-lock.json
# COPY package*.json ./

# Install dependencies
# RUN npm install

#  Copy the rest of your application code
# COPY . .

# Expose the port your app will run on
# EXPOSE 8080

#  Start the app
# CMD ["npm", "run", "serve"]


# Current Dockerfile (Not Lambda-Compatible)
# Uses node:18 base image — not optimized for Lambda
# Exposes port 8080 — unnecessary for Lambda
# Runs npm run serve — not how Lambda executes code



# Use AWS Lambda Node.js base image
FROM public.ecr.aws/lambda/nodejs:20

# Set working directory
WORKDIR /var/task

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Set the Lambda function handler/ if Lambda handler inside the cli.js
# CMD [ "tools/cli.handler" ]  
# separate tools/lambda-handler.js create 
CMD ["tools/lambda-handler.handler"]

