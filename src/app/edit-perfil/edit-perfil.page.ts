import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.page.html',
  styleUrls: ['./edit-perfil.page.scss'],
})
export class EditPerfilPage implements OnInit {
  nome: string = '';
  altura: string = '';
  dataNascimento: string = '';
  sexo: string = '';
  objetivo: string = '';
  nivelTreino: string = '';
  nivelAtividade: string = '';
  isFormValid: boolean = false;

  constructor() { }

  ngOnInit() { }

  // Função para selecionar apenas um nível de treino
  selectNivelTreino(value: string) {
    this.nivelTreino = value;
    this.validateForm();
  }

  // Função para selecionar apenas um nível de atividade
  selectNivelAtividade(value: string) {
    this.nivelAtividade = value;
    this.validateForm();
  }

  // Função para validar o formulário
  validateForm() {
    this.isFormValid = this.nome && this.altura && this.dataNascimento && this.sexo &&
                       this.objetivo && this.nivelTreino && this.nivelAtividade ? true : false;
  }

  // Função para salvar o perfil
  salvarPerfil() {
    if (this.isFormValid) {
      // Lógica para salvar o perfil
      console.log('Perfil salvo com sucesso!');
    } else {
      console.log('Preencha todos os campos antes de salvar.');
    }
  }
}
