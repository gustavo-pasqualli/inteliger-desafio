import { inject, Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private injector = inject(Injector);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const toast = this.injector.get(MessageService);

        if (error.status === 404) {
          toast.add({
            severity: 'warn',
            summary: 'Usuário não encontrado',
            detail: 'Verifique o nome informado.',
            life: 4000
          });
        } else {
          toast.add({
            severity: 'error',
            summary: 'Erro na API',
            detail: this.extractMessage(error) || 'Tente novamente mais tarde.',
            life: 5000
          });
        }

        return throwError(() => error);
      })
    );
  }

  private extractMessage(err: HttpErrorResponse): string {
    const e = err?.error as any;
    if (typeof e === 'string') return e;
    return e?.message || err?.message || '';
  }
}
