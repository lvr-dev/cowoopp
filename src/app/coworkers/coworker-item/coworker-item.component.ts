import { Component, Input, OnInit } from '@angular/core';
import { Coworker } from '../coworker';
import { AvatarService } from '@services';

@Component({
  selector: 'app-coworker-item',
  templateUrl: './coworker-item.component.html',
  styleUrls: ['./coworker-item.component.scss'],
})
export class CoworkerItemComponent implements OnInit {
  @Input() coworker: Coworker;

  avatarImg: string;

  constructor(private avatarService: AvatarService) { }

  ngOnInit() {
    this.avatarImg = this.coworker.avatar ?
        this.coworker.avatar :
        this.avatarService.getRandomAvatar();
  }
}
