import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { HttpModule } from '@angular/http';

//pages
import { VkAuthModule }     from '../vk-auth/vk-auth.module';


@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        VkAuthModule

    ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
