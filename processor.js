function isValidCode(code) {
  if (code.length !== 7) return false;

  for (let i = 0; i < 3; i++) {
    const ch = code[i];
    if (ch < "A" || ch > "Z") return false;
  }

  for (let i = 3; i < 7; i++) {
    const digit = code[i];
    if (digit < "0" || digit > "9") return false;
  }

  return true;
}

function isAscendingDigits(numberStr) {
  for (let i = 0; i < numberStr.length - 1; i++) {
    if (numberStr[i] > numberStr[i + 1]) {
      return false;
    }
  }
  return true;
}

function processData(data) {
  const normalizedValidCode = [];

  for (const code of data) {
    const normalized = code.toUpperCase();

    if (isValidCode(normalized)) {
      const numberPart = normalized.slice(3);
      if (isAscendingDigits(numberPart)) {
        normalizedValidCode.push(normalized);
      }
    }
  }
  normalizedValidCode.sort();
  return {
    totalCodes: data.length,
    validCodes: normalizedValidCode.length,
    invalidCodes: data.length - normalizedValidCode.length,
    normalizedValidCode,
  };
}

module.exports = { processData };
