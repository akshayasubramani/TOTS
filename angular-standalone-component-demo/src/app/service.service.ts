
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url='../assets/book.json'

  constructor(private httpClient:HttpClient) { }

  getBooks(){
    
    return this.httpClient.get(this.url)
  }
}
