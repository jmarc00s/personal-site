import { GithubRepo, Repo } from '@/types';

const GITHUB_API = 'https://api.github.com';

const sanitizeRepos = (repos: GithubRepo[]): Repo[] =>
  repos.map(({ id, name, description, language, topics, html_url }) => ({
    name,
    description,
    language,
    topics,
    html_url,
    id,
  }));

export const getRepos = async (): Promise<Repo[]> => {
  const response = await fetch(
    `${GITHUB_API}/users/jmarc00s/repos?sort=created&per_page=3`,
    {
      cache: 'force-cache',
    },
  );

  const repos = await response.json();

  return sanitizeRepos(repos);
};
