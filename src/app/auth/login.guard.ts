import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { LoginServiceService } from '../login/login-service.service';
import { Observable } from 'rxjs';

// export const loginGuard: CanActivateFn = (route, state) => {
//   return false;
// };
export class loginGuard implements CanActivate,CanLoad {
  constructor(private loginService: LoginServiceService , private router:Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      return this.loginService.isLoggedIn ? true : this.router.navigate(['/login']);

  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.isLoggedIn
  }

}
