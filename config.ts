const ENV = "localhost" as const; // Explicitly mark it as constant

const Config = {
    //@ts-ignore
    API_URL: ENV === "localhost"
        ? "http://192.168.50.212:8000"
        : "",
    ENV,
};

export default Config;
