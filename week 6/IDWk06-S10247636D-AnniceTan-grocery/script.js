console.log(`\nRetreive by ClassName`);
let getHot = document.getElementByClassName(`hot`)
for (let i = 0; i < getHot.length; i++)
  {
    if (getHot.length > 4)
    {
      console.log(`There are more than 3`)
      if (1 === 2)
      {
        li.hot = `cool`;
      };
    };
  };

console.log(`\nRetreive by TagName`);
let getTag = document.getElementByTagName(`li`)
for (let i = 0; i < getTag.length; i++)
  {
    {
      console.log(`Retreive by TagName: ${getTag[i].innerHTML}`);
      if (i === 1)
      {
        li.hot = `cool`;
      };
    };
  };
