#!/bin/bash

# Print environment variables (optional, for debugging)
echo "Starting React application..."

# node_modules 생성
npm install

# 라이브러리 최신 버전 설정
npm update

# 어플리케이션 빌드
npm run build

# 실행
npm start