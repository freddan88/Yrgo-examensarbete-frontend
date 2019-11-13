# Yrgo Examensarbete Frontend
#### React.js Website consuming a Wordpress Rest API - Swedish

> Master thesis at Yrgo - [Web Developer Program](https://yrgo.se/utbildningar/media-och-kommunikation/webbutvecklare/) - Gothenburg Swede (2019-11-15 - 12:00)<br/>
> I worked on the website at: https://www.rormossenshumle.se

- For the website and CMS I used PHP/REACT/NPM/Javascript/Wordpress/Custom Rest API Endpoints

#### This is a public repository with a MIT License and you are free to reuse the code as you want!
Read More: https://choosealicense.com/licenses/mit

#### Installation

1. Clone or download this repository by using Git or download ZIP
```Bash
git clone https://github.com/freddan88/Yrgo-examensarbete-frontend.git
```
2. Install dependencies
```Bash
npm install
```
3. Copy and rename .env.example to .env and edit: REACT_APP_API_ROOT<br/>
Example:
- REACT_APP_API_ROOT=http://localhost/wp-json/rhg/v1
4. Start the application
```Bash
npm start
```

The repository contains a folder called redirect, this is the wordpress theme folder<br/>
For easy installation you can download as a zip-file and drag the folder to your Wordpress installation

#### NPM Packages used:
- [axios](https://www.npmjs.com/package/axios)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [normalize.css](https://www.npmjs.com/package/normalize.css)
- [body-scroll-lock](https://www.npmjs.com/package/body-scroll-lock)
- [create-react-app (react, react-dom, react-scripts)](https://www.npmjs.com/package/create-react-app)
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-helmet](https://www.npmjs.com/package/react-helmet)

#### Icon downloaded from Font Awsome
License: [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)
- [Icon: Fontawesome solid angle-double-up (fas)](https://fontawesome.com/icons/angle-double-up?style=solid)
- [Icon: Fontawesome solid Bars (fas)](https://fontawesome.com/icons/bars?style=solid)

#### Public Repositories:
- https://github.com/freddan88/Yrgo-examensarbete-backend
- https://github.com/freddan88/Yrgo-examensarbete-frontend

#### Contributor:
| Fredrik Leemann
|----------------
| GitHub: [https://github.com/freddan88](https://github.com/freddan88 "freddan88@GitHub")
| WebPage: http://www.leemann.se/fredrik

#### Resources:
- https://placeholder.com
- https://wpcentral.io/internationalization
- https://github.com/CMB2/CMB2/wiki/REST-API
- https://developer.wordpress.org/rest-api/reference
- https://github.com/CMB2/CMB2/wiki/Field-Types#file_list
- https://wordpress.stackexchange.com/questions/108652/remove-custom-post-type-permalink
- https://www.npmjs.com/package/react-infinite-scroll-component
- https://realfavicongenerator.net
- https://convertico.com/
- WP REST API - Custom Endpoints (Watch and Learn YouTube)<br/>
https://www.youtube.com/watch?v=C2twS9ArdCI
- React State Management Tutorial - Context Api (Dev Ed YouTube)<br/>
https://www.youtube.com/watch?v=35lXWvCuM8o
- React Router Tutorial (Dev Ed YouTube)<br/>
https://www.youtube.com/watch?v=Law7wfdg_ls

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
