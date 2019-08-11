class GitHub {
  constructor() {
		this.client_id = '93a6ad3b02875338df87';
		this.client_secret = '67d98fcbc5c24cca126ed9c2f264c1795c1509fb';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}
	
	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		}
	}
}