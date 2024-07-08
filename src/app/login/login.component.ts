import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../module/user';
import { TranslateService } from '@ngx-translate/core';
import { AppRoutes } from '../app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use(this.translate.getDefaultLang());
  }

  ngOnInit(): void {
    this.logForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.logForm.valid) {
      let user: User = this.logForm.value;
      console.log(user);
      this.router.navigate([AppRoutes.HOME]);
    }
  }

  get formControls() {
    return this.logForm.controls;
  }

  //Awesome!
  get showErrorMessage(): boolean {
    return this.logForm.controls['username'].errors !== null
    || this.logForm.controls['password'].errors !== null
     }

}
