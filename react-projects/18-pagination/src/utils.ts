export interface IFollower {
  id: string;
  avatar_url: string;
  html_url: string;
  login: string;
}

const paginate = (followers: IFollower[]) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers: IFollower[][] = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;