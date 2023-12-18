function onSelectionChange(e) {
   var sheet = e.source.getActiveSheet();
   var range = e.range;
  
   // cleanup
   sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).setBackground(null);
  
   // line
   sheet.getRange(range.getRow(), 1, 1, sheet.getMaxColumns()).setBackground("#f0f4df"); // yellow
  
   // column
   sheet.getRange(1, range.getColumn(), sheet.getMaxRows(), 1).setBackground("#dff4f3"); // blue
}
