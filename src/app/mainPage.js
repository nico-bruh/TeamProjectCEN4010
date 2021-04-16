//var listName = ["Sample list 1", "Sample list 2"];
const color = ["rgb(116, 185, 255)", "rgb(162, 155, 254)",  "rgb(178, 190, 195)","rgb(253, 203, 110)" , "rgb(250, 177, 160)", "rgb(0, 206, 201)"];
var listName = [];
listName = getList();
//const color = globalData.getVar("color");
function load()
{
//updateSession();
document.getElementById("field").innerHTML = "";
const emptyLine = "<p></p>";
for(var i = 0; i < listName.length; i++)
  {
const selButton = "<button onclick='selectedList("+i+")'>Select List</button>"
const remButton = "<button onclick='removeItemList("+i+")'>Remove List</button>"
const renButton = "<button onclick='renameList("+i+")'>Rename List</button>"
document.getElementById("field").innerHTML += "<fieldset style='background-color:"+color[i]+"'><pl style='color:rgb(255,255,255); font:20px Copperplate, fantasy'>"+listName[i]+"</pl>" + emptyLine +selButton+remButton+renButton+emptyLine+"</fieldset>";
  }
  const btn = document.getElementById("addListBTN");
  if(listName.length >= 3)
  {
  btn.disabled = true;
  document.getElementById("field").innerHTML += "<p>You have reached the maximum amount of wish lists per user.</p>"
  }else{
  btn.disabled = false;
  }
}
window.onload = load();
function selectedList(object)//Numerical index used as a parameter, not alphabetical
{
localStorage.setItem('listSelected', listName[object])
window.open("WishListPage.html");
}
function addList()
{
const name = prompt("What would you like to name the new list?");
if(name != "")
{
listName.push(name);
alert(name+" has been created!");
load();//Refreshes the page
}
offlineList();
}
function removeItemList(index)
{
listName = removeArray(listName, index);
offlineList();
load();
}
function removeArray(data,index)
{
    var arr = [];
    var count = 0;
    for(var i = 0; i < data.length; i++)
    {
        if(i != index)
        {
            arr[count] = data[i];
            count++;
        }
    }
    return arr;
}
function renameList(index)
{
const name = prompt("What would you like to rename it to?");
listName[index] = name;
load();
}
function getList()
{
var count = 0;
var res = [];
while(localStorage.getItem('list'+count))
  {
  res.push(localStorage.getItem('list'+count));
  count++;
  }
  return res;
}
function arrHasEmpty(data)
{
var res = false;
for(var i = 0; i < data.length && !res; i++)
  {
  res = data[i]=="";
  }
  return res;
}
function toString(array)
{
var res = "";
for(var i = 0; i < array.length; i++)
  {
  res += array[i];
  }
  return res;
}
function offlineList()
{
for(var a = 0; a < 3; a++)
  {
  localStorage.removeItem('list'+a);
  }
for(var i = 0; i < listName.length; i++)
  {
  localStorage.setItem('list'+i, listName[i]);
  }
}
