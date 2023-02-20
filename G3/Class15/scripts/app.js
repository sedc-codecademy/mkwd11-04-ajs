function showBands(bands) {
    let html = '';

    let counter = 0;
    for (let band of bands) {
        counter += 1;

        html += `
            <tr>
                <td>${counter}</td>
                <td>${band.name}</td>
                <td><button disabled class="btn 
                    ${band.active ? "btn-warning" : "btn-danger"}">
                    ${band.active ? "Active" : "NotActive"}
                    </button>
                </td>
                <td>${band.getTagsAsString()}</td>
                <td>${band.getCurrentMembersAsString()}</td>
                <td>${band.getAlbumsCount()}</td>
            </tr>
        `
    }
    // console.log(html);
    document.getElementById('t-body').innerHTML = html;
}


(function () {
    bandService
        .fetchBands()
        .then(data => {
            showBands(data);
        });
})();

let sortConfiguration = {
    sortBy: '',
    sortOrder: ''
};
Object.seal(sortConfiguration);

document.getElementById('name').addEventListener('click', function() {
    if(sortConfiguration.sortBy === 'name'){
        sortConfiguration.sortOrder = 
            sortConfiguration.sortOrder === 'asc' ? 'desc' : 'asc';
    }else{
        sortConfiguration.sortBy = 'name';
        sortConfiguration.sortOrder = 'asc';
    }

    bandService.fetchBands()
        .then(data => {
            let sortFnc = 
                sortConfiguration.sortOrder === 'asc' ? 
                    (a,b) => a.name.localeCompare(b.name) :
                    (a,b) => b.name.localeCompare(a.name);

            showBands(data.sort(sortFnc));

            let thName = document.getElementById('name');
            let text = thName.innerText.slice(0, thName.innerText.length - 1); 
            text += sortConfiguration.sortOrder === 'asc' ? "<" : ">";
            thName.innerText = text;
        })
});

document.getElementById('no-albums').addEventListener('click', function() {

});

