import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ass-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users:Array<User> = [];
  userId: any = '';

  constructor(
    private fb: FormBuilder, 
    private actRoute : ActivatedRoute,
    private router : Router,
    private userService: UserService) { 
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
  }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      console.log(this.userId);

      if (this.userId !== null) {
        this.userService.getUser(this.userId).subscribe( 
          result => {
            this.userForm.patchValue({
              id: result[0].id,
              nome: result[0].nome,
              sobrenome: result[0].sobrenome,
              idade: result[0].idade,
              profissao: result[0].profissao
            })
          })
      }
    })

    this.getUsersLista();
  }

  getUsersLista(){
    this.userService.getUsers().subscribe(response => { 
      this.users = response; }
  );
  }


  postUser(){
    this.userForm.get('id')?.patchValue(this.users.length + 1);

    this.userService.postUser(this.userForm.value).subscribe( result => {
      console.log(`Usuario ${result.nome} foi cadastrado com sucesso`)
    },
    () => this.router.navigate(['/'])
    );
  }
  
 updateUser(){
  this.userService.updateUser(this.userId, this.userForm.value).subscribe( 
    result => console.log(`usuario atualizado ${result}`),
    () => this.router.navigate(['/'])
  )}

  actionButton() {
    if(this.userId !== null) {
      this.updateUser();
    } else {
      this.postUser();
    }
  }
}
