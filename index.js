const menuItems = document.querySelectorAll('.menu-items li')
const menuItemsContainer = document.querySelector('.menu-items')
const notifications = document.querySelectorAll('.menu-items .notification-list');
const messages = document.querySelectorAll('.message');
const searchInput = document.querySelector('#message-search');
const theme = document.querySelector('.theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const colors = document.querySelectorAll('.choose-color span');

const removeClassActive = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

const hideNotifications = () => {
    notifications.forEach(element => element.style.display = 'none');
}

// HIDE OR SHOW NOTIFICATION LIST
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        removeClassActive()
        hideNotifications()
        item.classList.add('active')

        if (item.querySelector('.notification-list')) {
            item.querySelector('.notification-list').style.display = 'block'
        }

    })
})


//SEARCH MESSAGES
const searchMessages = () => {
    const input = searchInput.value.trim().toLowerCase();
    messages.forEach(message => {
        let sender = message.querySelector('h5').textContent.toLowerCase();

        if (sender.indexOf(input) != -1) {
            message.style.display = 'flex';
        } else {
            message.style.display = 'none';
        }
    })
}

searchInput.addEventListener('keyup', searchMessages)

// OPEN MODAL
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);

// CLOSE MODAL
const closeThemeModal = (event) => {
    if (event.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);


const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

// CHANGE FONT SIZES
fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem')
            root.style.setProperty('----sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem')
            root.style.setProperty('----sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem')
            root.style.setProperty('----sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem')
            root.style.setProperty('----sticky-top-right', '-35rem')
        }
        document.querySelector('html').style.fontSize = fontSize;
    })

})

const removeActiveColorClass = () => {
    colors.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// Change primary color
colors.forEach(color => {
    color.addEventListener('click', () => {

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        removeActiveColorClass();
        color.classList.add('active');
        root.style.setProperty('--primary-hue-color', primaryHue)
    })
})