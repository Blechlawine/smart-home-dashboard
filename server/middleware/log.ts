export default defineEventHandler((event) => {
    console.log(`New Request: ${event.req.url}`);
});
