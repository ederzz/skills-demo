window.onload = () => {
	var icon_export = document.querySelector(".list-con ul");
	var share_icon = document.querySelector(".list-con .share-link");
	icon_export.addEventListener('mouseover',(e) => {
		if(e.target.className == "icon icon-export"){
			e.target.style.visibility = "hidden";
			e.target.parentNode.previousSibling.previousSibling.style.display = 'block';
		}
	})
	icon_export.addEventListener('mouseout',(e) => {
		if(e.target.className == "share-link"){
			e.target.style.display = "none";
			e.target.nextSibling.nextSibling.firstChild.nextSibling.style.visibility = 'visible';
		}
	})
}
