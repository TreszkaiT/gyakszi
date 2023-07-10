import { Injectable } from '@angular/core';

interface Data {
  [key: string]: string;
  appTitle: string
  api: string
  apiUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  data: Data = {
    appTitle: 'Gykorló api',
    api: 'api',
    apiUrl: 'https://localhost:8080'
  }

  constructor() { }

  get(key: keyof Data){
    return this.data[key] || null;
  }

  set(key: keyof Data, value: string){
    this.data[key] = value;
  }
}
