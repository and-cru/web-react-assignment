# React home assignment

## Requirements

This assignment relies on [Docker](https://www.docker.com/), which is a OS virtualization tool and allows for development with a containers. In order to complete this assignment, please install Docker for your respective OS [here](https://docs.docker.com/get-docker/)

The rest is simple, all you need is a simple text editor of your choice.

## Get it running

Please follow the below instructions to get everything set up correct and running.

Clone the repository by running the below command:

```bash
git clone git@github.com:and-cru/web-react-assignment.git
```

Navigate into the directory like below:

```bash
cd web-react-assignment/
```

Checkout a new branch, this will be your working branch, please use your name and surname for the branch:

```bash
git checkout -b <name-and-surname>
```

After checking out your branch, please push to the remote repository before starting by running the below command:

```bash
git push origin <name-and-surname>
```

Ok now that version control is all set. Let's test if everything is running, inside the directory of the cloned project run the below command:

```bash
docker-compose up -d  --build
```

This will bring up a [PostgreSQL]() DB, a python API written in [FastAPI]() and the [React] project. For this assignment we will work on the React project mainly, which is located inside the `web` directory, do not worry about starting the local development server for React it is running already. Just save any changes made to the files and the changes will reflect, in case you have installed other `npm` packages, you will need to restart the running docker containers, this can be done with the below command:

```bash
docker-compose restart
```

Please note, to stop the Docker containers running please ensure you are in the `web-react-assignment` directory and use the below command:

```bash
docker-compose down
```

## Assignment

