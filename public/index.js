
function handleCollapseSideMenu(open){
  document.getElementById('side-menu').style.width = open ? "350px" : "0"
}

function handleSelectCompany(name){
    if(name){
        $('.company').removeClass('company-active')
        $(`.${name}`).addClass('company-active')

        $('.company-detail').addClass('d-none')
        $(`#${name}`).removeClass('d-none')
    }
}

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
            <div class="year col-md-1">${projects[i].year}</div>
            <div class="name col-md">${projects[i].name}</div>
            <div class="at col-md-2" >${projects[i].at}</div>
            <div class="tech text-wrap col-md">
                <div>${projects[i].built_with}</div>
            </div>
            <div class="link align-self-center col-md-1 text-center">
                <a href="${projects[i].link}"><i class="fa fa-external-link"></i></a>
            </div>
        </div>`)
    }
}

getProjects();


const cursor = document.querySelector('.cursor-1');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:" + (e.pageY - 30)+ "px; left:" +(e.pageX - 30)+"px")
})

