import { NgModule } from '@angular/core'
import { SharedModule } from '@shared/shared.module'

import { LayoutDefaultComponent } from './default/default.component'
import { HeaderFullScreenComponent } from './default/header/components/fullscreen.component'
import { HeaderI18nComponent } from './default/header/components/i18n.component'
import { HeaderIconComponent } from './default/header/components/icon.component'
import { HeaderNotifyComponent } from './default/header/components/notify.component'
import { HeaderSearchComponent } from './default/header/components/search.component'
import { HeaderStorageComponent } from './default/header/components/storage.component'
import { HeaderTaskComponent } from './default/header/components/task.component'
import { HeaderUserComponent } from './default/header/components/user.component'
import { HeaderComponent } from './default/header/header.component'
import { SidebarComponent } from './default/sidebar/sidebar.component'
import { LayoutFullScreenComponent } from './fullscreen/fullscreen.component'
import { LayoutPassportComponent } from './passport/passport.component'

const COMPONENTS = [
  LayoutDefaultComponent,
  LayoutFullScreenComponent,
  HeaderComponent,
  SidebarComponent
]

const HEADERCOMPONENTS = [
  HeaderSearchComponent,
  HeaderNotifyComponent,
  HeaderTaskComponent,
  HeaderIconComponent,
  HeaderFullScreenComponent,
  HeaderI18nComponent,
  HeaderStorageComponent,
  HeaderUserComponent
]

// passport
const PASSPORT = [
  LayoutPassportComponent
]

@NgModule({
  imports: [SharedModule],
  providers: [],
  declarations: [
    ...COMPONENTS,
    ...HEADERCOMPONENTS,
    ...PASSPORT
  ],
  exports: [
    ...COMPONENTS,
    ...PASSPORT
  ]
})
export class LayoutModule { }