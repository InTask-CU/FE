import {
	MutationCache,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { Toast } from "./utils/toast.ts";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
	mutationCache: new MutationCache({
		onError: (error) => {
			if (error instanceof AxiosError) {
				Toast.error(error.response?.data.message);
			}
		},
	}),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ToastContainer />
				<App />
				<ReactQueryDevtools initialIsOpen={false} />
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>
);
