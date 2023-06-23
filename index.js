import './src/css/style.scss';
import { menuMobileLInkOpen, openCloseMenu, toggleClassLink } from './src/js/dropDownMenu';
import { menuFooter } from './src/js/menuFooter';
import { fixedHeader } from './src/js/scrollPage';
import { showSearch } from './src/js/showSearch';

toggleClassLink();
showSearch();
fixedHeader();
menuMobileLInkOpen();
openCloseMenu();
menuFooter();
