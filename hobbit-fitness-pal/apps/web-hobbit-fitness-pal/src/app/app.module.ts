import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ CoreModule, FormsModule, SharedModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
