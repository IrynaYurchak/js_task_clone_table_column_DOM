'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const secondCell = row.cells[1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, row.cells[row.cells.length - 1]);
}
