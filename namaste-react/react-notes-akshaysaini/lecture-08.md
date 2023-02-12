# 🙂 Lecture 08

## **Assignment Question:**

1.  **What is the order of life cycle methods of class-based components?**

    Mounting phase: Constructor-> render->componetsDidMount. Updating phase: render -> componetDidUpdate.    Unmounting phase: ComponentWllUnmount.
2.  Why do we use ComponetDidMount?

    ComponetDidMount is used for initially mounting data on DOM at the time of the first render.
3.  Why do we use componetWillUnmount?

    componetWillUnmount is used to stop some working event or functionality at the time when we switch between components or mount some other component on DOM.
4.  How do you create nested Routes in react-router-dom configuration?



    <figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

&#x20; 5\. What is createHashRouter?

&#x20;    createHashRouter works same as createBrowserRouter it is an      alternative of it,In it insteed of using&#x20;
