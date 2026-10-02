This repository pairs an e-commerce API with a React administration dashboard. An administrator signs in, then navigates product and user views; the dashboard fetches products through its API-call layer, while product creation uploads an image before submitting product data. The API exposes authentication, user, product, cart, order, and checkout routes backed by MongoDB models.

## 🧱 Architecture Overview

<img width="8933" height="9438" alt="diagram (2)" src="https://github.com/user-attachments/assets/8da339a1-e53a-4158-8e28-5027a87e13fe" />

## 📁 Structure

```
Directory structure:
└── nourchene-hamrita-e-commerce-app/
    ├── README.md
    ├── admin/
    │   ├── README.md
    │   ├── package.json
    │   ├── public/
    │   │   └── index.html
    │   └── src/
    │       ├── App.css
    │       ├── App.js
    │       ├── dummyData.js
    │       ├── firebase.js
    │       ├── index.js
    │       ├── requestMethods.js
    │       ├── components/
    │       │   ├── chart/
    │       │   │   ├── chart.css
    │       │   │   └── Chart.jsx
    │       │   ├── featuredInfo/
    │       │   │   ├── featuredInfo.css
    │       │   │   └── FeaturedInfo.jsx
    │       │   ├── sidebar/
    │       │   │   ├── sidebar.css
    │       │   │   └── Sidebar.jsx
    │       │   ├── topbar/
    │       │   │   ├── topbar.css
    │       │   │   └── Topbar.jsx
    │       │   ├── widgetLg/
    │       │   │   ├── widgetLg.css
    │       │   │   └── WidgetLg.jsx
    │       │   └── widgetSm/
    │       │       ├── widgetSm.css
    │       │       └── WidgetSm.jsx
    │       ├── pages/
    │       │   ├── home/
    │       │   │   ├── home.css
    │       │   │   └── Home.jsx
    │       │   ├── login/
    │       │   │   └── Login.jsx
    │       │   ├── newProduct/
    │       │   │   ├── newProduct.css
    │       │   │   └── NewProduct.jsx
    │       │   ├── newUser/
    │       │   │   ├── newUser.css
    │       │   │   └── NewUser.jsx
    │       │   ├── product/
    │       │   │   ├── product.css
    │       │   │   └── Product.jsx
    │       │   ├── productList/
    │       │   │   ├── productList.css
    │       │   │   └── ProductList.jsx
    │       │   ├── user/
    │       │   │   ├── user.css
    │       │   │   └── User.jsx
    │       │   └── userList/
    │       │       ├── userList.css
    │       │       └── UserList.jsx
    │       └── redux/
    │           ├── apiCalls.js
    │           ├── productRedux.js
    │           ├── store.js
    │           └── userRedux.js
    └── api/
        ├── index.js
        ├── package.json
        ├── models/
        │   ├── Cart.js
        │   ├── Order.js
        │   ├── Product.js
        │   └── User.js
        └── routes/
            ├── auth.js
            ├── cart.js
            ├── order.js
            ├── product.js
            ├── stripe.js
            ├── user.js
            └── verifyToken.js

