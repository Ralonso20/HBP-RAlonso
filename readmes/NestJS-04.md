# Nest JS - Nest JS Routing

[Volver a Inicio](../README.md)

## 🎯 Diferencias entre PUT y PATCH

- PUT: Se utiliza para realizar una actualización completa de un recurso.
- PATCH: Se utiliza para realizar una actualización parcial de un recurso.

# 🎯 Diferencias Middlewares, Guards e Interceptors

En NestJS, los middlewares, guards e interceptors son tres tipos de
componentes que permiten manipular el flujo de solicitudes y respuestas
en la aplicación. Cada uno de estos componentes tiene diferentes
propósitos y casos de uso específicos.

## 🎯 Middlewares

**Diferencias:**

1. **Propósito:** Los middlewares se utilizan para realizar operaciones antes de que una solicitud llegue a un controlador. Son ideales para tareas como el registro de solicitudes, la manipulación de datos en la solicitud y la implementación de lógica compartida.
2. **Alcance:** Pueden ser globales o específicos a rutas particulares.
3. **Ejecutan:** Se ejecutan en el orden en que se definen, antes de que lleguen a los guardias o interceptores.

**Casos de uso:**

- **Registro de solicitudes:** Registrar todas las solicitudes entrantes para auditoría.
- **Validación de tokens JWT:** Descodificar y validar tokens JWT antes de que lleguen a los controladores.
- **CORS:** Configurar las cabeceras CORS para la aplicación.

Ejemplo:

```typescript
import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(`Request...`);
    next();
  }
}
```

## 🎯 Guardianes

- Son funciones que devuelven "true" o "false".
- No tienen acceso directo a "Req, Res o Next", pero sí al contexto de ejecución.

**Diferencias:**

1. **Propósito:** Los guards se utilizan para determinar si una solicitud específica debe ser manejada por un controlador. Son utilizados principalmente para la autenticación y autorización.
2. **Alcance:** Se aplican a rutas específicas o globalmente.
3. **Ejecutan:** Se ejecutan después de los middlewares y antes de los interceptores.

**Casos de uso:**

- **Autenticación:** Verificar si un usuario está autenticado.
- **Autorización:** Verificar si un usuario tiene permisos para acceder a una ruta específica.
- **Control de acceso:** Basar el acceso en roles o permisos específicos.

Ejemplo:

```typescript
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

## 🎯 Interceptores

- Al igual que los Guardianes, tienen un mecanismo de acción similar a los Middlewares por el hecho de que interceptan la request previo a la llegada a los Controllers, pero con otro modo de trabajar.
- Un interceptor se utiliza para modificar información previo a la llegada del request al Controlador o antes de que la response llegue al cliente.

**Diferencias:**

1. **Propósito:** Los interceptores permiten transformar o manipular las respuestas, manejar errores y realizar operaciones posteriores a la ejecución de los controladores.
2. **Alcance:** Pueden ser aplicados a rutas específicas o de manera global.
3. **Ejecutan:** Se ejecutan después de los guards y pueden intervenir tanto en la solicitud entrante como en la respuesta saliente.

**Casos de uso:**

- **Transformación de respuesta:** Modificar o transformar la respuesta antes de enviarla al cliente.
- **Manejo de errores:** Atrapar y manejar errores globalmente.
- **Tiempo de ejecución:** Medir el tiempo de ejecución de las solicitudes.

Ejemplo:

```typescript
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => ({ data })));
  }
}
```
