import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.podeDesativar ? component.podeDesativar() : true;
  }

}
