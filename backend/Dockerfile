# Use ASP.NET runtime image as base
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use SDK image for building the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["BloggingPlatform.csproj", "./"]
RUN dotnet restore "./BloggingPlatform.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "BloggingPlatform.csproj" -c Release -o /app/build

# Publish the app
FROM build AS publish
RUN dotnet publish "BloggingPlatform.csproj" -c Release -o /app/publish

# Use base image to create the final container
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BloggingPlatform.dll"]

