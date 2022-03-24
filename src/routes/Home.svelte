<script>
	import { onMount } from "svelte";
    import Layout from "../components/Layout.svelte";
	import Table from "../components/Table.svelte";
	import { PostJob, GetJobs, GetJobsByCategoryId } from "../utilities/Job";

	onMount(() =>{
	})

</script>
<Layout>
	<div class="container-fluid flex-grow-1 container-p-y">
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
						<button type="button" class="btn btn-success button-search"><i class="fa-solid fa-bullhorn"></i> Post a Job</button>
					</div>
				</div>
			</div>
		</div>

		<h2 class="mb-4 doc-page-title">Recents Jobs</h2>

		<!-- <Table
			category = "Desing"
			jobs = {jobs}
		/> -->
	</div>
</Layout>