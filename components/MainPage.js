import Navbar from './Navbar.js';
import About, {ShowHomeImage} from './About.js';
import Footer from './Footer.js';
import Projects, {ProjectItems, handleProjectFilter} from './Projects.js';

// create mainpage (home)
export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${Navbar(data.about)}
        ${About(data.about, data.themes)}
        ${Projects(data.projects, data.themes, data.about)}
        ${Footer(data.about)}
    `
    handleProjectFilter(data);
}
