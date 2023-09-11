import {createClient} from "@supabase/supabase-js";
import {env} from "../environements/environement.prod";
export const supabase = createClient(env.supabaseURL, env.APIKey)