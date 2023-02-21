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

let sortFunctions = {
    sortAscName: (a,b) => a.name.localeCompare(b.name),
    sortDescName: (a,b) => b.name.localeCompare(a.name),
    sortAscCountAlbums: (a, b) => a.albums.length - b.albums.length,
    sortDescCountAlbums: (a, b) => b.albums.length - a.albums.length
};

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
                    sortFunctions.sortAscName :
                    sortFunctions.sortDescName;

            showBands(data.sort(sortFnc));

            let thAlbums = document.getElementById('no-albums');
            if(thAlbums.innerText[thAlbums.innerText.length - 1] === '>' ||
            thAlbums.innerText[thAlbums.innerText.length - 1] === '<') {
                thAlbums.innerText = thAlbums.innerText.slice(0, thAlbums.innerText.length - 1);
            }
            
            let thName = document.getElementById('name');
            let text = thName.innerText.slice(0, thName.innerText.length - 1); 
            text += sortConfiguration.sortOrder === 'asc' ? "<" : ">";
            thName.innerText = text;
        })
});

document.getElementById('no-albums').addEventListener('click', function() {
    if(sortConfiguration.sortBy === 'albumsCount'){
        sortConfiguration.sortOrder = 
            sortConfiguration.sortOrder === 'asc' ? 'desc' : 'asc';
    }else{
        sortConfiguration.sortBy = 'albumsCount';
        sortConfiguration.sortOrder = 'asc';
    }

    bandService.fetchBands()
        .then(data => {
            let sortFnc = sortConfiguration.sortOrder === 'asc' ? 
                sortFunctions.sortAscCountAlbums :
                sortFunctions.sortDescCountAlbums;

            showBands(data.sort(sortFnc));

            let thName = document.getElementById('name');
            if(thName.innerText[thName.innerText.length - 1] === '>' ||
            thName.innerText[thName.innerText.length - 1] === '<') {
                thName.innerText = thName.innerText.slice(0, thName.innerText.length - 1);
            }
            
            let thAlbums = document.getElementById('no-albums');
            let text = thAlbums.innerText.slice(0, thAlbums.innerText.length - 1); 
            text += sortConfiguration.sortOrder === 'asc' ? "<" : ">";
            thAlbums.innerText = text;
        });
});

