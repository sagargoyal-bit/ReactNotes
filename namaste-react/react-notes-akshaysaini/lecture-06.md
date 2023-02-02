# 😛 Lecture 06

**React Fiber**: it's a new Reconciliation algorithm. you can read more about it here:&#x20;

{% hint style="info" %}
[https://blog.openreplay.com/react-fiber-explained/](https://blog.openreplay.com/react-fiber-explained/)
{% endhint %}

**Diff Algo:**  Diff algorithm continuously compares your older DOM elements or node with the new DOM whenever something changes in some state variable or props and updates the actual DOM.

**Reconciliation Algorithm:** Diff algo is a part of reconciliation algo. it compares your virtual DOM with the actual DOM with the help of Diff algo and updates the actual DOM.

{% hint style="success" %}
React is fast because of its faster DOM manipulation (Diff algo).
{% endhint %}

{% hint style="info" %}
React only tracks **state variables** not **normal variables** for DOM manipulation.
{% endhint %}

**Statement VS Expression:**&#x20;

You can write any javascript code between your JSX code but it must be Expression, React doesn't support statements between JSX elements. eg:&#x20;

&#x20;![](../../.gitbook/assets/image.png)

To read about it more you can read this article.

{% hint style="info" %}
[https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces](https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces)
{% endhint %}
