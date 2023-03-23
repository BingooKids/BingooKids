FROM node:16 as builder
# ARG ENDPOINT
# ENV REACT_APP_BASE_URL=${ENDPOINT}

WORKDIR /build
COPY package*.json ./
RUN npm install
COPY ./ ./
# RUN NODE_ENV=production REACT_APP_BASE_URL=$REACT_APP_BASE_URL npm run build
RUN NODE_ENV=production npm run build

FROM nginx:stable-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
WORKDIR /usr/share/nginx/html
COPY --from=builder /build/build/ ./