let crew= {
    data: {
        crewMembers: []
    },
    init: function () {
        axios
        .get('https://api.spacexdata.com/v4/crew')
        .then(function (response) {
        
        crew.data.crewMembers = response.data;
        crew.tableCreate();
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    },
    tableCreate: function(){
        let table = document.querySelector('.table');
        for( let i=0; i < crew.data.crewMembers.length; i++){
            let tr= document.createElement('tr');
            let th= document.createElement('th');
            th.innerHTML = i+1;
            let td= document.createElement('td');
            td.innerHTML= crew.data.crewMembers[i].name;

            tr.appendChild(th);
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
}
crew.init();