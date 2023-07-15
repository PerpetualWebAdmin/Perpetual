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
	console.log('test');
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
	
	let newPositionY = mapModal.offsetTop - new_y
	let newPositionX = mapModal.offsetLeft - new_x
	
	
	let currentHeight = mapModal.clientHeight
	let currentWidth = mapModal.clientWidth
	
	// boundary
	if(mapModal.clientWidth / mapModal.clientHeight < mapModal.naturalWidth / mapModal.naturalHeight) {
		currentHeight = (currentWidth * mapModal.naturalHeight) / mapModal.naturalWidth 
	} else if (mapModal.clientWidth / mapModal.clientHeight > mapModal.naturalWidth / mapModal.naturalHeight) { // wip

	}

	if(
		newPositionY - currentHeight/2 >= 0 
		|| newPositionY + currentHeight/2 <= window.innerHeight 
		|| newPositionX - currentWidth/2 >= 0 
		|| newPositionX + currentWidth/2 <= window.innerWidth ) {
			return
		}
	
	mapModal.style.cursor = 'grabbing'
	mapModal.style.top = (newPositionY) + 'px';
	mapModal.style.left = (newPositionX) + 'px';
}
const closeDrag = e => {
	console.log('mouse up event')
	document.onmousemove = null;
	document.onmouseup = null;
	mapModal.style.cursor = null;
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

mapModal.addEventListener('click', () =>{
	Modal.classList.remove('active');
})


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


//Escape Key
window.addEventListener('keydown', function(event){
    if(event.key === 'Escape'){
		Modal.classList.remove('active');
    }
} )