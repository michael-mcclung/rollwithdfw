# ---- Build stage ----
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Copy Maven files and sources
COPY pom.xml .
COPY src ./src

# Build the Spring Boot jar
RUN mvn clean package -DskipTests

# ---- Run stage ----
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/rollwithdfw-backend-0.0.1-SNAPSHOT.jar app.jar

# Copy jar from build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]

# Run the app
ENTRYPOINT ["java", "-jar", "app.jar"]
