// ... well maybe it will work tomorrow after the http 429 too many requests expires

function loadJSON(url) {
    // console.log("the json loaded was:" + url);
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            const list = document.getElementById("flights"); //goes witih list in foreach...

            // table headings before looping through data
            list.innerHTML = `<tr>
    <th>Callsign</th>
    <th>Country</th>
    <th>Long</th>
    <th>Lat</th>
    <th>Altitude</th>
    <th>Airborn</th>
    <th>Velocity</th>
    <th>True Track</th>
    <th>Vertical Rate</th>
    </tr>`;

            data.states.forEach((state) => {
                const [,
                    call,
                    country, , ,
                    lon,
                    lat,
                    Balt,
                    ground,
                    vel,
                    trueTrack,
                    vertRate, , , , ,
                ] = state;
                if (ground == true) {
                    var airborn = "yes";
                } else {
                    airborn = "no";
                }

                // displays flight data in table
                list.innerHTML += `<tr>
        <td>${call}</td>
        <td>${country}</td>
        <td>${lon}</td>
        <td>${lat}</td>
        <td>${Math.trunc(Balt)}</td>
        <td>${airborn}</td>
        <td>${Math.trunc(vel)}</td>
        <td>${Math.trunc(trueTrack)}</td>
        <td>${vertRate}</td></tr>`;
            });
        });
}

// let area;
// loadJSON(
//     `https://opensky-network.org/api/states/all? + ${area};`
// );

// works but got error for too many requests time out till tomorrow
loadJSON(
    "https://opensky-network.org/api/states/all?lamin=38&lomin=-106&lamax=41&lomax=-103"
);