import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacadeService } from '../core/services/facade.service';
import { Coworker } from './coworker';
import {AvatarService} from '../core/services/avatar.service';

@Component({
  selector: 'app-coworkers',
  templateUrl: './coworkers.page.html',
  styleUrls: ['./coworkers.page.scss'],
})
export class CoworkersPage implements OnInit {
  coworkers$: Observable<Coworker[]>;

  constructor(
      private facadeService: FacadeService) { }

  ngOnInit() {
    this.coworkers$ = this.facadeService.getCoWorkers();
  }

}
