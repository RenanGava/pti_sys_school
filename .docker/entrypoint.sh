#!/bin/bash
yarn install
yarn prisma migrate dev
yarn prisma generate
# yarn build
yarn start:dev