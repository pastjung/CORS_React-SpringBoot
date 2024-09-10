#!/bin/bash

# 시작 문구 출력
echo "Starting Spring Boot application..."

# JAR 파일 생성
./gradlew bootJar

# Run the Spring Boot application
exec java -jar build/libs/springboot-app-0.0.1-SNAPSHOT.jar