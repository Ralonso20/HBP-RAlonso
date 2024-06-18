# Nest JS - Nest JS Testing

### **Configuracion paths relativos**

jest-e2e.json

```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "moduleDirectories": ["<rootDir>/../", "node_modules"]
}
```

package.json: Agregar el mapper al package

```json
    "moduleNameMapper": {
      "^src/(.*)": "<rootDir>/$1",
      "tests/(.*)": "<rootDir>/__tests__/$1"
    }
```

### Sqlite in memory

```typescript
const SqliteTestDataSourceOptions: DataSourceOptions = {
  type: "sqlite",
  database: ":memory:",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  synchronize: true,
  dropSchema: true,
};
```

### Configuracion db condicional por "enviroment"

ConfigModule:

```typescript
  ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env'],
      isGlobal: true,
      load: [
        postgresDataSourceConfig,
        sqliteDataSourceConfig,
        () => ({
          enviroment: process.env.environment || 'TEST',
        }),
      ],
    }),
```

TypeOrmModule:

```typescript
TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) =>
    configService.get("enviroment") === "TEST"
      ? configService.get("sqlite")
      : configService.get("postgres"),
});
```

[Volver a Inicio](../README.md)
