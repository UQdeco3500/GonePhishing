const images = document.querySelectorAll("img");
      const attachmentsContainer = document.getElementById("attachments");
      const fileInput = document.getElementById("file-input");
      const fileLabel = document.getElementById("file-label");
      const sendButton = document.getElementById("send-button");

      images.forEach((image) => {
        image.addEventListener("click", function () {
          // Toggle the image source between 'assets/phish_send_light.PNG' and 'assets/phish_send_dark.PNG' when clicked
          if (this.src.includes("light")) {
            this.src = this.src.replace("light.PNG", "dark.PNG");
            fileInput.setAttribute("accept", this.getAttribute("data-attachment"));
            fileInput.style.display = "block";
            fileLabel.style.display = "block";
            sendButton.style.display = "block";
          } else {
            this.src = this.src.replace("dark.PNG", "light.PNG");
            fileInput.style.display = "none";
            fileLabel.style.display = "none";
            sendButton.style.display = "none";
          }
        });
      });