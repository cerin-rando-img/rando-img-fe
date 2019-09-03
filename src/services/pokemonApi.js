export const getImage = () => {
  return fetch('https://salty-tundra-80427.herokuapp.com')
    .then(res => {
      if(!res.ok) throw 'Unable to get image :(';

      return res.json;
    });
};
