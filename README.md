# Running the Application
In order to run the application for the first time there are a few commands you will need to run.
 1. `npm run install`
 2. `cd docker`
 3. `docker-compose build`
 4. `docker-compose up` - with the optional -d if you would like to daemonize the service.

# Installation
In order to install all dependencies you run `npm install`.

# Start the application in Development mode
To start the application in development mode you run `docker-compose -f docker-compose.dev.yml up`
This places the application in watch mode runs the server for you. The application is available on port `8080`.
The other option if you choose to skip docker is to run `npm run start:dev`

# Running Tests
The easiest way to run the testing suite is to run `docker exec -it docker_node_1 npm run test`
Or again, if not using docker, then `npm run test`

# Example Curl
`curl http://localhost:8080/users`

Thank you for your time and consideration!
