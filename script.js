const popup = {};
popup.key = 'click_popup_timer';
popup.getTime = () => {
    return Math.floor((new Date()).getTime() / 1000);
};
popup.check = (time) => {
    if (localStorage.getItem(popup.key) !== null) {
        if (popup.getTime() - localStorage.getItem(popup.key) <= time) {
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
        if (link.dataset.link && link.dataset.time) {
            window.addEventListener('click keypress', () => {
                if (popup.check(link.dataset.time)) {
                    popup.open(link.dataset.link);
                }
            });
        }
    }
};
popup.init();
