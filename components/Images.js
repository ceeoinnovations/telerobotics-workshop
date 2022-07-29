// generate a proper url for images
export default function GetImageURL(image){
    // optimize image source
    if (image===""){ 
        return ''; // assets/images/project-placeholder.png
    }else if (image.startsWith("http") && image.includes("drive.google.com")){ // in case of google link, extract a file id from it and create a proper url for jpg, png images
        const url = new URL(image); 
        const urlParams = new URLSearchParams(url.search); // google form auto-generated link
        if (urlParams.get("id")){
            return `https://drive.google.com/uc?export=view&id=${urlParams.get("id")}`; 
        }else{
            const id = image.split('/').slice(-2)[0]; // other google links
            return `https://drive.google.com/uc?export=view&id=${id}`;
        }
    }else{
        return image; // in case of local path or other urls, return it as it is
    }
}

// get the first image's url
export function GetTeaserURL(images){
    const imageArray = images.split(', '); // convert comma separated string into an array 
    let teaser = imageArray[0]; // make the first image teaser
    teaser = GetImageURL(teaser);
    return teaser;
}

// convert comma separated string into an array 
export function GetImageArr(images){
    let imageArray = images.split(', ');
    return imageArray;
}

// generate an embed video code
export function GetEmbedVideo(video){
    if (video===""){
        return '';
    }else if (video.startsWith("http") && video.includes("drive.google.com")){ // in case of google link
        const url = new URL(video); 
        const urlParams = new URLSearchParams(url.search); // google form auto-generated link
        if (urlParams.get("id")){
            return `<iframe id="current" src="https://drive.google.com/file/d/${urlParams.get("id")}/preview" width="640" height="480"></iframe>`;
        }else{
            const id = video.split('/').slice(-2)[0]; // other google links
            return `<iframe id="current" src="https://drive.google.com/file/d/${id}/preview" width="640" height="480"></iframe>`;
        }
    }else{
        return video; // in case of embed code, return it as it is
    }

}

// get video url
export function GetVideoURL(video){
    if (video===""){
        return '';
    }else if (video.startsWith("http") && video.includes("drive.google.com")){
        const url = new URL(video); 
        const urlParams = new URLSearchParams(url.search); // google form auto-generated link
        if (urlParams.get("id")){
            return `https://drive.google.com/uc?id=${urlParams.get("id")}`;
        }else{
            const id = video.split('/').slice(-2)[0]; // other google links
            return `https://drive.google.com/uc?id=${id}`;
        }
    }else{
        return video; // in case of embed code, return it as it is
    }
}
