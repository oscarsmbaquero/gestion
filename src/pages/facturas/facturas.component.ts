import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng

import { AvatarModule } from 'primeng/avatar';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
//components
import { ListadoComponent } from './components/listado/listado.component';
import { AnadirComponent } from './components/anadir/anadir.component';


@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [TabsModule, CommonModule, AnadirComponent, ListadoComponent, AvatarModule, BadgeModule],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})
export class FacturasComponent  {

  

  }
 




