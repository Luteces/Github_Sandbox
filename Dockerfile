FROM node:16-alpine

RUN npm install -g pnpm

WORKDIR /
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000
CMD ["node", "build"]