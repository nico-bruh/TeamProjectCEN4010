const color = ["rgb(116, 185, 255)", "rgb(162, 155, 254)",  "rgb(178, 190, 195)","rgb(253, 203, 110)" , "rgb(250, 177, 160)", "rgb(0, 206, 201)"];
//var titles = ["Hunger games","The Walking Dead", "Java", " Will Teach You to Be Rich, Second Edition: No Guilt. No Excuses. No BS. Just a 6-Week Program That Works"];
//var descriptions = ["An adventure", "A scary mystery", "Programming", "The groundbreaking NEW YORK TIMES and WALL STREET JOURNAL BESTSELLER that taught a generation how to earn more, save more, and live a rich life—now in a revised 2nd edition"];
//var prices = [9.99,7.99,12.49, 7.41];
//var links = ["https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Hunger_Games_cover.jpg/220px-The_Hunger_Games_cover.jpg", "https://images-na.ssl-images-amazon.com/images/I/51oyi5ajgtL._SX334_BO1,204,203,200_.jpg", "https://m.media-amazon.com/images/I/514axA2lwpL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51v9NVwWHHL._SX330_BO1,204,203,200_.jpg"];
var links = [];
var prices = [];
var descriptions = [];
var titles = [];
var titleList = "Sample";
function load()
{
    //reAdjMem();
    titleList = localStorage.getItem('listSelected');
    getBooks()
    var a = document.getElementById("field");
    if(titleList == null)
    {
    titleList = "Sample List 1";
    }
    document.getElementById("title").innerHTML = "<strong style='font: 60px Copperplate, fantasy;'>"+titleList+"</strong>";
    a.innerHTML = "";
   for(var i = 0; i < titles.length; i++)
   {
       //element.$server.getData();//The backend
       //const title = "<legend id='Title"+numToLet(i)+"' style='font-size:30'>"+titles[i]+"</legend>";
       const emptyLine = "<p></p>";
       const title = "<hl id='Title"+numToLet(i)+"' style='font-size:30; color:rgb(255,255,255);'>"+titles[i]+"</hl>";//DO NOT CONFUSE WITH wishList title. This is for book titles
       const button1 = emptyLine+"<button id='abut"+numToLet(i)+"' onclick=addItem(f"+numToLet(i)+") style='background-color: rgb(255, 234, 167)'>Add to Cart!</button>";
       const button2 = "<button id='bbut"+numToLet(i)+"' onclick=deleteItem(f"+numToLet(i)+") style='background-color: rgb(250, 177, 160)'>Remove to Cart!</button>";
       const img = emptyLine+"<IMG src = '"+links[i]+"'>";
       const descrip = emptyLine+"<tl style='color:rgb(255,255,255);'>"+descriptions[i]+"</tl>";
       const price = emptyLine+"<strong align='RIGHT' id='price"+numToLet(i)+"' style='color:rgb(214, 48, 49);'>$"+prices[i]+"</strong>";
       //<p></p> = \n
       const selectorLabel = "<label for='selector"+numToLet(i)+"')>  Transfer to list:</label>"
       const selector = "<select id='selector"+numToLet(i)+"' onchange=changeItem()>"+loadSelectorList()+"</select>";
       //const selector = "<select id='selector"+numToLet(i)+"'><option value='one'>Volvo</option></select>";
        a.innerHTML = a.innerHTML+ "<fieldset id='f"+numToLet(i)+"' style='background-color:"+color[i%color.length]+"'>"+title+img+descrip+price+button1+button2+selectorLabel+selector+"</fieldset>";
    }//0%3=
    if(a.innerHTML === "")
    {
        a.innerHTML = "<strong>There are no items</strong>";
    }
    a.innerHTML = a.innerHTML + lastElements();
    loadSelectorList(numToLet(i));
}
window.onload = load();
function changeItem()
{
const item = searchItem();
const destination = going(item);
if(confirm("Are you sure you want to transfer "+titles[item]+" to "+destination+"?"))
  {
//deleteItem(document.getElementById("f"+numToLet(item)));
        localStorage.setItem('book'+getSaveCount(),(titles[item]+"\n"+prices[item]+"\n"+links[item]+"\n"+descriptions[item]+"\n"+destination));
        const aItem = document.getElementById("f"+numToLet(item));
                titles = removeArray(titles, letToNum(aItem.id.substring(1,aItem.id.length)));
                descriptions = removeArray(descriptions, letToNum(aItem.id.substring(1,aItem.id.length)));
                prices = removeArray(prices, letToNum(aItem.id.substring(1,aItem.id.length)));
                links = removeArray(links, letToNum(aItem.id.substring(1,aItem.id.length)));
                removeItemsForServer();
                load();
  }else
  {
  document.getElementById("selector"+numToLet(item)).selectedIndex = "0";
  }
}
function searchItem()
{
 for(var i = 0; i < titles.length; i++)
  {
  const htmlRaw = document.getElementById("selector"+numToLet(i)).value
  var found = !document.getElementById("selector"+numToLet(i)).selectedIndex == "0";
  if(found)
    {
    return i;
    }
  }
  return null;
}
function going(i)
{
const index = document.getElementById("selector"+numToLet(i)).selectedIndex;
return document.getElementById("l"+index).textContent;
}
function loadSelectorList()
{
var res = "<option value='nil'>-</option>"
for(var i = 0; i < 3; i++)
{
res = res + "<option id = 'l"+(i+1)+"' value='"+(i+1)+"'>"+localStorage.getItem('list'+i)+"</option>";
}
return res;
}
function deleteItem(item)
{
const itemName = document.getElementById("Title"+item.id.substring(1,item.id.length)).textContent;
if(confirm("Are you sure you want to delete "+itemName+"?"))
    {
        titles = removeArray(titles, letToNum(item.id.substring(1,item.id.length)));
        descriptions = removeArray(descriptions, letToNum(item.id.substring(1,item.id.length)));
        prices = removeArray(prices, letToNum(item.id.substring(1,item.id.length)));
        links = removeArray(links, letToNum(item.id.substring(1,item.id.length)));
        load();
    }
}
function toString(array)//For test uses
{
    var str = "[";
    for(var i = 0; i < array.length; i++)
    {
        str = str + array[i] + ",";
    }
    return str.substring(0,str.length - 1)+"]";

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
function addItem(item)
{
const itemName = document.getElementById("Title"+item.id.substring(1,item.id.length)).textContent;
titles = removeArray(titles, letToNum(item.id.substring(1,item.id.length)));
        descriptions = removeArray(descriptions, letToNum(item.id.substring(1,item.id.length)));
        prices = removeArray(prices, letToNum(item.id.substring(1,item.id.length)));
        links = removeArray(links, letToNum(item.id.substring(1,item.id.length)));
    load();
}
function total()
{
    var res = 0.00;
    for(var i = 0; i < prices.length; i++)
    {
        res += prices[i];
    }
    res = (Math.round(res * 100) / 100).toFixed(2);//Format the number
    return res;
}
function numToLet(input)//No index use. Letters are a substitute for indexes.
{
//a:0, b:1,..., aa:26, ab:27,..., aaa:52, aaaa:78
var res = "";
var amntOfA = Math.floor(input/25);
for(var i = 0; i < amntOfA; i++)
{
res += 'a';
}
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z'];
var index = Math.floor(((input/25)-amntOfA)*25)-amntOfA;
res += alphabet[index];
return res;
}
function letToNum(input)
{
    var res = 0;
    var count = 0;
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z'];
    while(input.length > count)
    {
    if(input.charAt(count) === 'a' && input.length != 1)
        {
          count++;
            res=res+26;
        }else{
        var stop = false;
        for(var i = 0; i < alphabet.length && !stop; i++)
          {
          res++;
          stop = input.charAt(count) === alphabet[i];
          }
          count++;
          res--;
        }
    }
        return res;
}
function lastElements()//Last of the HTML
{
const priceElement = "<tl id='priceElement'>Total: $"+total()+"</tl>";
const first = "<dl></dl>"
const second = "<button type = 'button' onclick='addAll()' style='background-color:rgb(85, 239, 196)'>Add all to Cart</button>"
const third = "<button type = 'button' onclick = 'removeAll()' style='background-color:rgb(116, 185, 255)'>Remove all to Cart</button>"
return first+priceElement+first+second+first+third;
}
function addAll()
{
const noItems = titles.length == 0;
if(noItems)
{
  alert("There are no items");
}else
    {
if(confirm("Are you sure you want to add every item?"))
        {
        titles = [];
        description = [];
        prices = [];
        links = [];
        load();
        }
    }
}
function removeAll()
{
const noItems = titles.length == 0;
if(noItems)
{
  alert("There are no items");
}else
    {
if(confirm("Are you sure you want to delete every item?"))
        {
        titles = [];
        description = [];
        prices = [];
        links = [];
        load();
        }
    }
}
function getBooks()
{
var count = 0;
while(localStorage.getItem('book'+count) != null)
  {
  const data = localStorage.getItem('book'+count).split('\n');
  if(data[4] == titleList)
    {
  titles[titles.length] = data[0];
  descriptions[descriptions.length] = data[3];
  prices[prices.length] = data[1];
  links[links.length] = data[2];
    }
  count++;
  }
}
function getSaveCount()
{
var count = 0;
while(localStorage.getItem('book'+count) != null)
{
count++;
}
return count;
}
function openShop()
    {
    window.open("Shopping Cart.html");
    }
    function openWishList()
    {
    window.open("app.component.html");
    }
function removeItemsForServer()
{
var count = 0;
var booksList = [];
while(localStorage.getItem('book'+count) != null)
  {
booksList.push(localStorage.getItem('book'+count));
localStorage.removeItem('book'+count);
count++;
  }
  for(var i = 0; i < booksList.length; i++)
  {
  if(booksList[i].split("\n")[4] != titleList)
    {
    localStorage.setItem('book'+i, booksList[i]);
    }
  }
  for(var a = 0; a < links.length; a++)
  {
  localStorage.setItem('book'+getSaveCount(), (titles[item]+"\n"+prices[item]+"\n"+links[item]+"\n"+descriptions[item]+"\n"+titleList));
  }
}
function reAdjMem()
{
var count = 0;
if(localStorage.getItem('book'+(count+1)) != null)
  {
count = count + 1;
while(localStorage.getItem('book'+count) != null)
    {
localStorage.setItem('book'+(count-1), localStorage.getItem('book'+count));
    }
  }
}
