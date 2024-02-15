import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
@Injectable()
export class RegisterPageComponent implements OnInit {
  userForm: FormGroup;
  email: string = "";
  password: string = "";

  constructor(private fb: FormBuilder, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [this.email, Validators.required],
      password: [this.password, Validators.required]
    });
  }

  register(): void {
    if (this.userForm?.valid) {
      var user = new User();
      user.username = this.userForm.value.username;
      user.password = this.userForm.value.password;
      this.userService.register(user).subscribe(
        res => {
          this.toastr.success(res?.message,res?.status);
          this.userForm.reset();
        },
        err => {
          this.toastr.error(err?.message,err?.status);
        }
      )
    }
  }

  
}
