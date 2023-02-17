# 😅 Lecture forth

Lecture notes were deleted by mistake he explained about config-driven UI and made an essential working website with a header, body, and footer.&#x20;

## Assignment questions:

1.  **Is JSX mandatory for react?**

    NO, JSX is mandatory for react, In the end, each JSX element gets converted into **React.CreateElement** form by Babel.
2.  **Is ES6 mandatory for react?**

    No, ES6 stands for ECMAScript 6. It's just a standard of writing javascript, it gives different methods to write javascript.
3.  **\<Title/> vs {Title} ?**

    Both are right in React every component is just a function we can use a component by using any of the above methods. They are both calling methods.
4.  **How can we write comments in JSX?**

    We can write comments in JSX using this syntax.&#x20;

    `eg. {/* */}`
5.  **What is \<React.Fragement> and <>\</>?**

    They both are the same and part of React and are called react fragments, they both work like div and are used to wrap components but they are not visible on DOM.
6.  **What is virtual DOM?**

    Virtual DOM is a copy of actual DOM and react uses it to compare it with actual DOM and for updating the actual DOM with the help of a reconciliation algorithm.
7.  **What is Reconciliation in react?**

    reconciliation is a way by which react updates the actual DOM, react does this by using the DIFF algorithm by activity tracks actual dom and virtual dom and updates the real DOM according to it.
8.  **what is react fiber?**

    React Fiber is a new reconciliation algorithm, and it is still in the beta stage, By using react fiber whenever some state updates in the component then the whole component will not get re-rendered only the effective part will get re-rendered, by this performance will get optimized**.**
9.  **Why do we need Keys in React?**

    we need keys in react to stop unnecessary re-rending for the components whose data is not changed yet.
10. **Can we use the index as keys?**

    &#x20;we can use the index as keys but they should be the last option because it can cause issues in a list of components. when some middle component gets changed, deleted or added.
11. **What are props in react?**

    Props are variables that we pass as a parameter to components to give data to components.
12. **What is Config-driven UI?**

    &#x20;Config-driven UI is a type of UI that completely depends on data that is coming through a config. Config(JSON) usually comes from the backend.



&#x20;

&#x20;

