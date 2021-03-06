import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ThemeModule } from '../../../theme/theme.module';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CreateUserComponent } from './components/create-user/create-user.component';

const USERS_MODULES = [
  UsersRoutingModule,
  SharedModule.forRoot(),
  ThemeModule.forRoot()
];

const USERS_COMPONENTS = [
  UsersComponent,
  CreateUserComponent,
];

const EXPORTS_USERS_COMPONENTS = [
  CreateUserComponent,
];

const USERS_PROVIDERS = [
];

@NgModule({
  imports: [
    ...USERS_MODULES
  ],
  declarations: [
    ...USERS_COMPONENTS
  ],
  exports: [
    ...EXPORTS_USERS_COMPONENTS
  ],
  entryComponents: [
    ...EXPORTS_USERS_COMPONENTS,
  ],
  providers: [
    ...USERS_PROVIDERS
  ]
})
export class UsersModule {
  static forRoot(): ModuleWithProviders<UsersModule> {
    return {
      ngModule: UsersModule,
      providers: [
        ...USERS_PROVIDERS
      ]
    };
  }
}
