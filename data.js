export const projects = [
    {
      "img": "/picsum.photos/300/300",
      "name": "Maldives",
      "distance": "16,770 kilometers",
      "date": "19-24 Sep",
      "price": "$490 per night",
      "id": "1"

    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Singapore",
      "distance": "19,000 kilometers",
      "date": "04-10 Aug",
      "price": "$310 per night",
      "id": "2"

    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Dubai",
      "distance": "17,461 kilometers",
      "date": "11-16 Aug",
      "price": "$450 per night",
      "id": "3"
    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Goa",
      "distance": "1400 kilometers",
      "date": "15-20 Oct",
      "price": "$260 per night",
      "id": "2"

    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Sri Lanka",
      "distance": "16,650 kilometers",
      "date": "14-20 Aug",
      "price": "$500 per night",
      "id": "5"

    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Dubai",
      "distance": "17,461 kilometers",
      "date": "11-16 Aug",
      "price": "$450 per night",
      "id": "4"
    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Maurituis",
      "distance": "2,700 kilometers",
      "date": "18-23 July",
      "price": "$250 per night",
      "id": "3"

    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Leh",
      "distance": "1,600 kilometers",
      "date": "25-30 Aug",
      "price": "$220 per night",
      "id": "1"

    },
    {
      "img": "/picsum.photos/300/300",
      "name": "California",
      "distance": "17,660 kilometers",
      "date": "14-20 Oct",
      "price": "$480 per night",
      "id": "5"
    },
    {
      "img": "/picsum.photos/300/300",
      "name": "Toronto",
      "distance": "15,440 kilometers",
      "date": "22-28 Oct",
      "price": "$360 per night",
      "id": "4"
    }
  ];

  const icon =[
    {
      "name": "fa-solid fa-hotel",
      "id": "1"
    },
    {
      "name": "fas fa-swimming-pool",
      "id": "2"
    },
    {
      "name": "fa-solid fa-umbrella-beach",
      "id": "3"
    },
    {
      "name": "fa-solid fa-house",
      "id": "4"
    },
    {
      "name": "fas fa-campground",
      "id": "5"
    }
  ]

// {
    
//     "data": {
//             "img": "",
//             "name": "Maldives",
//             "distance": "1,677 kilometers",
//             "date": "19-24 Sep",
//             "price": "$490 per night"
//         },
    
//         "data":{
//             "img": "",
//             "name": "Maldives",
//             "distance": "1,677 kilometers",
//             "date": "19-24 Sep",
//             "price": "$490 per night"
//         }
// }

const checkValue = (str, max) => {
  if (str.charAt(0) !== "0" || str === "00") {
    var num = parseInt(str);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    str =
      num > parseInt(max.toString().charAt(0)) && num.toString().length === 1
        ? "0" + num
        : num.toString();
  }
  return str;
};

const inputHandler = function(e) {
  let input = e.target.value;
  var values = input.split("/").map(function (v) {
      return v.replace(/\D/g, "");
    });
if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
if (values[0]) values[0] = checkValue(values[0], 31);
if (values[1]) values[1] = checkValue(values[1], 12);
var output = "";

  output = values.map(function (v, i) {
    return v.length === 2 && i < 2 ? v + " / " : v;
  });

e.target.value = output.join("").substr(0, 14);
if (e.target.value[e.target.value?.length - 1] === "/") {
  e.target.value += " ";
}
  // e.target.value = e.target.value.replace(/[^0-9]/g, "");
}

// source.addEventListener('input', inputHandler);
// target.addEventListener('input', inputHandler);
