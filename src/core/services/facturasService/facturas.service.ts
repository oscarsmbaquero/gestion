import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../enviroment/environment';
import { map } from 'rxjs/operators';
import { IFactura } from '../../models/facturas-model';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  private favoriteCars: string[] = [];
  private favoriteCarsSubject = new BehaviorSubject<string[]>([]);


  constructor(private httpClient: HttpClient) { }

  public getfacturas():Observable<IFactura[]> {
    return this.httpClient.get<IFactura[]>(`${environment.apiUrl}facturas`);
  }

  public addFacturas(body: IFactura): Observable<IFactura> {
    console.log(body,'body');
    
    const formData = new FormData();
    formData.append('imagen', body.image);
    //formData.append('tipo', body.tipo);
    return this.httpClient.post<IFactura>(
      `${environment.apiUrl}facturas`,
      formData
    );
  } 
  
}
