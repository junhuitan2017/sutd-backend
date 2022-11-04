# Backend App for SUTD workshop project

## Know Your <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hololive_Production_logo.svg/2560px-Hololive_Production_logo.svg.png" alt="Hololive Logo" height="40px"/>

`Hololive Production (ホロライブプロダクション hororaibu purodakushon, stylized in lowercase), or simply known as hololive (ホロライブ), is a Virtual Talent agency consisting of Virtual YouTubers owned by Japanese tech entertainment company COVER Corporation.`

[**See the frontend app here!**](https://github.com/junhuitan2017/sutd-frontend)

## Tech Stack
- NodeJS
- Express
- Docker
- Deployed on AWS EC2

## Setting up the project on AWS EC2 instance
### 1. Clone the repository in EC2
```
git clone https://github.com/junhuitan2017/sutd-backend.git
```

### 2. Download docker engine (If not already done)
```sh
# Install Docker packages
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    
# Add docker official gpg key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Setup docker repo
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install docker engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
 
# Start the service
sudo service docker start

# Run docker without sudo,
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker 
docker ps 
```

### 3. Build Docker image
cd into the repository and run this command:
```
docker build -t sutd-backend .
```

### 4. Run Docker image in container
```
docker run -dp 3001:3001 sutd-backend
```

## Stopping the container
List the processes running in docker container:
```
docker ps
```
Run the command to remove the id under the name sutd-backend
```
docker rm -f <container id>
```
