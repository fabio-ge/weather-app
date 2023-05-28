import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  setItem(name: string, value: string) {
    localStorage.setItem(name, value);
  }

  getItem(name: string): string | null {
    return localStorage.getItem(name);
  }

  clear(): void {
    localStorage.clear();
  }
}
