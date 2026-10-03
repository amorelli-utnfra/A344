import { Component, OnInit, signal } from '@angular/core';
import { Cosa } from '../../models/cosa';
import { form, FormField, required } from '@angular/forms/signals';
import { Cosas as CosasService } from '../../servicios/cosas';
import { NgFor, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  imports: [FormField, NgIf, NgFor],
  selector: 'app-cosas-realtime',
  styleUrl: './cosas-realtime.css',
  templateUrl: './cosas-realtime.html',
})
export class CosasRealtime implements OnInit {
  
  cosaModel = signal<Cosa>({
    nombre: '',
  });

  cosaForm = form(this.cosaModel, (schemaPath) => {
    required(schemaPath.nombre, { message: 'El nombre es requerido' });
  });

  cosas = signal<Cosa[]>([]);
  private realtimeSubscription?: Subscription;


  constructor(private cosasService: CosasService) {
  }

  ngOnInit() {

    this.loadCosas();
  }

  ngOnDestroy() {
    this.realtimeSubscription?.unsubscribe();
  }

  private loadCosas() {
    this.realtimeSubscription = this.cosasService.getCosasRealtime().subscribe({
      next: (cosas) => this.cosas.set(cosas),
      error: (error) => console.error('Error de realtime:', error),
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const name = this.cosaModel().nombre.trim();
    if (!name) {
      return;
    }

    this.addCosa({ nombre: name });
  }

  addCosa(cosa: Cosa) {
    this.cosasService.addCosa(cosa).then(() => {
      this.cosaModel.set({ nombre: '' });
    });
  }
}
