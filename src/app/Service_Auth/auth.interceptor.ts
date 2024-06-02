import { HttpInterceptorFn } from '@angular/common/http';
import { read } from 'fs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  const jwtToken = getJwtToken();
    if(jwtToken){
      var cloned = req.clone(
        {
          setHeaders : {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        return next(cloned);
}
  
  return next(req);
};

function getJwtToken(): string | null {
  return  localStorage.getItem('JWT_TOKEN');
}
