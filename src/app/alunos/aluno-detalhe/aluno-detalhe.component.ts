import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  inscricao!: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnInit(): void {
    console.log('ngOnInit: AlunoDetalheComponent')

    this.inscricao = this.route.data.subscribe(
      ({ aluno }) => {
        console.log('Recebendo o obj aluno do resolver')
        this.aluno = aluno;
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
