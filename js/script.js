'use strict';

const ul = document.querySelector('ul');
const arr = [];

const handler = {
  set: function (target, prop, value){
    target[prop] = value;
    if (prop === 'length'){
      const li = document.createElement('li');
      li.textContent = value;
      ul.appendChild(li);
    }
    return true
  },

  deleteProperty: function (target, prop){
    delete target[prop];
    if (!isNaN(prop)){
      const li = ul.querySelector(`li:nth-child(${Number(prop) + 1})`);
      li.remove()
    }
    return true;
  }
}

const arrProxy = new Proxy(arr, handler);
arrProxy.push(100);
arrProxy.push(33);
arrProxy.push(7);
arrProxy.push(99)
console.log(arr)
// delete arrProxy[1];
// arrProxy.splice(1,1)
// arrProxy.pop()
// arrProxy.shift()
console.log(arr)
