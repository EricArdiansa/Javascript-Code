const util = require("util");

function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === "id") {
        resolve([
          { id: "id-jk", name: "Jakarta" },
          { id: "id-bt", name: "Banten" },
          { id: "id-jr", name: "Jawa Barat" },
        ]);
      } else {
        reject(new Error("Country not found"));
      }
    }, 1000);
  });
}

module.exports = { getProvinces };
