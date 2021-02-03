function  addStorage()
{
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    localStorage.setItem(key,value);
    console.log("stored");
}

function getKey()
{
    var key = document.getElementById("getkey").value;
    var value = localStorage.getItem(key);
    console.log(value);
}

function localLength()
{
    let len = localStorage.length;
    console.log(len);
}

function localClear()
{
    localStorage.clear();
}


function remove()
{
    var key = document.getElementById("remove").value;
    console.log(key);
    localStorage.removeItem(key);
}
