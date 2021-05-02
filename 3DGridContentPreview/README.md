- favicon
- images * n (n = atricles count)
  - thumbs ~300px * ~400px jpg
  - full ~600px * ~900px jpg
  - images grid position 
- articles * n
  - title
  - ?date
  - text
- main-colors
  ```
  --color-text: #000;
  --color-text-alt: #848484;
  --color-title: #d3d3d3;
  --color-bg: #dcdcdc;
  --color-link: #e3154d;
  --color-link-hover: #000;
  color: var(--color-text);
  background-color: var(--color-bg);
  --cursor-stroke: #e3154d;
  --cursor-fill: none;
  --cursor-stroke-width: 1px;
  --cursor-text: #000;
  ```


## Installation

Install dependencies:

```
npm install
```

Compile the code for development and start a local server:

```
npm start
```

Create the build:

```
npm run build
```
