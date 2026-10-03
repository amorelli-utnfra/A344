import { Service } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js/dist/index.cjs';
import { environment } from '../../environments/environment';

@Service()
export class Auth {
    private supabase: SupabaseClient

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabasePublishableKey)
    }

    signIn(email: string, password: string) {
        return this.supabase.auth.signInWithPassword({ email, password });
    }

    signUp(email: string, password: string) {
        return this.supabase.auth.signUp({ email, password });
    }

    signOut() {
        return this.supabase.auth.signOut()
    }

    getUser() {
        return this.supabase.auth.getUser();
    }

    getUsers() {
        return this.supabase.auth.admin.listUsers();
    }

}
