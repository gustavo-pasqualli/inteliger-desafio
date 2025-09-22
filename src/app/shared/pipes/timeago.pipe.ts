import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();

    const diffMs = now.getTime() - date.getTime();
    if (diffMs < 0) return '';

    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHrs = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHrs / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) {
      return `Atualizado há ${diffYears} ${diffYears === 1 ? 'ano' : 'anos'}`;
    }
    if (diffMonths > 0) {
      return `Atualizado há ${diffMonths} ${diffMonths === 1 ? 'mês' : 'meses'}`;
    }
    if (diffDays > 0) {
      return `Atualizado há ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;
    }
    if (diffHrs > 0) {
      return `Atualizado há ${diffHrs} ${diffHrs === 1 ? 'hora' : 'horas'}`;
    }
    if (diffMin > 0) {
      return `Atualizado há ${diffMin} ${diffMin === 1 ? 'minuto' : 'minutos'}`;
    }

    return 'Atualizado há alguns segundos';
  }
}
