const form = document.getElementById("form")
const sortBtn = document.getElementById("sort-btn")
const output = document.getElementById("output")


const isValid = (numStr, ints) => {
    let errText = ""
    if (!numStr) {
        errText = "Please enter some numbers"
    } else if (ints < 1) {
        errText = "Please enter numbers that bigger than one"
    } else {
        return true
    }

    output.innerText = errText
    return false
}

form.addEventListener('submit', e => {
    e.preventDefault();
    updateUi()
});

sortBtn.addEventListener("click", () => {
    updateUi()
})

const bubbleSort = (array) => {
    for (let i=0; i<array.length;i++) {
        for (let j=0; j<array.length-1;j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

const updateUi = () => {
  const numStr = document.getElementById("numbers").value
  const ints = parseInt(numStr, 10)
    output.innerText = ""
  if (isValid(numStr, ints)) {
    let array = Array.from(String(ints), Number)
    output.innerText = bubbleSort(array)
  }

}