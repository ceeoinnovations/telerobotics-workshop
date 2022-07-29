// return HTML for navigation section
export default function Navbar(about, items){
    return `
    <nav class="navbar">
        <ul>
           ${about==='project'? (
                `<li class="nav-title">
                    <a href="/hackathon-2021">← Go Back</a>
                </li>`
           ):(
            `
            `
            )}
        </ul>
    </nav>`
}
