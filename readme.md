# Project summary
This project purpose is to test telnyx.com website by using webdriverIO framework, and test website from docker container
## Requirement
- Download and install VS Code (https://code.visualstudio.com/Download) or any other IDE.
- Download and install Node.js (https://nodejs.org/en/download/) at least v.14.x
- Download and install Docker (https://www.docker.com/products/docker-desktop)

### Installing
- Download or clone my git repository
- Install all depencies from package.json

```
npm install
```
### Tests Run
- Type in terminal following commands:

```
npm run chrome_headless
```
**All other test run scripts could be found in *package.json* file**

- To generate and open allure report type in terminal:

```
npm run allure_generate
```

```
npm run report_open
```
- To clear reports type in terminal:

```
npm run clear
```
- To stop selenium standalone server:

```
netstat -aof | findstr :4444
```
```
taskkill /PID ID /F
```
> Instead of **ID** enter ID number that you get after **netstat** command.

### Test run from Docker container
- Type in terminal next commands:

```
docker build -t olegtron2288 .
```

##### *Explanation:*

> **docker build** - command for building Docker image

> **-t olegtron2288** - assign name to Docker image

> **.** - build docker image from Dockerfile in this folder

```
docker run -i olegtron2288
```
##### *Explanation:*

> **docker run** - command for run Docker container

> **-i** - command to see processes that will be running in the container

> **olegtron2288** - name of Docker image to run container from it

By default Docker container will run **chrome_headless** script on start. This can be changed in **Dockerfile** CMD string.

