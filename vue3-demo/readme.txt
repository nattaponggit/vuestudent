server {
  listen       80;
  server_name  test1.com www.test1.com;
  location / {
    try_files $uri $uri/ /index.html?$args;
    root   /var/www/html/test1.com/public_html;
    index  index.html index.htm;
  }
}


server {
  listen       80;
  server_name  test2.com www.test2.com;
  location / {
    try_files $uri $uri/ /index.html?$args;
    root   /var/www/html/test2.com/public_html;
    index  index.html index.htm;
  }
}