import { Struct } from "superstruct";

export function validateOrThrow<T>(
    schema: Struct<T>, value: unknown, isCoercionEnabled?: boolean,
  ): T {
    const [err, val] = schema.validate(value, { coerce: (Boolean(isCoercionEnabled)) });
    if (val) {
      return value as T;
    }
    throw err;
  }