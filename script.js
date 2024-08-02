function CreateCard(title,ChanName,views,monthOld,duration,thumbnail){

    let finView = ''
    if (views>9999 && views<1000000){
        finView = Math.round(views/1000) + "K views"        
    }

    else if(views>100000 && views<1000000000){
        finView= views/1000000 + "M views"
    }
    else if(views>=1000000000){
        finView= views/1000000000 + "B views"
    }
    else{
        finView=views + ' views'
    }

    let html = `
    <div class="card">
        <div class="left">
            <img src="${thumbnail}">
            <span class="duration">
                ${duration}
            </span>
        </div>
        <div class="right">
            <div class="heading">
                ${title}
            </div>
            <div class="details">
                <span class="channel">
                    ${ChanName} •
                </span>
                <span class="views">
                    ${finView} •
                </span>
                <span class="monthOld">
                    ${monthOld} months ago
                </span>
            </div>
        </div>
    </div>`

    document.querySelector('.container').innerHTML += html

}


CreateCard('Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1','popa',10000000,2,'24:10','https://i.ytimg.com/vi/VELNPK0dK84/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLARdokesrwglK7lm8sTgXJ-D4R_7g')
CreateCard('Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1','popa',10000000,2,'24:10','https://i.ytimg.com/vi/VELNPK0dK84/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLARdokesrwglK7lm8sTgXJ-D4R_7g')
