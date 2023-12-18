import { Observable, of } from 'rxjs';
import { LogPublisher } from './log.publisher';
import { LogEntry } from './logger';

export class LogConsole extends LogPublisher {
  override log(entry: LogEntry): Observable<boolean> {
    console.log(entry.buildLogString());
    return of(true);
  }

  override clear(): Observable<boolean> {
    console.clear();
    return of(true);
  }
}
