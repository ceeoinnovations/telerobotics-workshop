import GetImageURL, {GetImageArr, GetEmbedVideo, GetVideoURL, GetTeaserURL} from './Images.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Projects, {ProjectItems} from './Projects.js';
const opacity = 0.6;

// create project detail page
export default function ProjectPage(project, projects){
    // get projects that belong to the same theme of the current project
    let filter = project.theme;
    let filterId = filter.replace(/ /g, "").toLowerCase();
    let filteredProjects = projects.filter(d=>{
        d.id = d.theme.replace(/ /g, "").toLowerCase();
        return d.id === filterId;
    });
    filteredProjects = filteredProjects.filter(d=>{
        return d.title !== project.title; // remove the current project
    }); 
    document.querySelector('.container').innerHTML = `
        ${Navbar('project')}
        ${ProjectDetail(project)}
        ${RelatedProjects(filter, filteredProjects)}
    `
    SetLightgallery(GetMediaArr(project.video, project.images));
}

// return HTML for project content section
export function ProjectDetail(d){
    return `
    <section id="content" class="project-intro">
        <div class="content-wrapper">
            <br>
            <div class="row">
            <div class="col-6">
                ${Lightgallery()}
            </div>
            <div class="col-6">
                <div class="project-info">
                    <h1 class="title">${d.title}</h1>
                    <div class="project-subtitle">
                        ${d.subtitle}
                    </div>
                    <p class="project-desc">
                        ${d.desc}
                    </p>
                    ${CodeSnippet(d.code)}
                    ${CustomButton(d.url, d.urlLabel)}
                    ${FilesButton(d.files)}
                    <div class="project-tags" style="color: #a7a6a6;">
                        By ${d.authors}
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}

// return HTML to add custom button
export function CustomButton(url, urlLabel){
    if (url==="") {
        return '';
    }else {
        return `
        <a href="${url}" target="_blank">
            <button class="button" style="margin-top: 30px; margin-bottom: 50px;">${urlLabel}</button>
        </a>
        `;
    }
}

// return HTML to add download button
export function FilesButton(files){
    if (files==="") {
        return '';
    }else {
        return `
        <a href="${files}" target="_blank">
            <button class="button" style="margin-top: 30px; margin-bottom: 50px;">Download Files</button>
        </a>
        `;
    }
}

// return HTML to add code section
export function CodeSnippet(code){
    if (code==="") {
        return '';
    }else {
        return `
        <h4>Code</h4>
            <pre><code class="python hljs language-python">${code}</code></pre>
        `;
    }
}

// for custom gallery - unused
export function Gallery(video, images){
    return `
    <div class="gallery">
        <div class="maxi">
        ${ShowMaxi(video, images)}
        </div>
        <div class="mini">
        ${GetEmbedVideo(video)}
        ${ImageItems(images)}
        </div>
    </div>
    `
}

// add lightgallery
export function Lightgallery() {
    return `
        <div id="inline-gallery-container" class="inline-gallery-container"></div>
    `
}

// set up lightgallery
export function SetLightgallery(mediaArr) {
    const $lgContainer = document.getElementById("inline-gallery-container");
    const inlineGallery = lightGallery($lgContainer, {
        container: $lgContainer,
        dynamic: true,
        // Turn off hash plugin in case if you are using it
        // as we don't want to change the url on slide change
        hash: false,
        // Do not allow users to close the gallery
        closable: false,
        // Add maximize icon to enlarge the gallery
        showMaximizeIcon: false,
        // Append caption inside the slide item
        // to apply some animation for the captions (Optional)
        // appendSubHtmlTo: ".lg-item",
        // Delay slide transition to complete captions animations
        // before navigating to different slides (Optional)
        // You can find caption animation demo on the captions demo page
        slideDelay: 200,
        plugins: [lgZoom, lgThumbnail, lgVideo],
        dynamicEl: mediaArr,
        iframe: true,
        // Completely optional
        thumbWidth: 60,
        thumbHeight: "60px",
        // thumbMargin: 4
    });

    setTimeout(() => {
        inlineGallery.openGallery();
    }, 200);
}

// add images
export function ImageItems(images){
    let arr = GetImageArr(images);

    return arr.map(d=>`
        <img src="${GetImageURL(d)}">
        `).join('');
}

// create a video thumbnail image - unused
export function capture(video, scaleFactor) {
	if(scaleFactor == null){
		scaleFactor = 1;
	}
	var w = video.videoWidth * scaleFactor;
	var h = video.videoHeight * scaleFactor;
	var canvas = document.createElement('canvas');
		canvas.width  = w;
	    canvas.height = h;
	var ctx = canvas.getContext('2d');
		ctx.drawImage(video, 0, 0, w, h);
    return canvas;
}

// for custom gallery - unused
export function GetMediaArr(videoString, imageString){
    let mediaString;
    let mediaArr = [];

    mediaString = imageString;

    // remove space
    mediaString = mediaString.replace(/\s/g, '');
    mediaArr = mediaString.split(',');
    mediaArr = mediaArr.map(d=> {
        let obj = {
            src: GetImageURL(d),
            thumb: GetImageURL(d)
        }
        return obj;
    })

    if (videoString != "") {
        let obj = {
            video: {
                "source": [
                    {
                        "src": GetVideoURL(videoString), 
                        "type":"video/mp4"
                    }
                ], 
                "attributes": {
                    "preload": false, 
                    "controls": true
                }
            },
            thumb: "assets/images/video-placeholder.png"
        };

        // add video element at the beginning of mediaArr
        mediaArr.unshift(obj);
    }
    return mediaArr;
}

// for custom gallery - unused
export function ShowMaxi(video, images){
    if (video==="") {
        return `<img id="current" src="${(GetTeaserURL(images))}"></img>`;
    } else {
        return `${GetEmbedVideo(video)}`;   
    }
}

// for custom gallery - unused
export function SetGallery(){
    const current = document.querySelector('#current');
    const mini = document.querySelectorAll('.mini img, .mini iframe');
    console.log(mini);

    // Set first image opacity
    mini[0].style.opacity = opacity;

    mini.forEach(item => item.addEventListener('click', ImgClick));

    function ImgClick(e) {
        // Reset the opacity
        console.log('mini clicked');
        mini.forEach(
            item => (item.style.opacity = 1));
        
        console.log('target:' + e.target.src);
        // Change current image to src of clicked image
        current.src = e.target.src;
        
        // Change the opacity to opacity var
        e.target.style.opacity = opacity;
    }
}

// display related projects
export function RelatedProjects(filter, projects){
    console.log(projects[0]);
    if (projects[0] == undefined){
        return "";
    }else{
    return `
    <section id="related-projects" class="related-projects">
        <div class="content-wrapper">
        <p class="more-projects">You Might Also Like</p>
            <div class="project-list">
                ${ProjectItems(projects)}
            </div>
        </div>
    </section>
    `
    }
}