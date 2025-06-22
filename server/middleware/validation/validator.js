import { ZodError } from 'zod';

export const validator = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessages = error.errors.map((issue) => ({
        message: `${issue.path.join(".")} is ${issue.message}`,
      }));
      res
        .status(400)
        .json({ error: "Invalid data", details: errorMessages });
    } else {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ error: "Internal Server Error" });
    }
  }
};
