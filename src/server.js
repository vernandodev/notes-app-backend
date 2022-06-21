import Hapi from "@hapi/hapi";

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: "localhost",
    });

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
};

init();
