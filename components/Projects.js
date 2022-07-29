import GetImageURL, {GetTeaserURL} from './Images.js';

// return HTML for project section
export default function Projects(projects, themes, about){
    return `
    <section id="content">
        <div id="theme" class="text-wrapper theme-info">
        ${DefaultInfo(projects)}
        </div>    
        <div id="projects" class="wrapper">
            <div class="project-list">
                ${SubmitButton(about)}
                ${ProjectItems(projects)}
                </div>
            </div>
        </div>
    </section>`;
}

// show number of projects
export function DefaultInfo(projects){
    let projectNumber = projects.length;
    return `
    <p class="project-number">${projectNumber} submitted</p>
    `
}

// add a submit button
export function SubmitButton(about){
    return `
        <a href="${about[0].form}" target="_blank" class="project-box">
            <img src="assets/images/add-placeholder.png" div class="teaser">
            <div class="info">
                <div class="project-overview">
                    <div class="project-title">
                        <strong>Submit → </strong>
                    </div>
                </div>
            </div>
        </a>
    `
}

// return HTML for project items
export function ProjectItems(projects){
    return projects.map(d=>`
        
        <a href="?project=${d.title}" class="project-box">
            <img src="${(GetTeaserURL(d.images))}" div class="teaser">
            <div class="info">
                <div class="project-overview">
                    <div class="project-theme">
                        ${d.theme}
                    </div>
                    <div class="project-title">
                        <strong>${d.title}</strong>
                    </div>
                    <div class="project-subtitle">
                        ${d.subtitle}
                    </div>
                    <div class="project-authors">
                        By ${d.authors}
                    </div>
                </div>    
            </div>
        </a> 
    `).join('');
}

// filter projects by tags
export function handleProjectFilter(data){
    let conds = document.querySelectorAll('.filter input[name="project-filter"]');
    conds.forEach(cond=>cond.addEventListener('change', function(event){
        let checked = event.target.value; 
        console.log(checked);
        if (checked==='all'){
            document.querySelector('.theme-info').innerHTML = DefaultInfo(data.projects);
            document.querySelector('.project-list').innerHTML = SubmitButton(data.about) + ProjectItems(data.projects);
        }else{
            checked = checked.replace(/ /g, "").toLowerCase();
            let filteredProjects = data.projects.filter(d=>{
                // return d.id.some(id=>checked === checked.toLowerCase());
                d.id = d.theme.replace(/ /g, "").toLowerCase();
                return d.id === checked;
            });
            let checkedTheme = data.themes.filter(d=>{
                d.id = d.name.replace(/ /g, "").toLowerCase();
                return d.id === checked;
            });
            document.querySelector('.theme-info').innerHTML = UpdateThemeInfo(filteredProjects, checkedTheme);
            document.querySelector('.project-list').innerHTML = SubmitButton(data.about) + ProjectItems(filteredProjects);
        }
    }));
}

// show theme information
export function UpdateThemeInfo(projects, theme){
    let projectNumber = projects.length;
    return `
        <div class="theme-container">
        <h1 class="title">${theme[0].name} </h1>
        <p>${theme[0].description}</p>
        <a href="${theme[0].buttonlink}" target="_blank">
            <button class="button" style="margin-top: 30px; margin-bottom: 50px;">${theme[0].buttonlabel}</button>
        </a>
        ${(ResourcesButton(theme[0].resources))}
        </div>
        
        <p class="project-number">${projectNumber} submitted</p>
    `
}

// add a button for resources
export function ResourcesButton(resources) {
    if (resources==="") {
        return '';
    }else {
    return `
    <a href="${resources}" target="_blank">
        <button class="button" style="margin-top: 30px; margin-bottom: 50px;">Resources</button>
    </a>
    `
    }
}