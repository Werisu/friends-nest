import { Matches, MinLength } from 'class-validator';

export function IsStrongPassword(): PropertyDecorator {
  return function (target: object, propertyKey: string | symbol) {
    Matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.',
      }
    )(target, propertyKey);
    MinLength(8, { message: 'Password must be at least 8 characters long' })(
      target,
      propertyKey as string
    );
  };
}
