document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = document.getElementById("applicationForm");

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    const formData = {
      name: name,
      phone: phone,
      email: email,
    };

    fetch("https://api.jsonbin.io/v3/b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2a$10$Tc3b3Vmi1lNbh/Mgi8QDeuWjZjLPR.NdkwxA/VbsCm2dS/2/aP9X2",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Успішно збережено:", data);
        alert("Дані успішно відправлені на JSONBin.io!");
        form.reset();
      })
      .catch((error) => {
        console.error("Помилка:", error);
        alert("Сталася помилка при відправленні даних.");
      });
  });