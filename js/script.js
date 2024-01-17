function validateAndConvertToNumber(inputValue) {
  const numericValue = parseFloat(inputValue);

  if (!isNaN(numericValue)) {
    return numericValue;
  } else {
    alert("input tidak valid");
    throw new Error("input tidak valid");
  }
}

function hitungLuas() {
  const inputLuas = document.getElementById("input-luas");
  const resultLuas = document.getElementById("result-luas");
  const inputValue = inputLuas.value;

  try {
    const sisi = validateAndConvertToNumber(inputValue);
    if (sisi) {
      const hasil = sisi * sisi;
      resultLuas.innerHTML = `
      <ul>
      <li>
      L = S x S
      </li>
      <li>
      L = ${sisi} x ${sisi}
      </li>
      <li>
      L = ${hasil}
      </li>
      </ul>
      `;
    }
  } catch (error) {}
}

function resetLuas() {
  const resultLuas = document.getElementById("result-luas");
  const inputLuas = document.getElementById("input-luas");

  resultLuas.innerHTML = "";
  inputLuas.value = "";
}

function hitungKeliling() {
  const inputKeliling = document.getElementById("input-keliling");
  const resultKeliling = document.getElementById("result-keliling");
  const inputValue = inputKeliling.value;

  try {
    const sisi = validateAndConvertToNumber(inputValue);
    if (sisi) {
      const hasil = 4 * sisi;
      resultKeliling.innerHTML = `
        <ul>
        <li>
        K = 4 x S
        </li>
        <li>
        L = 4 x ${sisi}
        </li>
        <li>
        K = ${hasil}
        </li>
        </ul>
        `;
    }
  } catch (error) {}
}

function resetKeliling() {
  const resultKeliling = document.getElementById("result-keliling");
  const inputKeliling = document.getElementById("input-keliling");

  resultKeliling.innerHTML = "";
  inputKeliling.value = "";
}
