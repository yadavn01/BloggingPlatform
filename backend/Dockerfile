# Use .NET SDK image as base for development
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-env
WORKDIR /app
EXPOSE 80

# Set environment to development
ENV ASPNETCORE_ENVIRONMENT=Development
ENV DOTNET_USE_POLLING_FILE_WATCHER=1

# Copy project files and restore dependencies
COPY ["BloggingPlatform.csproj", "./"]
RUN dotnet restore "./BloggingPlatform.csproj"
COPY . .

# Build and publish the app
RUN dotnet build "BloggingPlatform.csproj" -c Release -o /app/build
RUN dotnet publish "BloggingPlatform.csproj" -c Release -o /app/publish

# Use base image to create the final container
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build-env /app/publish .
ENTRYPOINT ["dotnet", "BloggingPlatform.dll"]