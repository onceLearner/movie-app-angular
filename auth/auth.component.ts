import { ActivatedRoute } from '@angular/router';
import { User } from './../../models';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private httpService: HttpService,
    private router: ActivatedRoute
  ) { }



  public email: string;
  public password: string



  ngOnInit(): void {
  }



  onSubmit(user: User) {

    this.httpService.add_user_to_db(user)

  }
}
