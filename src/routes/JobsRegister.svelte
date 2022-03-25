<script>
	import { onMount } from "svelte";
    import Layout from "../components/Layout.svelte";
    import { PostJob } from "../utilities/Job";

    let job = {};
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const saveJob = () =>{
        console.log(job);
        job.ownerId = currentUser.id;
        PostJob(job);
    }
</script>
<Layout>
    <div class="container-fluid flex-grow-1 container-p-y">
        <!-- Basic with Icons -->
        <div class="col-xxl">
            <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Post a New Job</h5> <small class="text-muted float-end">Details about the job</small>
            </div>
            <div class="card-body">
                <form on:submit|preventDefault={saveJob}>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="basic-icon-default-fullname">Position</label>
                        <div class="col-sm-10">
                        <div class="input-group input-group-merge">
                            <span id="basic-icon-default-fullname2" class="input-group-text"><i class="bx bx-user"></i></span>
                            <input type="text" class="form-control" id="basic-icon-default-fullname" bind:value={job.position} placeholder="ex. Web Developer, tester, ..." aria-label="John Doe" aria-describedby="basic-icon-default-fullname2" />
                        </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="basic-icon-default-company">Company</label>
                        <div class="col-sm-10">
                        <div class="input-group input-group-merge">
                            <span id="basic-icon-default-company2" class="input-group-text"><i class="bx bx-buildings"></i></span>
                            <input type="text" id="basic-icon-default-company" class="form-control" bind:value={job.company} placeholder="ex. Claro RD, Casa de Campo, ..." aria-label="ACME Inc." aria-describedby="basic-icon-default-company2" />
                        </div>
                        </div>
                    </div>
                    <!-- <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="basic-icon-default-email">Email</label>
                        <div class="col-sm-10">
                        <div class="input-group input-group-merge">
                            <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                            <input type="text" id="basic-icon-default-email" class="form-control" placeholder="john.doe" aria-label="john.doe" aria-describedby="basic-icon-default-email2" />
                            <span id="basic-icon-default-email2" class="input-group-text">@example.com</span>
                        </div>
                        <div class="form-text"> You can use letters, numbers & periods </div>
                        </div>
                    </div> -->
                    <div class="row mb-3">
                        <label class="col-sm-2 form-label" for="basic-icon-default-phone">Location</label>
                        <div class="col-sm-10">
                        <div class="input-group input-group-merge">
                            <span id="basic-icon-default-phone2" class="input-group-text"><i class='bx bx-current-location'></i></span>
                            <input type="text" id="basic-icon-default-phone" class="form-control phone-mask" bind:value={job.location} placeholder="ex. Santo Domingo, Santiago ..." aria-label="658 799 8941" aria-describedby="basic-icon-default-phone2" />
                        </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 form-label" for="basic-icon-default-category">Category</label>
                        <div class="col-sm-10">
                        <div class="input-group input-group-merge">
                            <span id="basic-icon-default-category2" class="input-group-text"><i class='bx bxs-category-alt' ></i></span>
                            <input type="text" id="basic-icon-default-category" class="form-control" bind:value={job.category} placeholder="ex. Desing, Programming ..." aria-label="658 799 8941" aria-describedby="basic-icon-default-phone2" />
                        </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 form-label" for="basic-icon-default-message">Description</label>
                        <div class="col-sm-10">
                        <div class="input-group input-group-merge">
                            <span id="basic-icon-default-message2" class="input-group-text"><i class="bx bx-comment"></i></span>
                            <textarea id="basic-icon-default-message" class="form-control" bind:value={job.description} placeholder="Job overview" aria-label="Hi, Do you have a moment to talk Joe?" aria-describedby="basic-icon-default-message2"></textarea>
                        </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary"><i class='bx bxs-send' ></i> Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</Layout>