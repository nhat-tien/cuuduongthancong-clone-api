const data = document.querySelectorAll('.subject-item a');
const array = Array.from(data);
const newArray = array.reduce(function(result, item) {
    var obj = {
        'href': item.href,
        'text': item.innerText
    }
    result.push(obj);
    return result;
},[])
localStorage.setItem("userData", JSON.stringify(newArray));
console.log(newArray);