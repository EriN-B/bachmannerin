<script>
    import {invalidate, invalidateAll} from "$app/navigation";
    import Task from "$lib/component/Task.svelte";

    export let data;

    $: tasks = data.data
</script>

<body class="bg-base-200 min-h-screen">
<div class="flex w-full mt-5 border-primary min-h-screen">
    <div class="grid h-20 flex-grow rounded-box mr-5 ml-5">
        <ul>
            {#each tasks as task}
                {#if !task.done}
                <li>
                    <Task task={task}></Task>
                </li>
                {/if}
            {/each}
        </ul>
    </div>
    <div class="grid h-20 flex-grow rounded-box mr-5">
        <ul>
            {#each tasks as task}
                {#if task.done}
                    <li>
                        <Task task={task}></Task>
                    </li>
                {/if}
            {/each}
        </ul>
    </div>
</div>
</body>