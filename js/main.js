const uncheckButton = document.querySelector("#uncheckButton");
const checklist = document.querySelector(".checklist");
const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');

uncheckButton.addEventListener("click", setUnchecked);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", congratulationAlert);
});

function setUnchecked() {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

function congratulationAlert() {
  const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
  if (allChecked) {
    alert("Договор проверен, поздравляем!");
  }
}

function bulletPointsToChecklist(bulletPointString) {
  const inputArray = bulletPointString.split("\n");
  let result = '<ul class="checklist">\n';
  inputArray.forEach((bulletPoint) => {
    const parts = bulletPoint.trim().split(/-(.+)/); // split by first dash
    const item = parts.length > 1 ? parts[1].trim() : "";

    const checkbox = `
        <li>
            <label>
                <input type="checkbox"> ${item}
            </label>
        </li>`.trim();
    result += checkbox;
    result += "\n";
  });
  result += "</ul>";
  return result;
}

function createHtml(title, bulletPointString) {
  const checklist = bulletPointsToChecklist(bulletPointString);

  return `
        <!DOCTYPE html>
        <html lang="ru">

        <head>
            <title>${title}</title> <!-- Вставляем название здесь -->

            <link rel="icon" type="image/jpg" href="../images/favicon.png" />
            <link rel="shortcut icon" type="image/jpg" href="../images/favicon.png" />
            <link rel="apple-touch-icon" type="image/jpg" href="../images/favicon.png" />

            <link rel="stylesheet" type="text/css" href="../css/styles.css">

            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>

        <body>
            <header>
                <h1>${title}</h1> <!-- Вставляем название здесь -->
            </header>

            <main>
                <!-- Меняем ниже этой строки -->
                ${checklist}
                <!-- Меняем выше этой строки -->

                <button id="uncheckButton">Снять выделение</button>
                <a id="indexLink" href="../index.html">На главную</a>
            </main>

            <footer>
                <p>© 2024</p>
            </footer>
            <script src="../js/main.js"></script>
        </body>

        </html>`.trim();
}
