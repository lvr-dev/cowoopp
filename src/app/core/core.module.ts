import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureImportedOnceModule } from './ensure-imported-once.module';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class CoreModule extends EnsureImportedOnceModule {
    public constructor(@SkipSelf() @Optional() parent: CoreModule) {
        super(parent);
    }
}
