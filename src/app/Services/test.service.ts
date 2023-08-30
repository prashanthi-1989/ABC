import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  createAdminHealthTips(data: any) {
    return this.http.post<any>('/tips/addHealthTipByAdmin', data).pipe(
      map((data: any) => {
        // this.setLocals(data.user, data.token, data.role);
        return data;
      })
    );
  }
}
