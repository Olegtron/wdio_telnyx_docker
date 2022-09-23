FROM olegtron228/olegtron:v4
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
COPY . /app
CMD npm run test_all_headless