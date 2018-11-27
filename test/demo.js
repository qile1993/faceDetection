// /*globals  $: true, getUserMedia: true, alert:true, ccv:true */

// /*! getUserMedia demo - v1.0
// * for use with https://github.com/addyosmani/getUserMedia.js
// * Copyright (c) 2012 addyosmani; Licensed MIT */




var snapshotBtn = document.getElementById('takeSnapshot');
snapshotBtn.onclick = function() {
    App.getSnapshot()
};