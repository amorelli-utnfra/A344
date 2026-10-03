import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { Cosa } from '../../models/cosa';
import { Cosas as CosasService } from '../../servicios/cosas';

@Component({
  imports: [CommonModule, FormField],
  selector: 'app-cosas',
  styleUrl: './cosas.css',
  templateUrl: './cosas.html',
})
export class Cosas implements OnInit {
  cosaModel = signal<Cosa>({
    nombre: '',
  });

  cosaForm = form(this.cosaModel, (schemaPath) => {
    required(schemaPath.nombre, { message: 'El nombre es requerido' });
  });

  cosas = signal<Cosa[]>([]);

  private cosasService = new CosasService();

  constructor() {
  }

  ngOnInit() {
    this.loadCosas();
  }

  private loadCosas() {
    this.cosasService.getCosas().then(result => {
      this.cosas.set(result.data || []);
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
      this.loadCosas();
    });
  }
}
