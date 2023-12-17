import { LogEntry } from './logger';
import { Observable } from 'rxjs';

export abstract class LogPublisher {
  location: String = '';
  abstract log(record: LogEntry): Observable<boolean>;
  abstract clear(): Observable<boolean>;
}
