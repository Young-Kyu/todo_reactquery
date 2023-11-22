# https://hub.docker.com/_/node 에서 사용할 node version을 명시
FROM node:16-alpine

#working directory를 정함
WORKDIR /app
# WORKDIR /usr/src/app

# 1플로우 시작
# COPY package.json /usr/src/app 
# COPY package.json /app
# COPY package.json . 도 위랑 동일함

ENV PATH /app/node_modules/.bin:$PATH

# npm install 명령어는 라이브러리의 상위 버전을 설치할 수 있기 때문에 npm ci를 사용하는게 좋음
# npm ci는 package-lock.json에 명시된 라이브러리의 버전을 직접 다운받기 때문에 버전 문제가 발생할
# 가능성이 줄어듬
COPY package.json package-lock.json /app/
COPY . .

RUN npm ci

# CMD ["npm", "build"]
# RUN npm install react-scripts@3.0.1 -g
# 1플로우 끝
# 1 플로우 : package.json 파일을 복사해서 npm install을 한 후 /usr/src/app에 install한 모든 것들을 복사하겠다는 플로우

# EXPOSE 3000

# RUN npm run build
RUN npm run-script build

WORKDIR /app/build

RUN npm install -g serve

CMD ["npx", "serve", "-s"]


