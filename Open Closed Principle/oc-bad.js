const handleTypes = types => {
  types.forEach(type => {
    const { name } = type.constructor;
    if (name === 'TypeA') {
      console.log('Logic for TypeA here');
    } else if (name === 'TypeB') {
      console.log('Logic for TypeB here');
    } else {
      console.log('Unknown type: ', type.constructor.name);
    }
  });

  return;
}

class TypeA {};
class TypeB {};

const input = [ new TypeA(), new TypeB() ];
handleTypes(input);

// Logic for TypeA here
// Logic for TypeB here