function serviceWorkerRegistration() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      /*global process*/
      /*eslint no-undef: "error"*/
      const SW_url = `${process.env.PUBLIC_PATH_MAIN_APP}service-worker.js`
      navigator.serviceWorker
        .register(SW_url)
        .then(() => {})
        .catch(() => {
          console.log('SW registration failed')
        })
    })
  }
}

export default serviceWorkerRegistration
