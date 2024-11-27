import { ProfileSideNav } from '../model/profile.model';

export const PROFILE_SIDE_NAV: ProfileSideNav[] = [
  {
    id: 'profile',
    label: 'My Profile',
  },
  {
    id: 'order',
    label: 'My Order',
  },
  {
    id: 'wishlist',
    label: 'My Whislist',
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    link: '/',
  },
  {
    id: 'terms',
    label: 'Terms and Condition',
    link: '/',
  },
];
