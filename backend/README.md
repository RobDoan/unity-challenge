# Unity Code Challenge

## System Design

**Use layer pattern**

- `src/routes`: Routers
- `src/controller`: Controller layer
- `src/services`: Business Logic Layer
- `src/models`: Data Layer

## Libraries

- [Mongoose](https://mongoosejs.com)
- [Joi](https://github.com/hapijs/joi): schema validation
- [winston](https://github.com/winstonjs/winston) and [morgan](https://github.com/expressjs/morgan): loggin
- [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc): Api document
- [multer](https://github.com/expressjs/multer): File uploading

## Commands

- Running locally: `yarn dev`
- Using Docker: `docker-compose up/run`

Api Document: `http://localhost:4000/v1/docs`

## Project Structure

```
public
  |--uploads        # file upload folder
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```
