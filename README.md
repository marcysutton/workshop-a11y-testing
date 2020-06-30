# Automated Accessibility Testing with Gatsby

Learn the necessary techniques and tools for testing inclusive web applications with Gatsby and React.js from Gatsby's Lead Developer Relations Engineer Marcy Sutton.

Presented at:
- [Smashing Workshop](https://smashingconf.com/online-workshops/workshops/marcy-sutton)

App URL: https://marcysutton.github.io/workshop-a11y-testing

---

_Note: This repo requires [Node.js 12+ and npm](https://nodejs.org) to be installed._

1. Install Gatsby CLI:

```sh
npm install -g gatsby-cli
```

1. Create a new Gatsby site using this starter

```sh
gatsby new test-a11y https://github.com/marcysutton/workshop-a11y-testing
```

3. Go into the directory and start the development server

```sh
cd test-a11y
gatsby develop
```

View in a browser: `http://localhost:8000`

4. Edit files:

    - Site pages: [`src/pages/*`](https://github.com/marcysutton/workshop-a11y-testing/tree/master/src/pages)
    - Site components: [`src/components/*`](https://github.com/marcysutton/workshop-a11y-testing/tree/master/src/components)
    - Component unit tests: [`src/components/__tests__`](https://github.com/marcysutton/workshop-a11y-testing/tree/master/src/components/__tests__)
    - Templates: [`src/templates/*`](https://github.com/marcysutton/workshop-a11y-testing/tree/master/src/templates)
    - Integration tests: [`cypress/*`](https://github.com/marcysutton/workshop-a11y-testing/tree/master/cypress)


### Prerequisites
1. Have a text editor installed, i.e. VS Code
2. Have Node.js 12+ and npm installed
