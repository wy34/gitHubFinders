class GitHub {
    constructor() {
      this.client_id = "1c33535fd0588a963dd0";
      this.client_secret = "a503a4ced504fc853ac108fadcb1d8f381c85d27";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}