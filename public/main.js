import htmlStructure from '../components/shared/htmlStructure';
import header from '../components/shared/header';
import startSortingBtn from '../components/buttons/sortingBtn';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import '../styles/main.scss';
// trget expel buttons to move to voldys army

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  domEvents();
  formEvents(); // always load last
};
startApp();
