
// side-menu
function handleCollapseSideMenu(open){
  document.getElementById('side-menu').style.width = open ? "350px" : "0"
}


// company
function handleSelectCompany(name){
    if(name){
        $('.company').removeClass('company-active')
        $(`.${name}`).addClass('company-active')

        $('.company-detail').addClass('d-none')
        $(`#${name}`).removeClass('d-none')
    }
}

// project
function getProjects(){
   fetch("./assets/projects.json").then(response => {
        return response.json();
    }).then(data => 
        {
             addProjects(_.orderBy(data, ['year'], ['desc']))
        }
    );
        
}

function addProjects(projects){
    for(let i = 0; i < projects.length; i++){
        $('.project-items').append(`
        <div class="project d-flex mt-4">
            <div class="year col-md-1"  style="min-width:80px">${projects[i].year}</div>
            <div class="name col-md-4"  style="min-width:150px">${projects[i].name}</div>
            <div class="at col-md-2"   style="min-width:150px">${projects[i].at}</div>
            <div class="tech text-wrap col-md-4"  style="min-width:150px">
                <div>${projects[i].built_with}</div>
            </div>
            <div class="link align-self-center col-md-1"  style="min-width:50px">
            <a href="${projects[i].link}"><i class="${projects[i].link ? 'fa fa-external-link' : ''}"></i></a>
            </div>
        </div>`)
    }
}

// project-image
function getProjectImage(){
    fetch("./assets/project-images.json").then(response => {
        return response.json();
    }).then(data => 
        {
            addProjectImages(data)
        }
    );
}

function addProjectImages(images){
      for(let i = 0; i < images.length; i++){
        $('.project-images').append(`<img class="m-2" style="max-height:246px; max-width:264px" src='./assets/project-images/${images[i]}' />`)
    }
}


// cursor
const cursor = document.querySelector('.cursor-1');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:" + (e.pageY - 30)+ "px; left:" +(e.pageX - 30)+"px")
})

getProjects();
getProjectImage();
