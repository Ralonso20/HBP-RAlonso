# Nest JS - Nest JS Pipes

[Volver a Inicio](../README.md)

## Guardianes, Interceptores y Pipes

🎯 En NestJS, los Guards, Interceptors y Pipes son tres conceptos clave que se utilizan para implementar la lógica de autorización, manipulación de datos y transformación de datos en una aplicación.

1. **Guards (Guardianes)**: Los Guards son utilizados para proteger las rutas de una aplicación y controlar el acceso a ellas. Se utilizan para implementar lógica de autorización y autenticación. Un Guard puede permitir o denegar el acceso a una ruta en función de ciertas condiciones, como por ejemplo si un usuario está autenticado o tiene ciertos roles.
2. **Interceptors (Interceptores)**: Los Interceptors se utilizan para modificar o manejar las peticiones entrantes y salientes en una aplicación. Pueden ser utilizados para modificar la respuesta de una solicitud, realizar tareas comunes como el registro de solicitudes o respuestas, o incluso para transformar los datos antes de que sean enviados al controlador.
3. **Pipes (Tuberías)**: Los Pipes se utilizan para transformar los datos que entran en una aplicación antes de ser procesados por un controlador. Pueden ser utilizados para validar, transformar o limpiar los datos de entrada antes de que sean procesados por la lógica de negocio. Los Pipes pueden ser sincrónicos o asincrónicos, y pueden ser utilizados para validar tipos de datos, realizar conversiones, entre otros.

> 🎯En resumen, los Guards se utilizan para la autorización, los Interceptors para la manipulación de peticiones y respuestas, y los Pipes para la transformación de datos antes de ser procesados por un controlador. Cada uno cumple una función específica en el flujo de una aplicación NestJS.

## Exception Filters Preconstruidos

| EXCEPTION                          | STATUS CODE                    |
| ---------------------------------- | ------------------------------ |
| - BadRequestException              | 400 Bad Request                |
| - UnauthorizedException            | 401 Unauthorized               |
| - NotFoundException                | 404 Not Found                  |
| - ForbiddenException               | 403 Forbidden                  |
| - NotAcceptableException           | 406 Not Acceptable             |
| - RequestTimeoutException          | 408 Request Timeout            |
| - ConflictException                | 409 Conflict                   |
| - GoneException                    | 410 Gone                       |
| - HttpVersionNotSupportedException | 505 HTTP Version Not Supported |
| - PayloadTooLargeException         | 413 Payload Too Large          |
| - UnsupportedMediaTypeException    | 415 Unsupported Media Type     |
| - UnprocessableEntityException     | 422 Unprocessable Entity       |
| - InternalServerErrorException     | 500 Internal Server Error      |
| - NotImplementedException          | 501 Not Implemented            |
| - ImATeapotException               | 418 I'm a teapot               |
| - MethodNotAllowedException        | 405 Method Not Allowed         |
| - BadGatewayException              | 502 Bad Gateway                |
| - ServiceUnavailableException      | 503 Service Unavailable        |
| - GatewayTimeoutException          | 504 Gateway Timeout            |
| - PreconditionFailedException      | 412 Precondition Failed        |

## Pipes Nativos de NestJS

| PIPE               | FUNCIÓN                           | DESCRIPCIÓN                                                 |
| ------------------ | --------------------------------- | ----------------------------------------------------------- |
| `ValidationPipe`   | Validación de datos               | Valida los datos de entrada según las reglas especificadas. |
| `ParseIntPipe`     | Conversión de tipos               | Convierte el parámetro de ruta en un entero.                |
| `ParseUUIDPipe`    | Conversión de tipos               | Convierte el parámetro de ruta en un UUID.                  |
| `ParseBoolPipe`    | Conversión de tipos               | Convierte el parámetro de ruta en un booleano.              |
| `ParseArrayPipe`   | Conversión de tipos               | Convierte el parámetro de ruta en un array.                 |
| `ParseEnumPipe`    | Conversión de tipos               | Convierte el parámetro de ruta en un valor de enum.         |
| `DefaultValuePipe` | Asignación de valores por defecto | Asigna valores por defecto a los parámetros de ruta.        |
| `TransformPipe`    | Transformación de datos           | Transforma los datos de entrada antes de ser procesados.    |
| `ValidationPipe`   | Validación de datos               | Valida los datos de entrada según las reglas especificadas. |

Estos son algunos de los pipes nativos proporcionados por NestJS para validar, transformar y manipular datos antes de que sean procesados por los controladores.

## `class-validator` y `class-transformer`

| LIBRERÍA            | FUNCIÓN                 | DESCRIPCIÓN                                                                  |
| ------------------- | ----------------------- | ---------------------------------------------------------------------------- |
| `class-validator`   | Validación de datos     | Proporciona decoradores y utilidades para validar objetos basados en clases. |
| `class-transformer` | Transformación de datos | Facilita la transformación de objetos en instancias de clases y viceversa.   |

Propiedades básicas:

| LIBRERÍA            | PROPIEDAD        | DESCRIPCIÓN                                           |
| ------------------- | ---------------- | ----------------------------------------------------- |
| `class-validator`   | `@IsNotEmpty()`  | Verifica que un valor no esté vacío.                  |
| `class-validator`   | `@IsString()`    | Verifica que un valor sea una cadena de texto.        |
| `class-validator`   | `@IsInt()`       | Verifica que un valor sea un número entero.           |
| `class-transformer` | `plainToClass()` | Transforma un objeto plano en una instancia de clase. |
| `class-transformer` | `classToPlain()` | Transforma una instancia de clase en un objeto plano. |

Propiedades adicionales:

| LIBRERÍA            | PROPIEDAD                 | DESCRIPCIÓN                                                           |
| ------------------- | ------------------------- | --------------------------------------------------------------------- |
| `class-validator`   | `@IsEmail()`              | Verifica que un valor sea una dirección de correo electrónico válida. |
| `class-validator`   | `@IsNotEmptyObject()`     | Verifica que un objeto no esté vacío.                                 |
| `class-validator`   | `@IsBoolean()`            | Verifica que un valor sea booleano.                                   |
| `class-validator`   | `@IsDate()`               | Verifica que un valor sea una fecha válida.                           |
| `class-validator`   | `@IsArray()`              | Verifica que un valor sea un array.                                   |
| `class-transformer` | `plainToClassFromExist()` | Transforma un objeto plano en una instancia de clase existente.       |
| `class-transformer` | `classToClass()`          | Transforma una instancia de clase en otra instancia de clase.         |

Estas propiedades adicionales ofrecen más opciones para validar y transformar datos en aplicaciones NestJS utilizando `class-validator` y `class-transformer`.
