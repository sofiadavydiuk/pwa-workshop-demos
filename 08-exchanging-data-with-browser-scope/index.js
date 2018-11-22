const textarea = document.querySelector('textarea');

if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: '.'
    }).then(function(registration) {
        console.log('The service worker has been registered ', registration);
    });

    navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('execution');
        textarea.value = `${textarea.value} \n ${event.data.payload}`;
        // console.log(event.data);
    });
}