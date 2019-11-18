var gameData = {
  bacon: 0,
  baconPerClick: 1,
  baconPerClickCost: 10
}

function cookBacon() {
  gameData.bacon += gameData.baconPerClick
  document.getElementById("baconCooked").innerHTML = gameData.bacon + " Bacon cooked"
}

function buyBaconPerClick() {
  if(gameData.bacon >= gameData.baconPerClickCost) {
    gameData.bacon -= gameData.baconPerClickCost
    gameData.goldPerClick +=1
    gameData.goldPerClickCost *= 2
    document.getElementById("baconCooked").innerHTML = gameData.bacon +" Bacon cooked"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade frying pan (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Bacon"
  }
  var mainGameLoop = window.setInterval(function() {
  cookBacon()
}, 1000)
}
