function mobileNav() {
	// Mobile nav button
	
	const openMobileNavBtn = document.querySelector('.nav-btn');
	const closeMobileNavBtn = document.querySelector('.btn__mobile-nav');
	const nav = document.querySelector('.mobile-nav');
	const overlay = document.querySelector('.mobile__nav-overlay');

	openMobileNavBtn.onclick = toggleMobileNav;
	closeMobileNavBtn.onclick = toggleMobileNav;
	overlay.onclick = toggleMobileNav;
	
	function toggleMobileNav () {
		nav.classList.toggle('mobile-nav-open');
		overlay.classList.toggle('mobile__nav-overlay-open');
		document.body.classList.toggle('no-scroll');
	};

}

export default mobileNav;