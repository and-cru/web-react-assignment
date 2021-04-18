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

After this step, let's check that all the components are up and running, in your browser try going to:

- Coffee API: `localhost:8080/health`
  - This will return a `I am healthy` message in the browser
  - If there is no `I am  healthy` message, feel free to reach out to us
- React Web App: `localhost:9000`
  - It may take a moment or two for the development server to start, if after 5 minutes there is no response. Feel free to reach out to us

This will bring up a [PostgreSQL]() DB, a python API written in [FastAPI]() and the [React] project. For this assignment we will work on the React project mainly, which is located inside the `web` directory, do not worry about starting the local development server for React it is running already. Just save any changes made to the files and the changes will reflect, in case you have installed other `npm` packages, you will need to restart the running docker containers, this can be done with the below command:

```bash
docker-compose restart
```

Please note, to stop the Docker containers running please ensure you are in the `web-react-assignment` directory and use the below command:

```bash
docker-compose down
```

## Assignment

You are building the Frontend for a Coffee recipe website, where coffee lovers can join as a brewer and create a new coffee recipe to share with the world. Feel free to use your creativity with the site, there are 4 minimum requirements:

1. Create a new brewer
2. Brewers can create a new coffee recipe
3. Brewers / Guests can view a page of all created recipes by Brewers
4. A page to view more detail about a created coffee recipe

After completing the step in [Get it running](#get-it-running), follow the below URLs in your browser to view the API documentation and the React Web App:

- Coffee API: `localhost:8080/docs`
- React Web App: `localhost:9000`

## Submitting the assignment

Please commit your work to your branch frequently, with meaningful commit messages, this allows us to follow your trail of thought when reviewing the submitted assignment. If you to add some documentation or additional explanation feel free to edit the `web/README.md`.

Enjoy, have fun and let us know if there are issues running the assignment.

The soft deadline is Friday 23 April, however if you need some more time feel free to let us know.