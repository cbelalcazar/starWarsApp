import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  api:string = 'https://swapi.co/api/films/?format=json';
  films:any = [];
  objFilm:any = {};
  arrayCharacters: any = [];
  starships:any = [];
  verNaves:boolean = false;
  objCharacter:any = {};
  constructor(private http:Http){
    this.getPostData();  
  }
  getPost() {
    return this.http.get(this.api).map(response => response.json());
  }
  getPostData(){
    return this.getPost().subscribe(res => {
      console.log(res);
      this.films = res.results;
    });
  }

  setObject(film){
    this.objFilm = {};
    this.arrayCharacters = [];
    this.verNaves = false;
    this.objFilm = film;
    this.objFilm.characters.forEach(element => {
      this.http.get(element).map(response => response.json()).subscribe(res => {
        // console.log(res);
        this.arrayCharacters.push(res);
      });
    });
  }

  getNaves(character){
    this.starships = [];
    this.objCharacter = {};
    this.objCharacter = character;
    character.starships.forEach(element => {
      this.http.get(element).map(response => response.json()).subscribe(res => {
        this.starships.push(res);
        console.log('naves');
        console.log(res);
      });
    });
    this.verNaves = true;
  }
}
