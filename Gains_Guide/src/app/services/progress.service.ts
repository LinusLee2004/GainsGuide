import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProgressMetric } from '../models/progress.model';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private metrics = new BehaviorSubject<ProgressMetric[]>([]);
  metrics$ = this.metrics.asObservable();

  addMetric(metric: ProgressMetric) {
    this.metrics.next([...this.metrics.value, metric]);
  }
}