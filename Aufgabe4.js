document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form data
    var gaType = document.getElementById("gaType").value;
    var pricePerMonth = document.getElementById("pricePerMonth").value;
    var pricePerYear = document.getElementById("pricePerYear").value;
  
    // Display form data
    console.log("Bestellte GA Typ: " + gaType);
    console.log("Preis pro Monat: " + pricePerMonth);
    console.log("Preis pro Jahr: " + pricePerYear);
  
    // Hier könnte die Verarbeitung der Daten erfolgen, z.B. Versenden an einen Server
  });
  