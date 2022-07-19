import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav/Nav";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../store/store";

const fullPagePaths = [
    "/login",
    "/register",
    "/questions/create",
    "/topics",
    "/topics/create",
    "/search",
    "/questions/my-questions",
    "/blogs/my-blogs",
    "/profile",
    "/admin/topics",
    "/admin/users",
    "/admin/doctors"
];

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <Provider store={store}>
            <div className={`bg-dark ${fullPagePaths.includes(router.pathname) && "vh-100"}`}>
                <NextNProgress color="#0D6EFD" startPosition={0.2} stopDelayMs={500} height={3} showOnShallow={true} />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Nav />
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default MyApp;
