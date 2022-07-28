const submitted = (event) => {
  event.preventDefault();
  alert("Submitted");
  location.href= 'index.html';
}

 document.getElementById("depdate").value = JSON.parse(localStorage.getItem("data")).depdate;
 document.getElementById("retdate").value = JSON.parse(localStorage.getItem("data")).retdate;
 document.getElementById("from").value = JSON.parse(localStorage.getItem("data")).from;
 document.getElementById("to").value = JSON.parse(localStorage.getItem("data")).to;


// let obj = {
//   depdate : "21-08-2022",
//   retdate : "30-08-2022"
// };

// let myObj = JSON.stringify(obj);
// localStorage.setItem("obj",myObj);
// let myObj_deserialized = JSON.parse(localStorage.getItem("obj"));
// console.log(myObj_deserialized);

function validateForm(event) {
  event.preventDefault();
  var nameValid = checkName();
  var dateValid = checkDate();
  const source1 = document.querySelector("form");

  console.log(event);

  if (nameValid || dateValid) {
    return;
  }
  else {
    console.log("Hii2")
    var startDate = document.getElementById("depdate").value;
    var endDate = document.getElementById("retdate").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    localStorage.setItem("data",JSON.stringify({
      depdate : startDate,
      retdate : endDate,
      from ,
      to
    }));
      alert("Submitted");

  }
}

function trippp() {
  var single = document.getElementById('oneway');
  if(document.getElementById('oneway').checked) {
    console.log("Hi");
    document.getElementById("retdate").value = "";
    document.getElementById("retdate").disabled = true;
}
else{
  document.getElementById("retdate").disabled = false;
}
}



function checkDate() {
  var startDate = document.getElementById("depdate").value;
  var endDate = document.getElementById("retdate").value;
  // const source1 = document.querySelector("form");

  if ((Date.parse(endDate) <= Date.parse(startDate))) {
    alert("Return date should be greater than Departure date");
    document.getElementById("retdate").value = "";
    return true;
  }
  else{
    return false;
  }
};

function checkName() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  if (from == to) {
    alert("Source and Destination both can't be same");
    return true;
  }
  else{
    return false;
  }
  
}



const source = document.getElementById('depdate');
const target = document.getElementById('retdate');

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

const inputHandler = function (e) {
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


