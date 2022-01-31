function fromJSONToHTMLTable(json) {
    const data = JSON.parse(json);
    console.log('<table>');
    let tableHeaders = '';
    for (let th in data[0]) {
        th = th
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/\>/g, '&gt;')
        .replace(/\</g, '&lt;')
        .replace(/'/g, '&#39;');
        tableHeaders += `<th>${th}</th>`
    }

    console.log(`\t<tr>${tableHeaders}</tr>`);

    for (const element of data) {
        let tableData = '';
        for (let td in element) {
            let item = element[td].toString()
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/\>/g, '&gt;')
            .replace(/\</g, '&lt;')
            .replace(/'/g, '&#39;');
            tableData += `<td>${item}</td>`
        }
        console.log(`\t<tr>${tableData}</tr>`);
    }

    console.log('</table>');
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)