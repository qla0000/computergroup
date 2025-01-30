# Build stage
FROM --platform=$TARGETPLATFORM node:20-alpine AS builder

WORKDIR /app

# DNS és NPM beállítások
RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set strict-ssl false && \
    npm config set fetch-retries 5 && \
    npm config set fetch-retry-factor 2 && \
    npm config set fetch-retry-mintimeout 10000 && \
    npm config set fetch-retry-maxtimeout 60000

# Függőségek másolása és telepítése
COPY package*.json ./
RUN npm ci --network-timeout 300000

# Forráskód másolása
COPY . .

# Környezeti változók beállítása
ARG CONTACT_EMAIL
ARG RESEND_API_KEY
ENV CONTACT_EMAIL=website.contact.smtp@gmail.com
ENV RESEND_API_KEY=re_BzewFgJG_MmCzHdZcq2d3xAw8dS2YYqvS
ENV NODE_ENV=production
ENV PORT=3000


# Alkalmazás buildelése
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Csak a szükséges fájlok másolása
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Production stage környezeti változók
ENV NODE_ENV=production
ENV PORT=3000
ENV CONTACT_EMAIL=website.contact.smtp@gmail.com
ENV RESEND_API_KEY=re_BzewFgJG_MmCzHdZcq2d3xAw8dS2YYqvS

# Alkalmazás portjának megnyitása
EXPOSE 3000

# Alkalmazás indítása
CMD ["node", "server.js"]