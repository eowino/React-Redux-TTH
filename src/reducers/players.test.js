import * as PlayerReducer from './player';

test('reducers', () => {
  let state;
  state = PlayerReducer([{name:'Beach',score:10,id:0},{name:'Bettie',score:20,id:1},{name:'Adrian',score:30,id:2},{name:'Melody',score:40,id:3},{name:'Donaldson',score:50,id:4}], {type:'player/ADD_PLAYER',name:'SMITH'});
  expect(state).toEqual([{name:'Donaldson',score:50,id:4},{name:'Melody',score:40,id:3},{name:'Adrian',score:30,id:2},{name:'Bettie',score:20,id:1},{name:'Beach',score:10,id:0},{name:'SMITH',score:0,id:5}]);
});