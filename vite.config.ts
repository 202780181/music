import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default {
    plugins: [vue()],
    server: {
        open:false,
        ssr:false,
        port: 8080,
    }
}
