import {createApp from 'vue'}
import '.'

import router from '.'

createApp(App)
    .use(router)
    .mount(router)
    