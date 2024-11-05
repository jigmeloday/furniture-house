import { Search, User, ShoppingCart } from 'lucide-react';

export const HEADER_LINK = [
    {
        id: 1,
        label: 'Shop',
        link: '/shop'
    },
    {
        id: 2,
        label: 'Store',
        link: '/store'
    },
    {
        id: 3,
        label: 'About',
        link: '/about-us'
    },
    {
        id: 4,
        label: 'Contact',
        link: '/contact-us'
    }
];

export const HEADER_ICONS = [

    {
        id: 'search',
        icon: Search,

    },
    {
        id: 'cart',
        icon: ShoppingCart,
        link: '/cart'
    },
    {
        id: 'user',
        icon: User,
        link: '/profile'
    },
];
