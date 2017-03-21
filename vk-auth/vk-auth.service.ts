declare var VK:any;
import { Injectable } from '@angular/core';


@Injectable()
export class VkAuthService {    

    constructor() { 
        let vk_api_script = document.createElement("script");
        vk_api_script.onload = ()=>this.onScriptLoad();
        vk_api_script.src = "https://vk.com/js/api/openapi.js?142";
        vk_api_script.async = true;
        document.getElementsByTagName('head')[0].appendChild(vk_api_script);
    }

    public get session():Seccion{
        return this._session;
    }

    //settings - bit mask(check desc in VK developer site)
    public login(settings:number = undefined){
        VK.Auth.login( (seccion: Seccion) => this.onLogin(seccion), settings );
    }

    public logout(settings:number = undefined){
        VK.Auth.login( (seccion: Seccion) => this.onLogin(seccion), settings );
    }


//-----------------------------------------------------------------------------------------------
//----------------------------------------private------------------------------------------------

    private userBaseInfo:UserBaseInfo;
    private _loginData: LoginData;

    private onScriptLoad(){
        VK.init({apiId: 5935032});
        //VK.Widgets.Auth('vk_auth', {onAuth: (userInfo:UserBaseInfo)=>this.onAuth(userInfo)});
    }

    private onLogin(loginData: LoginData){
        this._loginData = loginData;
    }

    private onLogout(loginData: LoginData){
        this._loginData = {seccion: loginData.seccion, status: loginData.status};//In really input loginData has one more property. That's why there was create new object
    }

     private onAuth(userBaseInfo:UserBaseInfo){
            this.userBaseInfo = userBaseInfo;
       
    }
    
}

export interface LoginData{
    seccion:Seccion;
    status: string;
}

export interface Seccion{
    expire : number;
    mid : number; 
    secret:string;
    sid: string;
    sig : string;
    user: UserBaseInfo;
}
export interface UserBaseInfo{
    domain: string;
    first_name: string;
    href: string;
    id: string;
    last_name: string;
    nickname: string;
}

export interface UserWidgetInfo{
    first_name: string;
    last_name: string;
    photo: string;
    photo_rec: string;
    hash: string;
}