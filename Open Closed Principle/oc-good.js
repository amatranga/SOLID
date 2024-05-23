const handleTypes = types => {
  types.forEach(type => {
    type.handle();
  });

  return;
}

class TypeA {
  handle() {
    console.log('Logic for TypeA');
  }
}

class TypeB {
  handle() {
    console.log('Logic for TypeB');
  }
}

class OtherClass {
  handle() {
    console.log('Logic for OtherClass');
  }
}

const inputs = [ new TypeA(), new TypeB(), new OtherClass() ];
handleTypes(inputs);

// Logic for TypeA
// Logic for TypeB
// Logic for OtherClass