import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Publish',
    icon: 'fa fa-fire',
    link: '/pages/publish',
    home: true,
  },
  {
    title: 'Asesoria Principiantes',
    icon: 'nb-compose',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'chat',
    icon: 'ion-paper-airplane',
    link: '/pages/chat'
  },{
    title: 'Tutoriales',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Eventos',
    icon: 'nb-edit',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Gane $CA tokens',
    icon: 'nb-audio',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'Nosotros',
    icon: 'nb-grid-a',
    link: '/pages/dashboard',
    home: true,
  },{
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },{
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },{
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      }
    ],
  },{
    title: 'News',
    icon: 'nb-layout-sidebar-right',
    children: [
      {
        title: 'List News',
        link: '/pages/news/news-list',
      },
    ],
  },
  {
    title: 'Advisory',
    icon: 'nb-layout-sidebar-right',
    children: [
      {
        title: 'List advisory',
        link: '/pages/advisories/list',
      },
      {
        title: 'Tab advisory',
        link: '/pages/advisories/tab',
      }
    ],
  },{
    title: 'Markets',
    icon: 'nb-title',
    children: [
      {
        title: 'List Markets',
        link: '/pages/markets/list'
      },
    ],
  },{
    title: 'Coins',
    icon: 'nb-plus-circled',
    children: [
      {
        title: 'View Coins',
        link: '/pages/coins/view'
      },
    ],
  },{
    title: 'Signals',
    icon: 'nb-paper-plane',
    children: [
      {
        title: 'List Signals',
        link: '/pages/signals/signals-list',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  }
];
