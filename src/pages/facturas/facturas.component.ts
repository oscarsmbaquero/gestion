import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { IFactura } from '../../core/models/facturas-model';
import { FacturasService } from '../../core/services/facturasService/facturas.service';
//primeng
import { AvatarModule } from 'primeng/avatar';
import { TabsModule } from 'primeng/tabs';
import { BadgeModule } from 'primeng/badge';
//components
import { ListadoComponent } from './components/listado/listado.component';
import { AnadirComponent } from './components/anadir/anadir.component';
import { FacturasErroneasComponent } from './components/facturas-erroneas/facturas-erroneas.component';
import { GraficasComponent } from './components/graficas/graficas.component';


@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [TabsModule, CommonModule, AnadirComponent, ListadoComponent, AvatarModule, BadgeModule, FacturasErroneasComponent, GraficasComponent],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})
export class FacturasComponent implements OnInit {

  private facturasSubject: BehaviorSubject<IFactura[]> = new BehaviorSubject<IFactura[]>([]);
    facturas! : any[]
    facturasIncompletas! : any[]
    loading = false;
    erroFacturasCount = 0;

    constructor(private facturasService: FacturasService){
    
    }

  ngOnInit() {    
    this.loading = true;
    this.facturasService.getfacturas().subscribe((element) => {
      // Agregar la propiedad "incomplete" si algún campo tiene "No encontrado"
      const facturasActualizadas = element.map((factura: any) => {
        const hasNoEncontrado = Object.values(factura).some(value => value === "No encontrado");
        if (hasNoEncontrado) {
          this.erroFacturasCount++; // Incrementa el contador si la factura tiene "No encontrado"
        }        
        return { ...factura, incomplete: hasNoEncontrado };
      });
  
      this.facturasSubject.next(facturasActualizadas);
      this.facturas = facturasActualizadas;
      this.facturasIncompletas = this.facturas.filter((element) => element.incomplete);
      this.loading = false;
    });
  }

  }
 




