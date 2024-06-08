import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailComponent } from './components/detail-order/detail-order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [    
      HomeComponent,
      HeaderComponent,
      FooterComponent,
      DetailProductComponent,
      OrderComponent,
      OrderDetailComponent,
      LoginComponent,
      RegisterComponent,
      AppComponent
    ],
    imports: [
      ReactiveFormsModule,
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule,
      NgbModule
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true,
      },
    ],
    bootstrap: [
      AppComponent,
      // HomeComponent,
      // HeaderComponent,
      // FooterComponent,
      // DetailProductComponent,
      // OrderComponent,
      // OrderConfirmComponent,
      // LoginComponent,
      // RegisterComponent,
      // DetailProductComponent
    ]
  })
  export class AppModule { }
