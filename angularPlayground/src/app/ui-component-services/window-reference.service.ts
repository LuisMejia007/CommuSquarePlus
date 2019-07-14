import { Injectable } from '@angular/core';



function nativeWindowReference(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})

export class WindowReferenceService {

 get nativeWindow(): Window {
   return nativeWindowReference();
 }


}
