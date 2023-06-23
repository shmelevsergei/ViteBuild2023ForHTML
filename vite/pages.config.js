import { resolve } from "path";

const pages = [
   { name: 'index', path: resolve(__dirname, '../index.html') },
   { name: 'contacts', path: resolve(__dirname, '../pages/contacts.html') },
];

export default pages;