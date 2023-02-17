# 🙂 Lecture 08

## **Assignment Question:**

1.  **What is the order of life cycle methods of class-based components?**

    Mounting phase: Constructor-> render->componetsDidMount. Updating phase: render -> componetDidUpdate.    Unmounting phase: ComponentWllUnmount.
2.  **Why do we use ComponetDidMount?**

    ComponetDidMount is used for initially mounting data on DOM at the time of the first render.
3.  **Why do we use componetWillUnmount?**

    componetWillUnmount is used to stop some working event or functionality at the time when we switch between components or mount some other component on DOM.
4.  **How do you create nested Routes in react-router-dom configuration?**



    <figure><img src="../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>



&#x20;5\.  **What is createHashRouter?**

This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

6. **What is createMemoryRouter?**

Instead of using the browser's history a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.&#x20;

7.  **Why do we use super(Props)?**

    **Refer this:**&#x20;

{% hint style="info" %}
[https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react](https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react)
{% endhint %}

8.  **Why we don't have a callback function of useEffect async?**

    &#x20;Because React’s `useEffect` hook expects a cleanup function returned from it which is called when the component unmounts. Using an `async` function here will cause a bug as the cleanup function will never get called.

```javascript
❌ Don't do this!
useEffect(async () => {
  const users = await fetchUsers();
  setUsers(users);

  return () => {
    // this never gets called, hello memory leaks...
  };
}, []);
```

Do between this two to solve:

```javascript
// using self invoking function
useEffect(() => {
  (async () => {
    const users = await fetchUsers();
    setUsers(users);
  })();

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```

```javascript
// Named Function
// 🆗 Ship it
useEffect(() => {
  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  getUsers(); // run it, run it

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
```
