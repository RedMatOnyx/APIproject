

data.states.forEach(state => {
    const [, call, country, , , lon, lat, Balt, ground, vel, trueTrack, vertRate, , , , , ] = state;
    // console.log(data.states.state);
    if(ground==true){var airborn = "yes"}else{airborn="no"}


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
})});}

// [][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// ---------------------------

// const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
// console.log(myArr);

//         var my_obj = {name: "Erik", age: 17, school: "Edpresso High"};
//         var my_json = JSON.stringify(my_obj);
//         var parsed_obj = JSON.parse(my_json);
//         document.getElementById("demo").innerHTML =  "Converting JSON to HTML <br><br>" + 
//                                 "Name: " + parsed_obj.name + 
//                                 "<br>Age: " + parsed_obj.age +
//                                 "<br>School: " + parsed_obj.school;

// https://stackoverflow.com/questions/57120756/how-to-load-json-from-url-and-display-by-using-plain-javascript-on-html-page



       // var theJson = JSON.stringify(data, null, 2); // goes with other commented output way down
        // console.log("Time:", data.time); //works
        // console.log("FlightInfo:", data.states); // works, shows all states (plane in the air and their data)
        // document.getElementById('seeAll').innerHTML = data.states; // works


// nice preformatted vertical data displayed in console
        // var theParsed = JSON.parse(theJson);
        // console.log("theJson:" + theJson);

//   var sample = '{"time":1712279762,"states":[["a76df8","AAL2793 ","United States",1712279762,1712279762,-116.151,47.488,10363.2,false,218.44,275,0,null,10187.94,null,false,0]]}';
// console.log(loadJSON('https://opensky-network.org/api/states/all?lamin=39&lomin=-105&lamax=40&lomax=-104'));

  // loadJSON(sampleURL);


  // maybe use $.getJSON()
// {"time":1712279762,"states":[["a76df8","AAL2793 ","United States",1712279762,1712279762,-116.151,47.488,10363.2,false,218.44,275,0,null,10187.94,null,false,0]]}
