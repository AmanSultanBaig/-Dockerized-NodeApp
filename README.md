# Dockerized-NodeApp

I have dockerized my Node Application using the following steps.

# Download & Install Docker
Download & Install Docker Destop on your machine, in my case I have already have on my system.

# Write Node Application

I have written a very basic node app.

```
const express = require("express");
const app = express();

const port = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Node App Dockerized Successfully!")
})

app.listen(port, () => console.log(`App is running on ${port}`))
```

# Docker File

Add Docker File & add configuration related to your image requirements, here is my image what I have written.

``` 
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "index.js" ] 
```

# Build Docker Image

Run this command to build your image `docker build -t docker/nodeweb:v1 .` 
### Note 
`docker/nodeweb:v1` is my image name, you can write whatever you want, `-t` means `TAG` 
& also add `.` at the end, it means your image will build in your current directory

This command take almost 3 to 4 minutes.

when your docker image build successfully run `docker run -d -p 8080:8080 docker/nodeweb:v1`

Then you will see in your Docker Desktop, `IMAGE` section your image would be there.


