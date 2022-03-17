function getArray() {
  return ['blue', 'red', 'green'];
}

const result = getArray();
console.log('result ===', result);
// isaugoti 1 reikme kint 'pirm'
// const pirm = result[0];
// const antr = result[1];

// masyvo destrukturizacija
const [pirm, antr, tr] = result;
// console.log(pirm, antr, tr);

function numberSplit(nr) {
  const half = nr / 2;
  return [Math.floor(half), Math.ceil(half)];
}

const split1 = numberSplit(4);
console.log('split1 ===', split1);
