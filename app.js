var txtButton = document.querySelector("#btn");
var txtTranslate = document.querySelector("#usrinput");
var txtoutput =  document.querySelector('#output');
var Serverurl='https://api.funtranslations.com/translate/minion.json';

function getTranslation(input)
{
    return Serverurl + "?"+"text=" + input
}

function errorHandler(error)
{
    console.log("error occured",error);
    alert("something wrong with server. try after some time");
}

function clickHandler()
{

    var inputText=txtTranslate.value;

    fetch(getTranslation(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText= json.contents.translated;
        txtoutput.innerHTML= translatedText;
    })
    .catch(errorHandler)
};

txtButton.addEventListener("click",clickHandler);