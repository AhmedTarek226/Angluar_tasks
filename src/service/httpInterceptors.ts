import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./api/auth.interceptor";
import { LoaderInterceptor } from "./api/loader.interceptor";

export const HttpInterceptors=[
    {provide: HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
]