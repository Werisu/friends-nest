import { HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';

/**
 * Decorator that validates whether a given parameter is a valid UUID.
 *
 * @param propertyName - The name of the parameter to be validated.
 * @returns A parameter decorator that applies UUID validation.
 *
 * This decorator uses the `ParseUUIDPipe` to ensure the parameter is a
 * valid UUID. If validation fails, it throws a BadRequestException with
 * a custom error message.
 */

export function IsUUIDParam(propertyName: string): ParameterDecorator {
  return Param(
    propertyName,
    new ParseUUIDPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      exceptionFactory: () => {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Ops! This is not a valid UUID. Invalid UUID',
          error: 'Bad Request',
        };
      },
    })
  );
}
