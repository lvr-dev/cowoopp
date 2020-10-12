import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvatarService, FacadeService } from '../../core/services';
import { Coworker } from '../coworker';

@Component({
  selector: 'app-coworkers-detail',
  templateUrl: './coworkers-detail.page.html',
  styleUrls: ['./coworkers-detail.page.scss'],
})
export class CoworkersDetailPage implements OnInit {

  coworker: Coworker;
  fullName: string;
  avatarImg: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private facadeService: FacadeService,
      private avatarService: AvatarService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap  => {
      if (!paramMap.has('coworkerId')) {
        this.router.navigate(['/coworkers']);
        return;
      }
      const coworkerId = paramMap.get('coworkerId');
      this.facadeService.getCoWorker(coworkerId).subscribe(co => {
        this.coworker = co;
        this.fullName = this.getFullName(co);
        this.getAvatarUrl();
      });
    });
  }

  getFullName(coworker: Coworker) {
    if (coworker.prefix && coworker.firstName) {
      return `${coworker.firstName} ${coworker.prefix} ${coworker.lastName}`;
    }
    if (coworker.prefix && !coworker.firstName) {
      return `${coworker.prefix} ${coworker.lastName}`;
    }
    if (coworker.firstName && !coworker.prefix) {
      return `${coworker.firstName} ${coworker.lastName}`;
    }
    return `${coworker.lastName}`;
  }

  getAvatarUrl() {
    if (this.coworker) {
      this.avatarImg = this.avatarService.getRandomAvatar();
    }
  }
}
