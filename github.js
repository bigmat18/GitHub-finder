class GitHub{
    constructor(){
        this.client_ID = '0c633109db06b1216a16'
        this.client_secret = '79087dff0a1b65958d9f4a4bf9fa349a5d64830f'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_ID}
            &client_secret=${this.client_secret}`)

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
            &sort=${this.repos_sort}client_id=${this.client_ID}
            &client_secret=${this.client_secret}`)

        const profile = await profileResponse.json()
        const repos = await repoResponse.json()

        return {
            profile,
            repos
        }
    }
}

