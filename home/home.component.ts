
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Subscription } from 'rxjs';
import { APIResponse, Film } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public sort: string | undefined;

  public films: Array<Film> | undefined

  public total: Number

  public page: number = 1

  public isLoading: boolean = true

  public search_name: String


  public Images: Array<String>

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {


  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    console.log("destroyed")
  }

  ngOnInit(): void {


    // this.store.collection('favoris').snapshotChanges().subscribe((response) => {
    //   console.log('reponse ', response);
    // })

    this.httpService.getFilmFromServer().then((data: any) => {

      this.isLoading = false


      this.films = data.results


      this.total = this.films.length
      for (let i = 0; i < this.films.length; i++) {
        this.httpService.getImage(this.films[i].poster_path).then((err: any) => (this.films[i].poster_path = err.url))


      }



      console.log(this.films)




    })









  }







  navigate_about(id: string): void {
    // this.router.navigate(['about/' + id]);
    console.log(this.httpService.get_favorite_films())
  }

  add_favorite(film: Film): void {

    // console.log({ film })
    this.httpService.add_film_to_favorite(film)

  }



  OnSubmit() {
    this.httpService.getFilms(this.search_name, 1).then((data) => (this.films = data.results)).then(() => {

      for (let i = 0; i < this.films.length; i++) {
        this.httpService.getImage(this.films[i].poster_path).then((err: any) => (this.films[i].poster_path = err.url))


      }

    })



  }

}
