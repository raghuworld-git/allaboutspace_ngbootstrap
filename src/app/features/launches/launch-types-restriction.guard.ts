import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

export const launchTypesRestictionGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {

    const launchtype = route.paramMap.get("launchtype");
    if (launchtype != null && (launchtype.toLocaleLowerCase() === 'upcoming' || launchtype.toLocaleLowerCase() === 'previous')) {
        return true;
    } else {
        return false;
    }
}