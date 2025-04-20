let search = window.location.search;
let result = search.slice(search.indexOf('?') + 1).split('&').reduce((params, hash) => {
      let [key, val] = hash.split('=')
      return Object.assign(params, {[key]: decodeURIComponent(val)})
  }, {});
let totalsum =0;
let orders = [
  { id: 'mexicanMule',  item: 'Mexican mule', price: 3.00, num: 0, sum:0},
  { id: 'gin-basil',  item: 'Gin Basil', price: 2.50, num: 0, sum:0 },
  { id: 'bloody-mary',  item: 'Bloody Mary', price: 2.80, num: 0, sum:0  },
  { id: 'mojito',  item: 'Mojito', price: 2.50, num: 0, sum:0  },
  { id: 'margarita',  item: 'Margarita', price: 3.00, num: 0, sum:0  },
  { id: 'woo-woo',  item: 'Woo Woo', price: 1.50, num: 0, sum:0  },
  { id: 'mad-dog',  item: 'Mad Dog', price: 1.50, num: 0, sum:0  },
  { id: 'freak-shot',  item: 'Freak Shot', price: 1.50, num: 0, sum:0  },
  { id: 'cranberry-cookie',  item: 'Cranberry Cookie', price: 1.50, num: 0, sum:0  },
  { id: 'silver-bullet', item: 'Silver Bullet', price: 1.50, num: 0, sum:0  },
  { id: 'meat-cuts', item: 'Meat cuts', price: 4.00, num: 0, sum: 0 },
  { id: 'cheese-platter', item: 'Cheese platter', price: 4.00, num:0, sum:0 }
];
let list = document.getElementById("myList");

window.addEventListener('load', function () {
  for(i=0; i< orders.length; i++){
    if(orders[i].id!= 'meat-cuts' && orders[i].id!= 'cheese-platter' ){
      orders[i].num = result[orders[i].id];
    }
    else{
      if(orders[i].id == 'meat-cuts' && result[orders[i].id] != null || orders[i].id == 'cheese-platter' && result[orders[i].id] != null){
        orders[i].num=1;
        }
      }

    orders[i].sum = Number(orders[i].price) * Number(orders[i].num);
      }

    orders.forEach(item => {
        totalsum += item.sum; 
      });

    for (i = 0; i < orders.length; ++i) {
            if(orders[i].num != 0){
            let li = document.createElement('li');
            li.innerText = `${orders[i].item}(${orders[i].num}) - $${orders[i].sum}`;
            list.appendChild(li);
        }
      }
    this.document.getElementById("name").innerText = `Name: ${result["name"]}`;
    this.document.getElementById("total").innerText = `Total: $${totalsum}`;    
    if(result["special"] != ''){
    this.document.getElementById("special").innerText = `Special: ${result["special"]}`;
    }
});

function back(){
  for(i=0; i< orders.length; i++){
    orders[i].num = 0;
    orders[i].sum = 0;
      }
  totalsum = 0;
  list.parentNode.removeChild(list);
  this.document.getElementById("name").innerText = `Name: `;
  this.document.getElementById("total").innerText = `Total: `;  
  this.document.getElementById("special").innerText = ` `;
  window.location.href = './bar_menu.html';
};