import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  CanActivate,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NbAuthService } from '@nebular/auth';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private nbAuthService: NbAuthService, private router: Router) {
  }
  /**
   * True if user is authenticated, false otherwise.
   * @param next Activated route.
   * @param state Router state.
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.nbAuthService.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['auth/login']);
        }
      }),
    );
  }

  canLoad(route: Route, segments: UrlSegment[] = []): Observable<boolean> | Promise<boolean> | boolean {
    return this.nbAuthService.isAuthenticated().pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['auth/login']);
        }
      }),
    );
  }
}
