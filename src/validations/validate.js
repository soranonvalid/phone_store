import { ResponseError } from "../errors/responseError.js";

export default function validate(schema, request) {
  const res = schema.safeParse(request);

  if (!res.success) {
    const message = res.error.issues.map((e) => e.message).join(", ");
    throw new ResponseError(400, message);
  }

  return res.data;
}
