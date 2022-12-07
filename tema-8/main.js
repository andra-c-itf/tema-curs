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
        let table = document.querySelector('.table tbody');
        for( let i=0; i < crew.data.crewMembers.length; i++){
            let tr= document.createElement('tr');

            let th= document.createElement('th');
            th.innerHTML = i+1;

            let tdName = document.createElement('td');
            tdName.innerHTML = crew.data.crewMembers[i].name;

            let tdAgency = document.createElement('td');
            tdAgency.innerHTML = crew.data.crewMembers[i].agency;

            let tdStatus = document.createElement('td');
            tdStatus.innerHTML = crew.data.crewMembers[i].status;

            let tdWiki = document.createElement('a');
            tdWiki.setAttribute('href', crew.data.crewMembers[i].wikipedia);
            tdWiki.innerHTML = crew.data.crewMembers[i].wikipedia;

            tr.appendChild(th);
            tr.appendChild(tdName);
            tr.appendChild(tdAgency);
            tr.appendChild(tdStatus);
            tr.appendChild(tdWiki);
            table.appendChild(tr);
        }
    }
}
crew.init();