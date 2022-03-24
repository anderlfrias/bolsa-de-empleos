const PostJob = (job = {}) =>{
    let allJobs = GetJobs() || [];
    job.id = Date.now();

    allJobs = [
		...allJobs,
		job
	]

    localStorage.setItem('jobs', JSON.stringify(allJobs));
}

const GetJobsByCategoryId = (categoryId = "") =>{
    if (!categoryId){
        return;
    }

    let allJobs = GetJobs();
    return allJobs.filter(x => x.categoryId === categoryId);
}

const GetJobs = () =>{
    return JSON.parse(localStorage.getItem('jobs'));
}

// const DeleteJob = (id) =>{
//     if (!id){
//         return;
//     }

//     let oldJobs = GetJobs();
//     let newJobs = oldJobs.filter(x => x.id !== id);
//     console.log(newJobs)

//     localStorage.getItem('jobs', newJobs);
// }

export {
    PostJob,
    GetJobsByCategoryId,
    GetJobs,
    // DeleteJob
}