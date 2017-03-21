
import {Component} from '@angular/core';
import {VkAuthService} from './vk-auth.service'


@Component({
    selector: 'vk-auth',
    templateUrl: './vk-auth.component.html'
})
export class VkAuthComponent{
    constructor(private auth:VkAuthService) {
    }
    

    
  


    private login(){
        this.auth.login();
    }
    private logout(){
        this.auth.logout();
    }
}


