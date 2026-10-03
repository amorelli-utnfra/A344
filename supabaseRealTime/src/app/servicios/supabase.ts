import { Service } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Service()
export class Supabase {

    private supabase: SupabaseClient
    private realtimeClient: any

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabasePublishableKey)
        this.realtimeClient = this.supabase.realtime
    }

    getCosasRealtime() {
        return this.realtimeClient
            .on('*', (payload: any) => {
                console.log('Change received!', payload)
            })
            .subscribe()
    }

}
