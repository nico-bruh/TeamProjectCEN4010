var price = [9.99,7.99,12.49, 7.41];
var isbn = ["392093"];
var items = ["Hunger games","The Walking Dead", "Java", " Will Teach You to Be Rich, Second Edition: No Guilt. No Excuses. No BS. Just a 6-Week Program That Works"];
var pic = ["https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Hunger_Games_cover.jpg/220px-The_Hunger_Games_cover.jpg", "https://images-na.ssl-images-amazon.com/images/I/51oyi5ajgtL._SX334_BO1,204,203,200_.jpg", "https://m.media-amazon.com/images/I/514axA2lwpL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51v9NVwWHHL._SX330_BO1,204,203,200_.jpg"];
var descriptions = ["An adventure", "A scary mystery", "Programming", "The groundbreaking NEW YORK TIMES and WALL STREET JOURNAL BESTSELLER that taught a generation how to earn more, save more, and live a rich life—now in a revised 2nd edition"];

function load()
{
const firstElement = "<h1>Items in your cart</h1><button> Continue Shopping</button><p></p><h2>Cart Summary</h2>";
const totalItems = "<h3>("+items.length+") Items</h3><p></p><h3>Total:</h3><h1>$"+total()+"</h1>";
document.getElementById("fieldset").innerHTML = firstElement+totalItems;
document.getElementById("input").innerHTML = insertBookToHTML();
}
window.load = load();
function total()
{
var res = 0.00;
for(var i = 0; i < price.length; i++)
{
res = res+price[i];
}
res = (Math.round(res * 100) / 100).toFixed(2);//Format the number
return res;
}
function insertBookToHTML()
{
var res = "";
for(var i = 0; i < items.length; i++)
{
//res = res + "<img src='"+pic[i]+"'>";
       const emptyLine = "<p></p>";
       const title = "<hl id='Title"+numToLet(i)+"' style='font-size:30; color: rgb(0,0,255);text-decoration: underline'>"+items[i]+"</hl>";//DO NOT CONFUSE WITH wishList title. This is for book titles
       const button1 = emptyLine+"<button id='abut"+numToLet(i)+"' onclick=addItem(f"+numToLet(i)+") style='margin:10px;background-color: rgb(0, 105, 253); height: 40px; width: 150px; color: rgb(255,255,255)'>Update Quantity</button>";
       const button2 = "<button id='bbut"+numToLet(i)+"' onclick=deleteItem(f"+numToLet(i)+") style='margin:10px;background-color: rgb(0, 105, 253); height: 40px; width: 150px; color: rgb(255,255,255)'>Remove Item</button>";
       const button3 = "<button id='cbut"+numToLet(i)+"' onclick=saveForLater("+i+") style='margin:10px;background-color: rgb(0, 105, 253); height: 40px; width: 150px; color: rgb(255,255,255)'>Save for later</button>";
       const img = emptyLine+"<IMG src = '"+pic[i]+"'>";
       const prices = emptyLine+"<strong align='RIGHT' id='price"+numToLet(i)+"' style='color:rgb(214, 48, 49);'>$"+price[i]+"</strong>";
       const textBox = emptyLine+"<br>Quantity:</br><input type='text' id='fname' name='fname' value=1>"
       res = res+title+img+prices+textBox+button1+button2+button3+emptyLine;
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
function saveForLater(int)
{
const listName = prompt("What list do you want to save in: ");
localStorage.setItem('book'+getSaveCount(),(items[int]+"\n"+price[int]+"\n"+pic[int]+"\n"+descriptions[int]+"\n"+listName));
pic = removeArray(pic,int);
price = removeArray(price,int);
isbn = removeArray(isbn,int);
items = removeArray(items,int);
descriptions = removeArray(descriptions,int);
const firstElement = "<h1>Items in your cart</h1><button> Continue Shopping</button><p></p><h2>Cart Summary</h2>";
const totalItems = "<h3>("+items.length+") Items</h3><p></p><h3>Total:</h3><h1>$"+total()+"</h1>";
document.getElementById("fieldset").innerHTML = firstElement+totalItems;
document.getElementById("input").innerHTML = insertBookToHTML();
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
