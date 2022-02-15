const bmiRechner = () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const age = document.getElementById("age").value;

  const bmi = parseFloat(weight) / parseFloat(height) ** 2;

  document.getElementById("bmi").innerHTML = bmi.toFixed(0);
  let nachricht;
  

  if (age >= 19 && age <= 24) {
    if (bmi >= 19 && bmi <= 24) {
      nachricht = "Normal";
    } else if (bmi <= 18) {
      nachricht = "Untergewicht";
    } else if (bmi >= 25) {
      nachricht = "Übergewicht";
    }
  }
  if (age >= 25 && age <= 34) {
    if (bmi >= 20 && bmi <= 25) {
      nachricht = "Normal";
    } else if (bmi <=19) {
      nachricht = "Untergewicht";
    } else if (bmi >= 26) {
      nachricht = "Übergewicht";
    }
  }
  if (age >= 35 && age <= 44) {
    if (bmi >= 21 && bmi <= 26) {
      nachricht = "Normal";
    } else if (bmi <=20) {
      nachricht = "Untergewicht";
    } else if (bmi >= 27) {
      nachricht = "Übergewicht";
    }
  }
  if (age >= 45 && age <= 54) {
    if (bmi >= 22 && bmi <= 27) {
      nachricht = "Normal";
    } else if (bmi <= 21) {
      nachricht = "Untergewicht";
    } else if (bmi >= 28) {
      nachricht = "Übergewicht";
    }
  }
  if (age >= 55 && age <= 64) {
    if (bmi >= 23 && bmi <= 28) {
      nachricht = "Normal";
    } else if (bmi <= 22) {
      nachricht = "Untergewicht";
    } else if (bmi >= 29) {
      nachricht = "Übergewicht";
    }
  }
  if (age >= 65) {
    if (bmi >= 24 && bmi <= 28) {
      nachricht = "Normal";
    } else if (bmi <= 23) {
      nachricht = "Untergewicht";
    } else if (bmi >= 29) {
      nachricht = "Übergewicht";
    }
  }
  document.getElementById("nachricht").innerHTML = nachricht;
};
