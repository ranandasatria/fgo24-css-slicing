FROM ubuntu:noble

WORKDIR /workspace

RUN apt-get update && apt-get install -y nginx

COPY . /var/www/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
