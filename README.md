# This is only a skeleton

** Private: **[https://dev.azure.com/aa4499/\_git/react-app-cicd](https://dev.azure.com/aa4499/_git/react-app-cicd)

![Lighthouse](/public/lighthouse.PNG)
![Wave](/public/wave.PNG)

## Overview

React app deployed on Azure App Service. [https://azure.microsoft.com/en-us/products/app-service](https://azure.microsoft.com/en-us/products/app-service)

- **React App URL**: [https://wt-app.azurewebsites.net/](https://wt-app.azurewebsites.net/)
- **Web API Base URL**: https://XXX.azurewebsites.net

## React App

### Features

- Fetches data and displays it in UI.

## App is built and deployed using Azure DevOps pipelines.

[Azure DevOps Pipelines](https://azure.microsoft.com/en-us/products/devops/pipelines)

- **Build Pipeline**: Install, build and artifact drop.
- **Release Pipeline**: Custom deployment script to deploy the React app to the Azure App Service.

## Uses Default agent (Local)

### Project settings > Agent pools > Default > Agents > New agent

<code>demands: - Agent.Name -equals XXX</code>
