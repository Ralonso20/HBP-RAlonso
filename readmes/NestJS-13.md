# Nest JS - Deployment

[Volver a Inicio](../README.md)

## EJEMPLO DE ARCHIVO DE CONFIGURACIÓN DE ACTIONS DE

```yml
name: render-deploy-nest-backend

on:
  push:
    branches: class-12-deploy

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      ##CLONE CODE
      - name: Checkout code
        uses: actions/checkout@v2

        ##UPLOAD TO DOCKER HUB

      - name: Set up Docker buildx
        uses: docker/setup-buildx-action@v1

      - name: Log in to Docker hub
        uses: docker/login-action@v1
        with:
          username: ${{secrets.DOCKERHUB_USERNAME}}
          password: ${{secrets.DOCKERHUB_TOKEN}}

      - name: Build and push Docker image
        uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: ${{secrets.DOCKERHUB_USERNAME}}/nestjs-backend-pt19a:latest
      ## DEPLOY TO RENDER

      - name: Deploy to render
        uses: johnbeynon/render-deploy-action@v0.0.8
        with:
          service-id: ${{secrets.RENDER_SERVICE_ID}}
          api-key: ${{secrets.RENDER_API_KEY}}
          wait-for-success: true
```

🎯 DESCRIPCIÓN DEL CÓDIGO ANTERIOR:

1. `name: deploy`: Define el nombre del flujo de trabajo como "deploy".
2. `on`: Especifica el evento que activará este flujo de trabajo. En este caso, el evento es "push" (cambio en el repositorio remoto) en la rama "main".
3. `jobs`: Define los trabajos que se ejecutarán como parte de este flujo de trabajo. En este caso, solo hay un trabajo llamado "build".
4. `build`: Define las tareas que se ejecutarán en este trabajo.
5. `runs-on: ubuntu-latest`: Indica que este trabajo se ejecutará en una máquina virtual Ubuntu de la versión más reciente disponible.
6. `steps`: Define los pasos individuales que se ejecutarán en este trabajo.
7. `Checkout`: Utiliza la acción `actions/checkout@v4` para clonar el repositorio en la máquina virtual.
8. `Login to Docker Hub`: Utiliza la acción `docker/login-action@v3` para iniciar sesión en Docker Hub utilizando las credenciales almacenadas en los secretos de GitHub.
9. `Set up Docker Buildx`: Utiliza la acción `docker/setup-buildx-action@v3` para configurar Docker Buildx, que es una herramienta para realizar compilaciones y despliegues de imágenes de contenedor Docker.
10. `Build and push`: Utiliza la acción `docker/build-push-action@v5` para construir la imagen de Docker utilizando el archivo `Dockerfile` en el directorio actual (`context: .`) y luego empujar esa imagen a Docker Hub. El tag de la imagen se define como `${{ secrets.DOCKERHUB_USERNAME }}/nest-test:latest`, donde `secrets.DOCKERHUB_USERNAME` es el nombre de usuario de Docker Hub almacenado en los secretos de GitHub.

> 🎯 En resumen, este flujo de trabajo automatiza el proceso de construcción y despliegue de una imagen Docker a Docker Hub cada vez que se realiza un push a la rama "main" del repositorio en GitHub.
