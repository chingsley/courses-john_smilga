export interface ILink {
  id: number;
  url: string;
  text: string;
}
export const links: ILink[] = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export interface ISocial {
  id: number;
  url: string;
  icon: string;
}
export const social: ISocial[] = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: 'FaFacebook',
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: 'FaTwitter',
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: 'FaLinkedin',
  },
  {
    id: 4,
    url: 'https://www.behance.com',
    icon: 'FaBehance',
  },
];
