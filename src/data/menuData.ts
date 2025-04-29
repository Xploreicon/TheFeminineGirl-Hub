export interface IMenuData {
  name: string;
  url: string;
  submenu?: IMenuData[];
}
const menuData: IMenuData[] = [
  { name: 'HOME', url: '/' },
  { name: 'SHOP', url: '/shop' },
  { name: 'COMPARE', url: '/COMPARE' },
  {
    name: 'CATEGORY',
    url: '/category',
    submenu: [
      { name: 'personalcare', url: '/category/personalcare' },
      { name: 'painrelief', url: '/category/painrelief' },
      { name: 'sheetmasks', url: '/category/sheetmasks' },
      { name: 'bedroom', url: '/category/bedroom' },
    ],
  },
  { name: 'ABOUT US', url: '/about' },
];
export default menuData;
