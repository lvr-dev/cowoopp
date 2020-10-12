import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable, Subscription} from 'rxjs';
import { take } from 'rxjs/operators';
import { map } from 'rxjs/operators';


import { Coworker } from '../../coworkers/coworker';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private httpService: HttpService) { }

  getCoWorkers(): Observable<Coworker[]> {
    return this.httpService.getData<Coworker[]>('../assets/data/data.json');
  }

  getCoWorker(coworkerId: string): Observable<Coworker>  {
    const coworkers$ = this.getCoWorkers();
    return coworkers$.pipe(map(coworkers => {
      return coworkers.find(co => co.id === coworkerId);
     })
    );
  }
}
