import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { Error as MongooseError } from 'mongoose';
import { ApiResponse } from '../responses/api-response';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Error interno del servidor';

    // HttpException (NestJS)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message =
        typeof res === 'string' ? res : (res as any)?.message || 'Error HTTP';
    }

    // Mongoose validation errors
    else if (exception instanceof MongooseError.ValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = Object.values(exception.errors)
        .map((err) => err.message)
        .join(', ');
    }

    // Mongo duplicate key
    else if ((exception as any)?.code === 11000) {
      status = HttpStatus.BAD_REQUEST;
      const field = Object.keys((exception as any).keyValue)[0];
      message = `El valor del campo "${field}" ya existe.`;
    }

    response.status(status).json(ApiResponse.error(message, status));
  }
}
