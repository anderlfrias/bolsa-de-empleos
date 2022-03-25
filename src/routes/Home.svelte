<script>
	import { onMount } from "svelte";
    import Layout from "../components/Layout.svelte";
	import Table from "../components/Table.svelte";
	import { PostJob, GetJobs, GetJobsByCategoryId } from "../utilities/Job";
	import {push} from "svelte-spa-router";

	let currentUser = JSON.parse(localStorage.getItem('currentUser'));
	let jobs = JSON.parse(localStorage.getItem('jobs'));

	onMount(() =>{
		console.log(currentUser);
		console.log(jobs);

		if(currentUser === null){
			push('/login');
		}
	})
</script>
<svelte:head>
    <title>Home</title>
</svelte:head>
<Layout>
	<div class="container-fluid flex-grow-1 container-p-y">
		<!-- <h4 class="fw-bold py-3"><span class="text-muted fw-light">Home/</span> Horizontal Layouts</h4> -->
		<div class="col-md-12 mb-4">
			<div class="card p-3">
				<div class="row justify-content-between">
					<div class="row col-md-6">
						<div class="input-group input-group-merge input-search">
							<span class="input-group-text" id="basic-addon-search31"><i class="bx bx-search"></i></span>
							<input type="text" class="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="basic-addon-search31">
							<button type="button" class="btn btn-primary button-search">Search</button>
						</div>
					</div>
					<div class="row col-md-2 mx-2">
						<button on:click={() => push('/jobs/new-job')} type="button" class="btn btn-success button-search"><i class="fa-solid fa-bullhorn"></i> Post a Job</button>
					</div>
				</div>
			</div>
		</div>

		<h4 class="mb-4 doc-page-title">Recents Jobs</h4>

		<Table
			category = "Desing"
			jobs = {jobs}
		/>
	</div>
</Layout>