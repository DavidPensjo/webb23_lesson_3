document.addEventListener("DOMContentLoaded", function () {
  const bookForm = document.getElementById("bookForm");
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(bookForm); // Create FormData object from the form

    fetch("http://localhost:3000/api/v1/books", {
      // Make sure the URL matches your server's configuration
      method: "POST",
      body: formData, // Use FormData object directly in body
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
});
