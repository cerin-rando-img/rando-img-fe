export const getImage = () => {
  console.log('helllo');
  return fetch('https://salty-tundra-80427.herokuapp.com/api/v1/pokemon/')
    .then(res => {
      if(!res.ok) throw 'Unable to get image :(';

      return res.json();
    });
};
