# Stage 1: Builder
FROM node:20-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2: Production
FROM node:20-alpine
RUN corepack enable
WORKDIR /app
COPY package*.json ./
RUN pnpm install 
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/.env.prod ./.env.prod


EXPOSE 3000
CMD ["pnpm", "start"]
