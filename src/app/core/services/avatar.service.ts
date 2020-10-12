import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  private avatarsInUse: string[] = [];
  private avatarsAvailable: string[] = [
    'black-blood',
    'cheburashka',
    'finn',
    'genie',
    'gizmo',
    'green-lantern-dc',
    'harley-quinn-dc',
    'hulk',
    'ice-king',
    'jake',
    'jason-voorhees',
    'kermit-the-frog',
    'klingon-head',
    'lumpy-space-princess',
    'madagascar',
    'ninja-turtle',
    'oracle',
    'r2-d2',
    'rogue',
    'scream',
    'spongebob-squarepants',
    'super-mario',
    'undyne'
  ];

  public getRandomAvatar() {
    const avatarString = this.getAvatarString();
    this.avatarsInUse.push(avatarString);
    return this.getAvatarUrl(avatarString);
  }

  private getAvatarString() {
    if (this.avatarsAvailable.length > this.avatarsInUse.length) {
      return this.getUnusedAvatar();
    } else {
      const random = this.getRandomInt();
      return this.avatarsAvailable[random];
    }
  }

  private getRandomInt() {
    const arrayLength = this.avatarsAvailable.length - 1;
    return Math.floor(Math.random() * Math.floor(arrayLength));
  }

  private getUnusedAvatar(): string {
    const random = this.getRandomInt();
    const selectedAvatar = this.avatarsAvailable[random];
    if (this.avatarsInUse.indexOf(selectedAvatar) > -1) {
      return this.getUnusedAvatar();
    }
    return this.avatarsAvailable[random];
  }

  private getAvatarUrl(avatarString) {
    return `./assets/avatars/icons8-${avatarString}-48.png`;
  }
}
