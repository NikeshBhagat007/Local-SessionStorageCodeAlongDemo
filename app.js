var storageName;
function selectStorageType(id)
{
    storageName = document.getElementById(id).value;
    //var storageName = document.getElementById("session");
    console.log(storageName);
}
function  addStorage()
{
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;
    console.log(storageName)
    if(storageName === "local")
    {
        localStorage.setItem(key,value);
    }
    else{
        sessionStorage.setItem(key,value);
    }
    console.log("stored");
}

function getKey()
{
    var key = document.getElementById("value").value;
    //var value = localStorage.getItem(key);
    console.log(key)
    if(storageName === "local")
    {
        var value = localStorage.getItem(key);
    }
    else{
        var value = sessionStorage.getItem(key);
    }
    console.log(value);
}

function localLength()
{
    var len;
    if(storageName === "local")
    {
        len = localStorage.length;
    }
    else{
         len = sessionStorage.length;
    }
    console.log(len);
}

function localClear()
{
    if(storageName === "local")
    {
        localStorage.clear();
    }
    else{
        sessionStorage.clear();
    }
}



