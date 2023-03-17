const popup = {};
popup.time = 1;
popup.key = 'click_popup_timer';
popup.getTime = () => {
    return Math.floor((new Date()).getTime() / 1000);
};
popup.check = () => {
    if (localStorage.getItem(popup.key) !== null) {
        if (popup.getTime() - localStorage.getItem(popup.key) <= popup.time) {
            return false;
        }
    }
    localStorage.setItem(popup.key, popup.getTime());
    return true;
};
popup.open = (url) => {
    window.open(url, '_blank');
};
popup.init = () => {
    let link = document.getElementById('popup_link');
    if (link) {
        if (link.dataset.link) {
            window.addEventListener('click', () => {
                if (popup.check()) {
                    popup.open(link.dataset.link);
                }
            });
        }
    }
};
popup.init();
