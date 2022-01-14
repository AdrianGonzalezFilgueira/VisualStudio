async function getApi() {
    let response = await fetch('https://corona.lmao.ninja/v3/covid-19/countries');
    let mydata = await response.json();
    console.log(mydata);

}


/* Función aportada por Iago
function fechaFormatter(value) {
    var timestamp = value
    var date = new Date(timestamp);

  return date.getDate()+
          "/"+(date.getMonth()+1)+
          "/"+date.getFullYear()+
          " "+date.getHours()+
          ":"+date.getMinutes()+
          ":"+date.getSeconds();
  } */

  function fechaFormatter(value) {
    let date = new Date(value)
    return date.toLocaleDateString()
  }