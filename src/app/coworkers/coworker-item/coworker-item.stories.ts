import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CoworkerItemComponent } from './coworker-item.component';
import { DefaultValuePipe } from '../../shared/pipes/default-value.pipe';

export default {
  title: 'Coworker item',
  excludeStories: /.*Data$/,
  decorators: [
  moduleMetadata({
    declarations: [
      DefaultValuePipe
    ],
    imports: [
      CommonModule,
      IonicModule,
      RouterModule,
      RouterTestingModule
    ]
  })
  ]
};

export const coworkerItemData = {
  id: 'e519ddef-cb17-402c-9676-36ecb89dc5fe',
  lastName: 'Taylor',
  firstName: 'Rodney',
  since: '2019-02-01',
  until: '2019-11-01',
  status: 'assigned',
  visible: true,
  email: 'rodney.taylor@divotion.com',
  phone: '0612345678',
  client:  'Amorico Co.'
};

export const Default = () => ({
  component: CoworkerItemComponent,
  props: {
    coworker: coworkerItemData
  }
});
