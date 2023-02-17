# 😁 Lecture 09

## Assignment Questions:

1.  **Why do we need lazy()?**

    lazy() allows developers to easily create components with dynamic imports and render them as normal components. When the component is rendered, it will automatically load the bundle that contains the rendered component.
2.  **What is Suspense in React?**

    Suspense is not a data fetching library. It's a mechanism for data fetching libraries to communicate to React that the data a component is reading is not ready yet. React can then wait for it to be ready and update the UI.
