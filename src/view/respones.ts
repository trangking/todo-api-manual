import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  interface Response {
    handleSuccess(data: any, message?: string): Response;
    handleCreated(data: any, message?: string): Response;
    handleError(err: any, status?: number): Response;
  }
}

const newResponse = (success: boolean, message: string, data: any = null) => ({
  success,
  message,
  data,
});

export const responseHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.handleSuccess = (data: any, message = "Success") => {
    const resBody = newResponse(true, message, data);
    return res.status(200).json(resBody);
  };

  res.handleCreated = (data: any, message = "Created") => {
    const resBody = newResponse(true, message, data);
    return res.status(201).json(resBody);
  };

  res.handleError = (err: any, status = 500) => {
    const resBody = newResponse(false, err.message || "Internal Server Error");
    return res.status(status).json(resBody);
  };

  next();
};
