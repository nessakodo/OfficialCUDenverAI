# Build stage
FROM node:16 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build
COPY . ./
RUN npm run build

# Production stage
FROM node:16-alpine AS production

WORKDIR /app

# Install serve for static file hosting
RUN npm install -g serve

# Copy built files from the build stage
COPY --from=build /app/build ./build

EXPOSE 3000

# Serve the build folder
CMD ["serve", "-s", "build", "-l", "3000"]
