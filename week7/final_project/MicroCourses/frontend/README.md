# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

`backend` folder:

npm i
npm install express cors express-fileupload mongodb

Frontend folder:

npm i && npm update
npm install axios react-router-dom


MicroCourses/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── courses.js
│   ├── db/
│   │   └── conn.js
│   ├── models/
│   │   └── courses.model.js
│   ├── uploads/   (Create this folder for storing uploaded files)
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   │   └── AddCourses.jsx
│   ├── public/
│   │   └── index.html
│   ├── package.json
└── package.json
