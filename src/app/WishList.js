const color = ["rgb(116, 185, 255)", "rgb(162, 155, 254)",  "rgb(178, 190, 195)","rgb(253, 203, 110)" , "rgb(250, 177, 160)", "rgb(0, 206, 201)"];
var titles = ["Hunger games","The Walking Dead", "Java", " Will Teach You to Be Rich, Second Edition: No Guilt. No Excuses. No BS. Just a 6-Week Program That Works"];
var descriptions = ["An adventure", "A scary mystery", "Programming", "The groundbreaking NEW YORK TIMES and WALL STREET JOURNAL BESTSELLER that taught a generation how to earn more, save more, and live a rich life—now in a revised 2nd edition"];
var prices = [9.99,7.99,12.49, 7.41];
var links = ["https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Hunger_Games_cover.jpg/220px-The_Hunger_Games_cover.jpg", "https://images-na.ssl-images-amazon.com/images/I/51oyi5ajgtL._SX334_BO1,204,203,200_.jpg", "https://m.media-amazon.com/images/I/514axA2lwpL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51v9NVwWHHL._SX330_BO1,204,203,200_.jpg"];
function load()
{
    var a = document.getElementById("field");
    document.getElementById("title").innerHTML = "<strong style='font: 60px Copperplate, fantasy;'>"+"Sample 1"+"</strong>";
    a.innerHTML = "";
   for(var i = 0; i < titles.length; i++)
   {
       //const title = "<legend id='Title"+numToLet(i)+"' style='font-size:30'>"+titles[i]+"</legend>";
       const emptyLine = "<p></p>";
       const title = "<hl id='Title"+numToLet(i)+"' style='font-size:30; color:rgb(255,255,255);'>"+titles[i]+"</hl>";//DO NOT CONFUSE WITH wishList title. This is for book titles
       const button1 = emptyLine+"<button id='abut"+numToLet(i)+"' onclick=addItem(f"+numToLet(i)+") style='background-color: rgb(255, 234, 167)'>Add to Cart!</button>";
       const button2 = "<button id='bbut"+numToLet(i)+"' onclick=deleteItem(f"+numToLet(i)+") style='background-color: rgb(250, 177, 160)'>Remove to Cart!</button>";
       const img = emptyLine+"<IMG src = '"+links[i]+"'>";
       const descrip = emptyLine+"<tl style='color:rgb(255,255,255);'>"+descriptions[i]+"</tl>";
       const price = emptyLine+"<strong align='RIGHT' id='price"+numToLet(i)+"' style='color:rgb(214, 48, 49);'>$"+prices[i]+"</strong>";
       //<p></p> = \n
        a.innerHTML = a.innerHTML+ "<fieldset id='f"+numToLet(i)+"' style='background-color:"+color[i%color.length]+"'>"+title+img+descrip+price+button1+button2+"</fieldset>";
    }//0%3=
    if(a.innerHTML === "")
    {
        a.innerHTML = "<strong>There are no items</strong>";
    }
    a.innerHTML = a.innerHTML + lastElements();
}
window.onload = load();
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
