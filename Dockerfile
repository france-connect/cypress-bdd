FROM cypress/browsers:node-20.12.2-chrome-124.0.6367.60-1-ff-125.0.1-edge-124.0.2478.51-1

# Create the work directory
RUN mkdir /cypress-bdd
WORKDIR /cypress-bdd

# Copy the project files
COPY ./package.json .
COPY ./yarn.lock .
COPY ./tsconfig.json .
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
COPY ./scripts ./scripts

# Install Cypress dependences
RUN yarn install --immutable --immutable-cache --check-cache
# Verify Cypress installation
# Note: running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN yarn cypress verify

CMD ["yarn", "cy:run"]

# USAGE:
#
# To build this image:
# docker build -t cypress-bdd:1.0 .
#
# To run an example:
#CLEAN            : docker run -it cypress-bdd:1.0 yarn clean
#RUN              : docker run -it cypress-bdd:1.0
#RUN SPECIFIC TAG : docker run -it cypress-bdd:1.0 cypress run --spec cypress/e2e/api/features/* --env tags=@apiLogin
#RUN ON CHROME    : docker run -it cypress-bdd:1.0 yarn cy:run:chrome
#RUN VISUAL TESTS : docker run -it -v $PWD/cypress/snapshots:/cypress-bdd/cypress/snapshots cypress-bdd:1.0 yarn cy:visual
#GENERATE REPORT  : 
# Volume config for Windows: -v "%cd%":/cypress-bdd
# Volume config for linux  : -v $PWD:/cypress-bdd
