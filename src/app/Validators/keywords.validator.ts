import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { text } from "stream/consumers";

export function inappropriateKeywordsValidator(keyswords : string[] ): ValidatorFn{
     return (control : AbstractControl) : ValidationErrors | null =>{
        const text = control.value as string ;
        for(const keyword of keyswords){
            if(text.toLowerCase().includes(keyword)){
                return {inappropriateKeywords:true};
            }
        }
    return null ;
     } 

}