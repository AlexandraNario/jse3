function GiveMeResult() {
  let previous_operand = Number(document.getElementById("previous-operand").value);

  let next_previous = Number(document.getElementById("next-previous").value);

  let resultSpan = document.getElementById("result");

  let resultNum = null;
  //grab the operator and the select and the value is whatever value we are grabbing which is currently the add
  let operator = document.querySelector("select").value;

  switch (operator) {
      case '>':
        resultNum = previous_operand > next_previous;
        resultSpan.innerHTML = resultNum;
        break;
      case '<':
        resultNum = previous_operand < next_previous;
        resultSpan.innerHTML = resultNum;
        break;
      case '!=':
        resultNum = previous_operand != next_previous;
        resultSpan.innerHTML = resultNum;
        break;
    default:
      resultNum = previous_operand + next_previous;
      resultSpan.innerHTML = resultNum;
  }
}
