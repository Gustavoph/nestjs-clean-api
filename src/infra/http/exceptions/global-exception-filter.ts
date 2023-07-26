import { DomainError } from '@/domain/errors/domain-error'
import { type ExceptionFilter, Catch, type ArgumentsHost, HttpException } from '@nestjs/common'
import { type HttpArgumentsHost } from '@nestjs/common/interfaces'
import { type Response } from 'express'

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  public catch (exception: any, host: ArgumentsHost): Response {
    const ctx: HttpArgumentsHost = host.switchToHttp()

    const response = ctx.getResponse()
    const request = ctx.getRequest()

    if (exception instanceof DomainError) {
      const { message, statusCode: code } = exception

      return response.status(code).json({
        message,
        code,
        timestamp: new Date().toISOString(),
        endpoint: request.path
      })
    }

    if (exception instanceof HttpException) {
      const code = exception.getStatus()

      return response.status(code).json({
        message: exception.message,
        code,
        timestamp: new Date().toISOString(),
        endpoint: request.path
      })
    }

    return response.status(500).json({
      message: 'Internal Server Error',
      code: 500,
      timestamp: new Date().toISOString(),
      endpoint: request.path
    })
  }
}
