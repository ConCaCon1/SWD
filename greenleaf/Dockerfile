# Build stage
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# List contents of /app to verify dist directory
RUN ls -la /app

# Production stage
FROM nginx:alpine

# Set environment variables
ENV REACT_APP_API_URL=http://104.131.115.239:8888

# Copy the build output to the Nginx server
COPY --from=build /app/build /usr/share/nginx/html

# Nginx configuration to handle SPA routes
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]