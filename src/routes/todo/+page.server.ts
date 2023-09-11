import {supabase} from "$lib/supabaseClient";
export async function load() {
    let { data, error } = await supabase
        .from('tasks')
        .select('*')
    return {data,error}
}