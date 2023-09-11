<script>
import {invalidateAll} from "$app/navigation";
import {supabase} from "$lib/supabaseClient.ts";
import {fade} from "svelte/transition";
export let task;

async function updateTask(taskID, status){
    await supabase
        .from('tasks')
        .update({ done: status })
        .eq('id', taskID)
    await invalidateAll();
}
</script>

<div role="alert" class="rounded border-2 border-primary bg-white p-4 mb-5">
    <strong class="block font-medium text-primary"> {task.title} </strong>

    <p class="mt-2 text-sm text-primary">
        {task.description}
    </p>
    <input type="checkbox" checked="{task.done}" class="checkbox" on:click|stopPropagation={updateTask(task.id, !task.done)} />
</div>