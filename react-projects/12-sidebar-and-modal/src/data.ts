export interface ISocial {
  id: number;
  url: string;
  icon: string;
}
export interface ILink {
  id: number;
  url: string;
  text: string;
  icon: string;
}

export const links: ILink[] = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: 'FaHome',
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: 'FaUserFriends',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: 'FaFolderOpen',
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: 'FaCalendarAlt',
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: 'FaWpforms',
  },
];

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
    url: 'https://www.behance.net',
    icon: 'FaBehance',
  },
  {
    id: 5,
    url: 'https://www.sketch.com',
    icon: 'FaSketch',
  },
];