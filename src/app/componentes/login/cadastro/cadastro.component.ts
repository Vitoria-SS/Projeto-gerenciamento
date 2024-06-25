import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor() { }

  onSubmit() {
  
    console.log('Login:', this.username, 'Senha:', this.password);
  }
  ngOnInit(): void {
  }

}
