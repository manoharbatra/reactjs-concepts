# React + Vite

When you checkout any branch, always run npm i or npm install or yarn install to install dependencies

Let's consider an example of using interceptors in the Axios library, which is commonly used for making HTTP requests in JavaScript applications.

In Axios, interceptors allow you to intercept HTTP requests or responses before they are handled by the application or before they are sent to the server. This is useful for tasks such as adding authentication tokens to requests, logging requests and responses, handling errors globally, and more.

we've added a request interceptor that checks if a token is available in the localStorage. If a token is found, it adds it to the request headers with the "Authorization" key as a Bearer token.

You can now store the token in the localStorage when the user logs in, and it will be automatically included in the headers of all subsequent requests made using axiosInstance.

In the above example:

1. We use axios.interceptors.request.use() to add a request interceptor. This interceptor will be triggered before each HTTP request is sent. We can modify the request configuration (config) as needed, such as adding headers.

2. We use axios.interceptors.response.use() to add a response interceptor. This interceptor will be triggered before each HTTP response is passed to the application. We can modify the response data or handle errors globally.

By using interceptors, we can centralize common tasks related to HTTP requests and responses, making our code more modular, reusable, and easier to maintain.


In this example, we've created a App.jsx file with a functional component called App. Inside this component, we use state variables to manage the loading state, error state, and fetched data. We also define a fetchData function to make a GET request to the JSONPlaceholder API when the "Fetch Data" button is clicked.

Now, you can import and use App in your application, and clicking the button will fetch data from the JSONPlaceholder API.