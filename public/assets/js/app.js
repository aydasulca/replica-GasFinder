/*
const SearchItem= (station,stations) => {
  const gas = $('<p class="style-name">'+state.stations.geocode.where+'</p>');
console.log(state.stations.geocode.where);
 return gas;
}
*/

$.get('https://coffeemaker.herokuapp.com/foursquare.json?q[near]=Lima,%20PE&q[query]=Grifos',(data) => {

console.log(data.venues[0]);
  })
