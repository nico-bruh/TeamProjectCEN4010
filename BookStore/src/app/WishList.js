var titles = ["Hunger games","The Walking Dead", "Make this true", "Java"];
var descriptions = ["An adventure", "A scary mystery", "Nothing", "Programming"];
var prices = [9.99,7.99,12.49,15.69];
function load()
{
    var a = document.getElementById("field");
    a.innerHTML = "";
   for(var i = 0; i < titles.length; i++)
   {
       const title = "<legend id='Title"+numToLet(i)+"'>"+titles[i]+"</legend>";
       const button1 = "<p></p><button id='abut"+numToLet(i)+"' onclick=addItem(f"+numToLet(i)+")>Add to Cart!</button>";
       const button2 = "<button id='bbut"+numToLet(i)+"' onclick=deleteItem(f"+numToLet(i)+")>Remove to Cart!</button>";
       const img = "<IMG src = 'unknown'>";
       const descrip = "<tl>"+descriptions[i]+"</tl>";
       const price = "<p></p><tl align='RIGHT' id='pricea'>$"+prices[i]+"</tl>";
       //<p></p> = \n
        a.innerHTML = a.innerHTML+ "<fieldset id='f"+numToLet(i)+"'>"+title+img+descrip+price+button1+button2+"</fieldset>";
    }
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
        load();
}
function total()
{
    var res = 0.00;
    for(var i = 0; i < prices.length; i++)
    {
        res += prices[i];
    }
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
const second = "<button type = 'button' onclick='addAll()'>Add all to Cart</button>"
const third = "<button type = 'button' onclick = 'removeAll()'>Remove all to Cart</button>"
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
        load();
        }
    }
}
