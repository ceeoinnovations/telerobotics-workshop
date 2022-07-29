import GetImageURL, {GetImageArr, GetEmbedVideo} from './Images.js';

// return HTML for about section
export default function About(about, themes){
    return `
    <section id="about" class="intro">
        <div class="text-wrapper">
            <h1 class="site-title">${about[0].name}</h1>
                ${ShowHomeImage(about[0].image)}
        </div>
    </section>
    <section id="filter">
        <div class="text-wrapper">
            <div class="row filter text-center">
                <input type="radio" name="project-filter" id="prj-all" value="all" checked>
                <label for="prj-all">All</label>
                
                ${ThemeList(themes)}
            </div>
        </div>    
    </section>`
}

export function ShowHomeImage(image){
    if (image==="") {
        return '';
    }else {
        return `<img src="${GetImageURL(image)}" div class="project-teaser">`;
    }
}

export function ThemeDropdown(themes){
    return `
    <div class="dropdown">
        <button onclick="showThemes()" class="dropbtn">Choose Theme ↓ </button>
        <div id="myDropdown" class="dropdown-content">
            ${ThemeItems(themes)}
        </div>
    </div>`
}

export function ShowThemes() {
    document.getElementById("myDropdown").classList.toggle("show");
}

export function ThemeItems(themes) {
    return themes.map(d=>`
        <a href="#home">${(d.name)}</a>
        `).join('');
}

export function ThemeList(themes){
    return themes.map(d=>`
        <input type="radio" name="project-filter" id="prj-${d.name}" value="${d.name}" >
        <label for="prj-${d.name}">${d.name}</label>
    `).join('');
}
