'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
//  wrapper.append(SearchItem());

root.append(wrapper);

}

const state = {
  stations: null,
  selectedStation: null,
};

$( _ =>{
/*
  getJSON("https://coffeemaker.herokuapp.com/foursquare.json?q[near]=Lima,%20PE&q[query]=Gas", (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;
   //console.log(state.stations);
   */
  const root = $("#root");
  render(root);
});
