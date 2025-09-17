let suggestFriend = document.querySelector("h5")
let addFriend = document.querySelector("#addBtn") 
let doubleClick = 0;
/*let removeBtn = document.querySelector("#removeBtn")*/

addFriend.addEventListener('click', function () {
  if (doubleClick === 0) {
    suggestFriend.innerHTML = "Friend"
    suggestFriend.style.color = "green"
    addFriend.innerHTML = "Remove"
    addFriend.style.backgroundColor = "red"
    doubleClick = 1
  } else {
    suggestFriend.innerHTML = "Suggest Friend"
    suggestFriend.style.color = "black"
    addFriend.innerHTML = "Add Friend"
    addFriend.style.backgroundColor = "blue"
    doubleClick = 0
  }
})