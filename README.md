# DevTinder Front End App.

1. Create Vite + React Application.
2. npm i // for installing all the dependencies
3. npm run dev // run the application.
4. Remove unnecessory code and create hello world file.
5. git init
6. Now install tailwing CSS (https://v3.tailwindcss.com/docs/guides/vite)
   npm install -D tailwindcss@3 postcss autoprefixer
   npx tailwindcss init -p
7. install daisyUI as a tailwind CSS plugin  
   npm i -D daisyui@latest
8. Add navbar component from daisyUI, also add themes.

9. Create a seprate NavBar Component.
10. Now install react-router.
    npm i react-router-dom
11. add BrowserRouter in App.jsx and set Routes.
    Body
    NavBar
    Route('/'): HomePage
    Route('/login') : login Page
    Route('/connection'): Connection Page
    Route('/profile'): Profile Page.
    Footer
12. Create an Outlet in your Body Compnent.
13. Add Footer (get Footer component from daisyUI.)

14. Create a Login Page.
15. now create function to call login API (using Axios)

    install Axios
    npm i axios

16. now install CORS module if are not installed it on backend and add below code:
    const cors = require("cors");
    app.use(cors({
    origin:"http://localhost:5173", //so this is for whitelisting
    credentials:true
    }));

17) Now you have to also add below code in Axios api call in login component.
    try {
    const res = await axios.post("http://localhost:7777/api/login", {
    email: email,
    password: password,
    },
    {
    withCredentials:true // this is for cookies. It will allow to set Cookies in browser.
    });
    console.log(JSON.parse(res));
    }

18) Now we store the response of login api into redux. ( https://redux-toolkit.js.org/introduction/getting-started )
    npm install @reduxjs/toolkit
    npm install react-redux

    Now create appStore (configurStore)
    add Provider (add in app.jsx)
    create createSlice and add to appStore.

19) Now we set the login response in redux and will play with addUser and remvoeUser methods we created in userSlice.

20) added if else condition according to loggedIn user. and change the button text.

21) Also implement logout, profile Update and changePassword API.

22) To get random user profile image you can use this url: (https://xsgames.co/randomusers/assets/avatars/male/24.jpg)

23) setup toastify message (ref:https://www.npmjs.com/package/react-toastify?activeTab=readme)
    npm i --save react-toastify

24) added condition if user is logged in then he can access profile page.
