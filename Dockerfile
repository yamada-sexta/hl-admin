FROM oven/oven/bun:latest

WORKDIR /app
RUN bun install
COPY . .
CMD ["bun", "index.ts"]