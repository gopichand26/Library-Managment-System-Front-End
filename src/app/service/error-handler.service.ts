import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorHandlerService implements ErrorHandler{

    handleError(error: any): void{
        if(error instanceof HttpErrorResponse){
        if(error.status === 401){
            //window.alert(error.message);
            alert('Please Enter valid userName and Password');
            window.location.assign('');
        }
        else{
            window.alert(error.message);
        }
    } else {
        console.error(error);  
    }
}
}