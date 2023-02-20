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

