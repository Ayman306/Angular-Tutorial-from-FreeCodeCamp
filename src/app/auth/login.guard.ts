import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';
import { Observable } from 'rxjs';

// export const loginGuard: CanActivateFn = (route, state) => {
//   return false;
// };
export class loginGuard implements CanActivate {
  constructor(private loginService: LoginServiceService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
