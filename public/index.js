
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
            console.log(data, 'josa');
            addProjects(data)
        }
    );
        
}

function addProjects(projects){
    for(let i = 0; i < projects.length; i++){
        $('.project-items').append(`<div class="project d-flex mt-2">
            <div class="year" style="min-width:100px">${projects[i].year}</div>
            <div class="name" style="min-width:320px">${projects[i].name}</div>
            <div class="at" style="min-width:150px">${projects[i].at}</div>
            <div class="tech text-wrap" style="min-width:200px; max-width:200px">
                <div>${projects[i].built_with}</div>
            </div>
            <div class="link align-self-center" style="min-width:100px">
            </div>
        </div>`)
    }
}

getProjects();
