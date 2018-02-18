console.log(this.editor)
re=this.editor
document.onkeydown = function(e) {
	var keyCode = e.keyCode || e.which || e.charCode;
	var ctrlKey = e.ctrlKey || e.metaKey;
	if(ctrlKey && keyCode == 66) {	// b
		var editor=re;
		var e='**',
		t=editor.selection.smartRange(),n=editor.getCursorPosition();n.column+=e.length,editor.session.replace(t,e+editor.session.getTextRange(t)+e),editor.moveCursorToPosition(n),editor.selection.clearSelection(),editor.focus()
	} else if(ctrlKey && keyCode == 73) {	//i
		var editor=re;
		var e='*',
		t=editor.selection.smartRange(),n=editor.getCursorPosition();n.column+=e.length,editor.session.replace(t,e+editor.session.getTextRange(t)+e),editor.moveCursorToPosition(n),editor.selection.clearSelection(),editor.focus()
	} else if(ctrlKey && keyCode == 77) {	// m
		var editor=re;
		var e="`$ ",
		t=editor.selection.smartRange(),n=editor.getCursorPosition();n.column+=e.length,editor.session.replace(t,e+editor.session.getTextRange(t)+" $`"),editor.moveCursorToPosition(n),editor.selection.clearSelection(),editor.focus()
	} else if(ctrlKey && keyCode == 81) {	// q
		var editor=re;
		var e='> ',t=editor.getCursorPosition();t.column+=e.length;for(var n=editor.selection.getRange(),r=n.start.row+1;r<n.end.row+2;r++)editor.gotoLine(r),editor.insert(e);editor.moveCursorToPosition(t),editor.focus()
	} else if(ctrlKey && keyCode == 85) {	//u
		var editor=re;
		var e='- ',t=editor.getCursorPosition();t.column+=e.length;for(var n=editor.selection.getRange(),r=n.start.row+1;r<n.end.row+2;r++)editor.gotoLine(r),editor.insert(e);editor.moveCursorToPosition(t),editor.focus()
	} 

        return true;
    }
document.onkeypress = function(e) {
	var keyCode = e.keyCode || e.which || e.charCode;
	var ctrlKey = e.ctrlKey || e.metaKey;
	if( keyCode == 13) {	//enter
		var editor=re;
		editor.insert('  ')
	} 
}
//else if(ctrlKey && keyCode == 89) {//y horizon	
//		var editor=re;
//		var e=editor.getCursorPosition();0==e.column?(editor.selection.clearSelection(),editor.insert("\n---\n")):(editor.navigateTo(editor.getSelectionRange////().start.row,Number.MAX_VALUE),editor.insert("\n\n---\n")),editor.focus()
//	} 
