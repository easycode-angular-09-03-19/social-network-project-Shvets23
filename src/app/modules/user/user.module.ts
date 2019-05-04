import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { ProfileControlsComponent } from './components/profile-controls/profile-controls.component';
import { ProfileTabsComponent } from './components/profile-tabs/profile-tabs.component';
import { ProfileSelfiesComponent } from './components/profile-selfies/profile-selfies.component';
import { ImgPreviewComponent } from '../../common/components/img-preview/img-preview.component';

@NgModule({
  declarations: [
    ProfileComponent, 
    SettingsComponent, 
    ProfileCoverComponent, 
    ProfileControlsComponent, 
    ProfileTabsComponent, 
    ProfileSelfiesComponent,
    ImgPreviewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
