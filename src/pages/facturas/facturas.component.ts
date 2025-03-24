import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng

import { TabViewModule } from 'primeng/tabview';
//components
import { ListadoComponent } from './components/listado/listado.component';
import { AnadirComponent } from './components/anadir/anadir.component';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [TabViewModule, CommonModule, AnadirComponent, AnadirComponent, ListadoComponent],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})
export class FacturasComponent implements OnInit {
  ngOnInit() {
}

}
