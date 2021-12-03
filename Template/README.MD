# ITsynch Trainings 2021 Demo Template

## Parts

This project is a runnable dotnet template, containing 3 main parts:

1. Server: contains an ASP.NET Core 5 WebApi project with some scaffolding, including EF Core 5 configuration for SQL Server. This web project also takes care of running, compiling and bundling the Client application, in order to increase development ease.
2. Client: contains an Angular 11 project scaffolded with Angular Material, NGRX and Flex Layout. Some example components and configurations have been included.
3. Docker: this folder should contain all docker related files. At the time of instantiating this template, the folder will only contain a `docker-compose.yaml` file which can get an SQL Server instance up and running.

## Instructions

1. Install the template, by navigating to the template's folder parent folder (e.g. if the template is in C:\Templates\DemoTemplate, navigate to C:\Templates) and run `dotnet new -i ITsynch.Trainings.Demo.Template`
2. Create a new project based on the template (be mindful where you're running this command) by running `dotnet new its-trainings-demo -n ITsynch.Trainings.<INITIALS>.Demo` where `<INITIALS>` should be replaced by the initials (uppercased) of all team members.
3. Open the newly created solution with Visual Studio (Server), the newly created Client folder with VS Code.
4. Make sure the database image is available, by moving to the docker folder and running `docker-compose up database`. Pro tip: in order to _completely_ wipe the database to start anew, run `docker-compose down --rmi local --volumes`.
5. In order to bring the database up to its latest state, you should use EF Core migrations, for example `dotnet ef database update`. Be mindful of the folder you're running this command from, as well as the current connection string.
6. From Visual Studio, change the running mode to the one matching your project name (i.e. **DO NOT** use IISExpress). The first run could potentially take a while, since VS is not only compiling your C# code, but also restoring dependencies and transpiling the Client project
