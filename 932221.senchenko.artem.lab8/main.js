document.getElementById("addBtn").addEventListener("click", () => addRow());
document.getElementById("saveBtn").addEventListener("click", saveData);

function addRow(text = "", number = "") {
  const container = document.getElementById("list");

  const row = document.createElement("div");
  row.className = "row";

  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.value = text;
  textInput.placeholder = "Текст";

  const numInput = document.createElement("input");
  numInput.type = "number";
  numInput.value = number;
  numInput.placeholder = "Число";

  const upBtn = document.createElement("button");
  upBtn.textContent = "↑";
  upBtn.title = "Переместить вверх";
  upBtn.onclick = () => moveRow(row, -1);

  const downBtn = document.createElement("button");
  downBtn.textContent = "↓";
  downBtn.title = "Переместить вниз";
  downBtn.onclick = () => moveRow(row, 1);

  const delBtn = document.createElement("button");
  delBtn.textContent = "×";
  delBtn.title = "Удалить";
  delBtn.onclick = () => row.remove();

  row.append(textInput, numInput, upBtn, downBtn, delBtn);
  container.appendChild(row);
}

function moveRow(row, dir) {
  const parent = row.parentElement;
  const rows = [...parent.children];
  const index = rows.indexOf(row);
  const target = index + dir;

  if (target < 0 || target >= rows.length) return;
  if (dir === -1) parent.insertBefore(row, rows[target]);
  else parent.insertBefore(rows[target], row);
}

function saveData() {
  const rows = document.querySelectorAll("#list .row");
  const result = {};

  rows.forEach(r => {
    const key = r.querySelector('input[type="text"]').value.trim();
    const value = r.querySelector('input[type="number"]').value.trim();
    if (key) result[key] = value;
  });

  const output = document.getElementById("output");
  output.textContent = JSON.stringify(result, null, 2);
}

addRow();
