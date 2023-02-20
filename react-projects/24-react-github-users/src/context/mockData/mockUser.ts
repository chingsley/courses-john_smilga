export interface IGithubUser {
  login?: string;
  id?: number;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin?: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string | null;
  hireable?: string | null;
  bio?: string;
  twitter_username?: string;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
}


const mockUser: IGithubUser = {
  login: 'john-smilga',
  id: 42133389,
  node_id: 'MDQ6VXNlcjQyMTMzMzg5',
  avatar_url: 'https://avatars3.githubusercontent.com/u/42133389?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/john-smilga',
  html_url: 'https://github.com/john-smilga',
  followers_url: 'https://api.github.com/users/john-smilga/followers',
  following_url:
    'https://api.github.com/users/john-smilga/following{/other_user}',
  gists_url: 'https://api.github.com/users/john-smilga/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/john-smilga/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/john-smilga/subscriptions',
  organizations_url: 'https://api.github.com/users/john-smilga/orgs',
  repos_url: 'https://api.github.com/users/john-smilga/repos',
  events_url: 'https://api.github.com/users/john-smilga/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/john-smilga/received_events',
  type: 'User',
  site_admin: false,
  name: 'John Smilga',
  company: 'Coding Addict',
  blog: 'www.johnsmilga.com',
  location: 'Los Angeles',
  email: null,
  hireable: null,
  bio: 'Creator of Coding Addict',
  twitter_username: 'john_smilga',
  public_repos: 152,
  public_gists: 0,
  followers: 1495,
  following: 0,
  created_at: '2018-08-06T06:48:23Z',
  updated_at: '2020-07-08T05:01:32Z',
};

export default mockUser;