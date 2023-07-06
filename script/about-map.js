const Modal = document.querySelector('.map-modal')
const mapModal = document.querySelector('.map-modal > img')
let initial_x = 0, initial_y = 0
let new_x = 0, new_y = 0
let zoomLevel = 0;

mapModal.addEventListener('mousedown', e => {
	e = e || window.event;
	e.preventDefault()
	if(!zoomLevel) return;
	initial_x = e.clientX
	initial_y = e.clientY

	document.onmouseup = closeDrag
	document.onmousemove = elementDrag
})
const elementDrag = e => {
	e = window.event;
	

	new_x = e.clientX;
	new_y = e.clientY;

	tmp = [new_x,new_y]
	new_x = initial_x - new_x
	new_y = initial_y - new_y;

	initial_x = tmp[0]
	initial_y = tmp[1]
	
	mapModal.style.top = (mapModal.offsetTop - new_y) + 'px';
	mapModal.style.left = (mapModal.offsetLeft - new_x) + 'px';
	mapModal.style.cursor = 'grabbing'
}
const closeDrag = e => {
	console.log('mouse up event')
	mapModal.style.cursor = null;
	document.onmousemove = null;
	document.onmouseup = null;
}

//Modal Section
const openModal = (e) => {
	Modal.classList.add('active')
	document.querySelector('.map-modal > img').src = e.target.src;

}

document.querySelectorAll('.map-imgs-container > img').forEach(n => {
	n.addEventListener('click', openModal)
})

const closeModal = (e) => {
	mapModal.removeAttribute('style')
 Modal.classList.remove('active')
	zoomLevel = 0
}


//Zoom Section
document.querySelector('.modal-zoom.in').addEventListener('click', e => {
	if(zoomLevel < 4)
	zoomLevel++;
	adjustZoom(zoomLevel)
})
document.querySelector('.modal-zoom.out').addEventListener('click', e => {
	if(zoomLevel > 0)
	zoomLevel--;
	adjustZoom(zoomLevel)
})

const adjustZoom = (x) => {
	mapModal.style.width = 80 + (80 * x) + '%'
	mapModal.style.height = 100 + (100 * x) + '%'

	if(zoomLevel == 0) {
		mapModal.removeAttribute('style')
	}
}