const stccacheName = "cipherCache_04_28_2022"

this.addEventListener('install', (event) => {

    this.skipWaiting()

    event.waitUntil(

        caches.open(stccacheName).then((cache) => {

            return cache.addAll([
                './index.html',
                './ui/root.css',
                './ui/window.css',
                './ui/elements.css'
            ])

        })

    )

})

this.addEventListener('activate', (event) => {

    event.waitUntil(

        caches.keys().then( (cacheNames) => {

            return cacheNames
                        .filter((cache) => (cache.startsWith("cipherCache_")))
                        .filter((cache) => (cache !== stccacheName))
                        .map((cache) => (caches.delete(cache)))

        })

    )

})

this.addEventListener('fetch', (event) => {

    return fetch(event.request)

})

/*
If this code is weird, it's because I don't really know how to make a service worker
*/