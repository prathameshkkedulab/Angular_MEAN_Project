import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccServiceService } from './account/acc-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AccountModule } from './account/account.module';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RegistrationComponent } from './account/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ArticlesModule,
    StaticpagesModule,
    AccountModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RegistrationComponent
  ],
  providers: [AccServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
