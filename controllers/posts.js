const express = require('express');

const postData = [
    {
        admin: 'admin',
        datum: '2020.03.14.',
        title: 'How To Kung Fu',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lacinia leo. Quisque vel molestie risus, nec lacinia elit. Cras commodo venenatis mauris, at efficitur dui semper a. Praesent elit dui, pulvinar vel turpis et, iaculis blandit leo.Nunc rhoncus facilisis elit nec convallis. Maecenas pharetra eros eget purus eleifend imperdiet. Ut euismod erat in libero fringilla ultricies.'
    },
    {
        admin: 'admin',
        datum: '2020.03.10.',
        title: 'Taking the red pill',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id lacinia leo. Quisque vel molestie risus, nec lacinia elit. Cras commodo venenatis mauris, at efficitur dui semper a. Praesent elit dui, pulvinar vel turpis et, iaculis blandit leo.Nunc rhoncus facilisis elit nec convallis. Maecenas pharetra eros eget purus eleifend imperdiet. Ut euismod erat in libero fringilla ultricies.'
    }
]


module.exports = class Posts {
    getPosts(req, res) {
        res.render('posts', { postData });
    }
}