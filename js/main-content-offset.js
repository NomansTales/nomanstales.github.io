function setMainContentOffset() {
            const header = document.querySelector('header');
            const body = document.querySelector('body');
            const headerHeight = header.offsetHeight;
            body.style.paddingTop = headerHeight + 'px';
        }

window.addEventListener('load', setMainContentOffset);
window.addEventListener('resize', setMainContentOffset);
