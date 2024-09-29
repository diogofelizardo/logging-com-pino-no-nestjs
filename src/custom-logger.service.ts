import { LoggerService, Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger implements LoggerService {
  log(message: string) {
    // Implementação personalizada
    console.log(`[CUSTOM LOG]: ${message}`);
  }

  error(message: string, trace: string) {
    // Implementação personalizada
    console.error(`[CUSTOM ERROR]: ${message} - Trace: ${trace}`);
  }

  warn(message: string) {
    // Implementação personalizada
    console.warn(`[CUSTOM WARN]: ${message}`);
  }

  debug(message: string) {
    // Implementação personalizada
    console.debug(`[CUSTOM DEBUG]: ${message}`);
  }

  verbose(message: string) {
    // Implementação personalizada
    console.info(`[CUSTOM VERBOSE]: ${message}`);
  }
}