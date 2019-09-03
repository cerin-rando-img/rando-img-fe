export const getImage = () => {
  return fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex')
    .then(res => {
      if(!res.ok) throw 'Unable to get image :(';

      return res.json;
    });
};
