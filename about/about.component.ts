import { ActivatedRoute, Params } from '@angular/router';
import { Film } from './../../models';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }

  public film: Film

  id = "335983"

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        // Do something
        this.httpService.getDetailFilm(params.id).then((data: any) => {


          this.httpService.getImage(data.poster_path).then((err: any) => (this.film.poster_path = err.url))



          console.log({ data })

          this.film = data

        })
      }
    });

    // const id: number = this.route.snapshot.params["id"]
    // console.log(this.route.snapshot.params)

    // this.httpService.getDetailFilm("335983").then((data: any) => {


    //   this.httpService.getImage(data.poster_path).then((err: any) => (this.film.poster_path = err.url))



    //   console.log({ data })

    //   this.film = data

    // })

  }

}
