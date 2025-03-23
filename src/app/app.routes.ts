import { Routes } from '@angular/router';
import { FacturasComponent } from '../pages/facturas/facturas.component';
import { ChatboxComponent } from '../pages/chatbox/chatbox.component';

export const routes: Routes = [
    {
        path: "facturas",//raiz de la app
        pathMatch:'full',//coincida nombre exacto
        component: FacturasComponent
      },
      {
        path: 'chatbox',
        pathMatch:'full',//coincida nombre exacto,
        component: ChatboxComponent
      },
      { 
        path: '**', 
        redirectTo: '' 
      }
];
