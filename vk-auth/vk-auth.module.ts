import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//services
import { VkAuthService } from './vk-auth.service'

//components
import { VkAuthComponent } from './vk-auth.component'




@NgModule({
    imports: [
        CommonModule    
    ],
    declarations: [
        VkAuthComponent
    ],
    providers: [
        VkAuthService
    ],
    exports:[
        VkAuthComponent
    ]
})
export class VkAuthModule { }
