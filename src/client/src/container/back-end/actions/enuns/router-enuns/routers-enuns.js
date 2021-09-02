const ROUTER_URL_BASE = "www.soul.com.br"
const ROUTER_Loggin = "/portal/loggin";
const ROUTER_FEED = "/portal/feed"
const ROUTER_SIGN_UP = "/portal/register"
const ROUTER_PERFIL = "/Portal/perfil"
const ROUTER_CONFIGURATIONS = "/portal/perfil/configurations"

const API_BASE = "api.soul.portal"
const API_GET_USER = "/api/user/{id}/getUser"
const API_DELETE_USER = "/api/user/{id}/delete"
const API_CREATE_NEW_USER = "/api/user/creatnew"
const API_UPDATE_USER = "/api/user/{id}/update"

const ROUTERS = {
               site:{
                   portalBase:ROUTER_URL_BASE,
                   loggin:ROUTER_Loggin,
                   signUp: ROUTER_SIGN_UP,
                   feed:ROUTER_FEED,
                   perfil:ROUTER_PERFIL,     
                   configurations:  ROUTER_CONFIGURATIONS    
                },
                api:{
                    base:API_BASE,
                    get:API_GET_USER,
                    delet:API_DELETE_USER,
                    create:API_CREATE_NEW_USER,
                    update:API_UPDATE_USER
                }

}


export {ROUTERS};


