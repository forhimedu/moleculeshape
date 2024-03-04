const firstrow = document.getElementById('firstrow');
const secondrow = document.getElementById('secondrow');
const thirdrow = document.getElementById('thirdrow');
const fourthrow = document.getElementById('fourthrow');
const fifthrow = document.getElementById('fifthrow');
const correctAns = document.getElementById('correctAnswers');
const submitButtonWrapper = document.getElementById('submitButtonWrapper');
let returnValue = false;


function toSup(value){
    return value.sup();
}

function toSub(value){
    return value.sub()
}


const allData = [
    ["бериллий хлориді", `BeCl${toSub("2")}`, `sp`, "сызықтық", "сызықтық"],
    ["көмірқышқыл газы", `CO${toSub("2")}`, `sp`, "сызықтық", "сызықтық"],
    ["көміртек дисульфиді", `CS${toSub("2")}`, `sp`, "сызықтық", "сызықтық"],
    ["бериллий гидриді", `BeH${toSub("2")}`, `sp`, "сызықтық", "сызықтық"],

    ["қалайы(II) хлориді", `SnCl${toSub("2")}`, `sp${toSup("2")}`, "бұрыштық", "дұрыс үшбұрыш"],
    ["Күкірт диоксиді", `SO${toSub("2")}`, `sp${toSup("2")}`, "бұрыштық", "дұрыс үшбұрыш"],
    ["қорғасын(II) хлориді", `PbCl${toSub("2")}`, `sp${toSup("2")}`, "бұрыштық", "дұрыс үшбұрыш"],
    ["селен диоксиді", `SeO${toSub("2")}`, `sp${toSup("2")}`, "бұрыштық", "дұрыс үшбұрыш"],

    ["бор трифториді", `BF${toSub("3")}`, `sp${toSup("2")}`, "дұрыс үшбұрыш", "дұрыс үшбұрыш"],
    ["күкірт триоксиді", `SO${toSub("3")}`, `sp${toSup("2")}`, "дұрыс үшбұрыш", "дұрыс үшбұрыш"],
    ["карбонат ионы", `CO${toSub("3")}${toSup('-2')}`, `sp${toSup("2")}`, "дұрыс үшбұрыш", "дұрыс үшбұрыш"],
    ["күкірт триоксиді", `SO${toSub("3")}`, `sp${toSup("2")}`, "дұрыс үшбұрыш", "дұрыс үшбұрыш"],

    ["метан", `CH${toSub("4")}`, `sp${toSup("3")}`, "тетраэдр", "тетраэдр"],
    ["тетрахлорметан", `CCl${toSub("4")}`, `sp${toSup("3")}`, "тетраэдр", "тетраэдр"],
    ["аммоний ионы", `NH${toSub("4")}${toSup("+")}`, `sp${toSup("3")}`, "тетраэдр", "тетраэдр"],
    ["фосфат ионы", `PO${toSub("4")}${toSup("-3")}`, `sp${toSup("3")}`, "тетраэдр", "тетраэдр"],

    ["су", `H${toSub("2")}O`, `sp${toSup("3")}`, "бұрыштық", "тетраэдр"],
    ["кукіртсутек", `H${toSub("2")}S`, `sp${toSup("3")}`, "бұрыштық", "тетраэдр"],
    ["оттек дифториді", `OF${toSub("2")}`, `sp${toSup("3")}`, "бұрыштық", "тетраэдр"],
    ["хлорит ионы", `ClO${toSub("2")}${toSup("-")}`, `sp${toSup("3")}`, "бұрыштық", "тетраэдр"],

    ["аммиак", `NH${toSub("3")}`, `sp${toSup("3")}`, "үшбұрышты пирамида", "тетраэдр"],
    ["фосфин", `PH${toSub("3")}`, `sp${toSup("3")}`, "үшбұрышты пирамида", "тетраэдр"],
    ["оксоний ионы", `H${toSub("3")}O${toSup("+")}`, `sp${toSup("3")}`, "үшбұрышты пирамида", "тетраэдр"],
    ["ксенон триоксиді", `XeO${toSub("3")}`, `sp${toSup("3")}`, "үшбұрышты пирамида", "тетраэдр"],
    ["фосфор трихлориді", `PCl${toSub("3")}`, `sp${toSup("3")}`, "үшбұрышты пирамида", "тетраэдр"],

    ["фосфор пентахлориді", `PCl${toSub("5")}`, `sp${toSup("3")}d`, "тригональді бипирамида", "тригональді бипирамида"],
    ["фосфор пентафториді", `PF${toSub("5")}`, `sp${toSup("3")}d`, "тригональді бипирамида", "тригональді бипирамида"],
    ["мышьяк пентафториді", `AsF${toSub("5")}`, `sp${toSup("3")}d`, "тригональді бипирамида", "тригональді бипирамида"],
    ["мышьяк пентахлориді", `AsCl${toSub("5")}`, `sp${toSup("3")}d`, "тригональді бипирамида", "тригональді бипирамида"],

    ["күкірт тетрафториді", `SF${toSub("4")}`, `sp${toSup("3")}d`, "әткеншек", "тригональді бипирамида"],
    ["селен тетрафториді", `SeF${toSub("4")}`, `sp${toSup("3")}d`, "әткеншек", "тригональді бипирамида"],
    ["ксенон диоксифториді", `XeO${toSub("2")}F${toSub("2")}`, `sp${toSup("3")}d`, "әткеншек", "тригональді бипирамида"],

    ["селен гексахлориді", `SeCl${toSub("6")}`, `sp${toSup("3")}d${toSup("2")}`, "октаэдр", "октаэдр"],
    ["күкірт гексафторид", `SF${toSub("6")}`, `sp${toSup("3")}d${toSup("2")}`, "октаэдр", "октаэдр"],




  

]



