
# Adopt Me (React web app)

React web application for adopting animals : Intro to React V7 - Frontendmasters



## Acknowledgements | Links

 - [Intro to React V7 - Frontendmasters](https://frontendmasters.com/courses/complete-react-v7/)
 - [Brian Holt - Course Notes](https://btholt.github.io/complete-intro-to-react-v7/)
 - [Course - Github Repo](https://github.com/btholt/citr-v7-project)
 - [ReactJS Official Docs](https://reactjs.org/docs/getting-started.html)



## Appendix | My course notes

- Official Docs/Resources etc.
- File/Folder Structure of React JS
- React App Creation [With & w/o CDN/unpkg/npm]
    - Manual - Pure React
	- CLI Based (Scaffold) - npm or npx create-react-app myfirstreactapp
- Basic localhost deployment of above 2 methods & Github repo push. (Dont deploy in production yet)
- JS Toolchain- npm create react app
- Hooks : Used for tracking State Changes of UI through Functional Components (ie. Similar to "this.state" in Class comp)
	- Tips - Don't use conditional Hooks (if, Loops etc.)
	- useState : accepts an initial state and returns two values
		- The current state
		- A function that updates the state
	- useEffect : lets you perform side effects(fetching data, directly updating DOM, timers,timeout,subscription, event listeners etc.) in function component. A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects. Side effects are impure functions. You cant predict the output given the input. 
	    - Accepts 2 Arguments 
		    - <function>
		    - <dependency> : Optional (Generally an Dependency Array : Empty for once render, Props/State for each update render)
		- Lifecycle : componentDidMount, componentDidUpdate, componentWillUnmount
- Custom Hooks
- Component Composition
- React Router
- Class Component
- Error Boundaries
- Context
- Portal & Refs
- Deployment [Git Repo] to Vercel (Via Parcel Build)


## Badges


[![MIT License](https://img.shields.io/github/license/sonimonish00/adopt-me)](https://github.com/twbs/bootstrap/blob/main/LICENSE)
[![watchers](https://img.shields.io/github/watchers/sonimonish00/adopt-me?style=social)](https://github.com/sonimonish00/adopt-me/watchers)
[![stargazers](https://img.shields.io/github/stars/sonimonish00/adopt-me?style=social)](https://github.com/sonimonish00/adopt-me/stargazers)



## Run Locally

Clone the project (Git CLI)

```bash
  gh repo clone sonimonish00/adopt-me
```

Go to the project directory

```bash
  cd adopt-me
```

Install dependencies

```bash
  npm install
```

Start the server (Add main: App.js if doesn't work) [see commit]

```bash
  npm run dev
```
Command for Running Again Parcel (by Clearing cache & Deleting node modules - skip node modules if u just wanna clear cache)

```bash
 rm -rf .parcel-cache dist node_modules && npm i 
 npm run dev (This is for localhost)
```


## Tech Stack

**Client:** React, React Router

**Server:** None


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://sonimonish00.github.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/monishsoni/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/MonishSoni95)
