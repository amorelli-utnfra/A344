import { Service } from '@angular/core';
import { environment } from '../../environments/environment';
import { Cosa } from '../models/cosa';
import { SupabaseClient, createClient} from '@supabase/supabase-js';
import { Observable } from 'rxjs';

@Service()
export class Cosas {
    private supabase: SupabaseClient
  private readonly tableName = 'Cosas';

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabasePublishableKey);
    }

    getCosas() {
        return this.supabase.from(this.tableName).select('*');
    }

    addCosa(cosa: Cosa) {
        return this.supabase.from(this.tableName).insert([cosa]);
    }

    getCosasRealtime() {
      return new Observable<Cosa[]>((observer) => {
        const emitCosas = async () => {
          const { data, error } = await this.getCosas();
          if (error) {
            observer.error(error);
            return;
          }
          observer.next(data || []);
        };

        void emitCosas();

        const channel = this.supabase
          .channel('cosas-realtime')
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: this.tableName },
            () => {
              void emitCosas();
            }
          )
          .subscribe((status) => {
            if (status === 'CHANNEL_ERROR') {
              observer.error(new Error('No se pudo suscribir al canal realtime.'));
            }
          });

        return () => {
          void this.supabase.removeChannel(channel);
        };
      });
    }
  }
    