function checkArray(value1, value2, value3,value4, value5,  arrayList) {
    returnValue = false;
    arrayList.forEach(element => {
        if (value1 == element[0] && value2 == element[1] && value3 == element[2] &&
            value4 == element[3] && value5 == element[4]) {
            returnValue = true;
        }
    })
    return returnValue;
}



/**

 */
function removeClassName(classNameRemoved, classNameType ) {
    const classRemove = document.querySelectorAll(`.${classNameType}`);
       
    classRemove.forEach(element => {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected")
        }
    })
}

function clearVariables(val1, val2, val3, val4, val5) {
    val1 = null;
    val2 = null;
    val3 = null;
    val4 = null;
    val5 = null;
}


function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}

function App() {
    submitButtonWrapper.innerHTML = "";
    const shuffled = allData.sort(() => 0.5 - Math.random());
    let data = shuffled.slice(0, 4);
    /** 
     * Here, each element that is picked from each row will be stored here
     */
    let row1SelectedElement = null;
    let row2SelectedElement = null;
    let row3SelectedElement = null;
    let row4SelectedElement = null;
    let row5SelectedElement = null;


    data.forEach(element => {
        // first row related 
        const spanElement1 = document.createElement('span');
        spanElement1.innerHTML = element[0];
        spanElement1.classList.add('card', "rowOne");
        spanElement1.addEventListener('click', () => {
            removeClassName("selected","rowOne");
            spanElement1.classList.add('selected');
            row1SelectedElement = spanElement1.innerHTML;
        })
        firstrow.appendChild(spanElement1);
    })
    shuffleArray(data);
    data.forEach(element => {
        // second row related
        const spanElement2 = document.createElement('span');
        spanElement2.innerHTML = element[1];
        spanElement2.classList.add('card', 'rowTwo');
        spanElement2.addEventListener('click', () => {
            removeClassName('selected', 'rowTwo');
            spanElement2.classList.add('selected');
            row2SelectedElement = spanElement2.innerHTML;
        })
        secondrow.appendChild(spanElement2);
    })
    shuffleArray(data);
    data.forEach(element => {
        // third row related
        const spanElement3 = document.createElement('span');
        spanElement3.innerHTML = element[2];
        spanElement3.classList.add('card', 'rowThree');
        spanElement3.addEventListener('click', () => {
            removeClassName('selected','rowThree');
            spanElement3.classList.add('selected');
            row3SelectedElement = spanElement3.innerHTML;
        })
        thirdrow.appendChild(spanElement3);
    })
    data.forEach(element => {
        // fourth row elements
        const spanElement4 = document.createElement('span');
        spanElement4.innerHTML = element[3];
        spanElement4.classList.add('card', 'rowFour');
        spanElement4.addEventListener('click', () => {
            removeClassName('selected','rowFour');
            spanElement4.classList.add('selected');
            row4SelectedElement = spanElement4.innerHTML;
        })
        fourthrow.appendChild(spanElement4);
    })
    data.forEach(element => {
        // fifth row related
        const spanElement5 = document.createElement('span');
        spanElement5.innerHTML = element[4];
        spanElement5.classList.add('card', 'rowFive');
        spanElement5.addEventListener('click', () => {
            removeClassName('selected','rowFive');
            spanElement5.classList.add('selected');
            row5SelectedElement = spanElement5.innerHTML;
        })
        fifthrow.appendChild(spanElement5);
    })


    let submitButton = document.createElement('button');
    submitButton.id = 'submitButton';
    submitButton.innerHTML = 'Жауапты қабылда'
    submitButtonWrapper.appendChild(submitButton);
    submitButton.addEventListener('click', () => {
        const removeAllElems = document.querySelectorAll('.selected');
        if (checkArray(row1SelectedElement, row2SelectedElement, row3SelectedElement,
            row4SelectedElement, row5SelectedElement, data)) {
            removeAllElems.forEach(elem => {
                elem.remove();
            })
        let n = correctAns.childElementCount;
        if (n == 6) {
            correctAns.innerHTML = "";
        } 
        let newDiv = document.createElement('div');
        newDiv.classList.add('answers');
        let newSpan1 = document.createElement('span')
        let newSpan2 = document.createElement('span')
        let newSpan3 = document.createElement('span')
        let newSpan4 = document.createElement('span')
        let newSpan5 = document.createElement('span')
        newSpan1.innerHTML = row1SelectedElement;
        newDiv.appendChild(newSpan1);
        newSpan2.innerHTML = row2SelectedElement;
        newDiv.append(newSpan2);
        newSpan3.innerHTML = row3SelectedElement;
        newDiv.append(newSpan3);
        newSpan4.innerHTML = row4SelectedElement;
        newDiv.append(newSpan4);
        newSpan5.innerHTML = row5SelectedElement;
        newDiv.append(newSpan5);
        correctAns.appendChild(newDiv);
 
        } else {
            const removeAllElems = document.querySelectorAll('.selected');
            removeAllElems.forEach(elem => {
              elem.classList.remove('selected');  
            })
        }
        row1SelectedElement = null;
        row2SelectedElement = null;
        row3SelectedElement = null;
        row4SelectedElement = null;
        row5SelectedElement = null;
        if (firstrow.hasChildNodes()) {
        } else {
            App();
        }
    })
    

}

App();
