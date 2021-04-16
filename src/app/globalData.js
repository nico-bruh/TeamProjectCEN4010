class globalData
{
const gcolor = ["rgb(116, 185, 255)", "rgb(162, 155, 254)",  "rgb(178, 190, 195)","rgb(253, 203, 110)" , "rgb(250, 177, 160)", "rgb(0, 206, 201)"];
var gtitles = ["Hunger games","The Walking Dead", "Java", " Will Teach You to Be Rich, Second Edition: No Guilt. No Excuses. No BS. Just a 6-Week Program That Works"];
var gdescriptions = ["An adventure", "A scary mystery", "Programming", "The groundbreaking NEW YORK TIMES and WALL STREET JOURNAL BESTSELLER that taught a generation how to earn more, save more, and live a rich life—now in a revised 2nd edition"];
var gprices = [9.99,7.99,12.49, 7.41];
var glinks = ["https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Hunger_Games_cover.jpg/220px-The_Hunger_Games_cover.jpg", "https://images-na.ssl-images-amazon.com/images/I/51oyi5ajgtL._SX334_BO1,204,203,200_.jpg", "https://m.media-amazon.com/images/I/514axA2lwpL.jpg", "https://images-na.ssl-images-amazon.com/images/I/51v9NVwWHHL._SX330_BO1,204,203,200_.jpg"];
var gTitle = "";
var gLists = ["Sample list 1", "Sample list 2"];
function globalData()
  {
console.log("Item declared");
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
function getVar(name)
  {
  switch(name)
  {
    case "color":
      return gcolor;
    case "titles":
      return gtitles;
    case "descriptions":
      return gdescriptions;
    case "prices":
      return gprices;
    case "links":
      return glinks;
    case "title":
      return gTitle;
    case "lists":
      return gLists;
  }
  }
}
module.exports = globalData;
