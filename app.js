const searchUser = document.getElementById('searchUser')
const github = new GitHub()
const ui = new UI()

searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value
    
    if (userText !== ''){
        github.getUser(userText)
         .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User not found', 'alert alert-danger')
            }else{
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }

         })
         
    }else{
        ui.clearProfile()
    }
})
