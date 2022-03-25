<script>
import { onMount } from "svelte";


    export let jobs = [];

    onMount(()=>{
        // console.log(jobs);
    })
</script>
<main>
        <!-- content here -->
        <div class="card">
            <!-- <h5 class="card-header">{category}</h5> -->
            <div class="table-responsive text-nowrap">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Locaton</th>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Category</th>
                            <!-- <th>Actions</th> -->
                        </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">

                        {#if jobs}
                            {#each jobs as item}
                                <tr>
                                    <td>{item.location}</td>
                                    <td>{item.position}</td>
                                    <td>{item.company}</td>
                                    <td>{item.category}</td>
                                </tr>
                            {/each}
                        {/if}
                    </tbody>
                </table>
            </div>
        </div>
</main>