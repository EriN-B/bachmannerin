import {supabase} from "../supabaseClient";
export async function load() {
    let { data, error } = await supabase
        .from('tasks')
        .select('*')
    return {data,error}
}