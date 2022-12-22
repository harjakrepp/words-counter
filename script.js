/*SHOW INFORMATION*/
//information box
function showinfo(){
	info = document.getElementById('info');
	if(info.style.display === "none"){
		info.style.display = "block";
	} else{
		info.style.display = "none";
	}
	
}
/*words color identity
let pgrBtn = document.getElementById('paragraph-btn');
let wordBtn = document.getElementById('word-btn');
let allcharBtn = document.getElementById('allchar-btn');
let wscharBtn = document.getElementById('wschar-btn');
pgrBtn.style.backgroundColor = "skyblue";
pgrBtn.style.margin = "2px";
wordBtn.style.backgroundColor = "lime";
wordBtn.style.margin = "2px";
allcharBtn.style.backgroundColor = "yellow";
allcharBtn.style.margin = "2px";
wscharBtn.style.backgroundColor = "orange";
wscharBtn.style.margin = "2px";*/

/*EDIT TEXT MENU*/
//copy text button
function copyText(){
	let copyArea = document.getElementById('input-area');
	copyArea.select();
	copyArea.setSelectionRange(0, 999999);
	navigator.clipboard.writeText(copyArea.value);
}
//clear text button
function clearText(){
	let clearInputArea = document.getElementById('input-area');
	if(clearInputArea.value != ""){
		clearInputArea.value = "";
	}
}
/*WORDS COUNTER*/
let inputArea = document.getElementById('input-area');
let wscharCount = document.getElementById('ws-chars-count');
let dcharCount = document.getElementById('d-chars-count');
let dwordCount = document.getElementById('d-words-count');
let charCount = document.getElementById('chars-count');
let wordCount = document.getElementById('words-count');
let paragraphCount = document.getElementById('paragraph-count');
let wordText, charText, wsText, slcText, g, i, stripWspace;

inputArea.addEventListener("input", ()=> {
	//for paragraph count
	slcText = inputArea.value;
	slcText = slcText.split('\n\n');
	g = slcText.length;
	i = null;
	stripWspace = /\s+/gi;
	while (g >= 0){
		g--;
		let tmp = slcText[g];
		tmp = tmp ? tmp.replace(stripWspace, "") : tmp;
		if(tmp && tmp.length > 1){
			i++;
		}
	}
	paragraphCount.textContent = i;
	//for word count
	wordText = inputArea.value.trim();
	dwordCount.textContent = wordText.split(/\s+/).filter((item) => item).length;
	wordCount.textContent = wordText.split(/\s+/).filter((item) => item).length;
	//for character count
	dcharCount.textContent = inputArea.value.length;
	charCount.textContent = inputArea.value.length;
	//for character count without space
	charText = inputArea.value;
	wsText = charText.replace(/\s/g, "");
	wscharCount.textContent = wsText.length;
});