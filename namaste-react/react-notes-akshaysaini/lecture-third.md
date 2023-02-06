---
description: Third lecture summary of namasty react course
---

# 😍 Lecture Third

****

**Pollyfill:** Sometimes the browser doesn't understand your code it only understands the newer version of your code so your newer code is known as Pollyfill(Babel does this change for us).

{% hint style="success" %}
Fun fact: We have two package.lock files in the project the second one is in node\_modules which keeps track of all the transitive dependencies of dependencies under node\_modules..&#x20;
{% endhint %}

**Tree shaking:**-> removing unwanted code(libraries under libraries), it happened at the time of creating the build and bundler does this.

<img src="../../.gitbook/assets/tree shacking.png" alt="" data-size="original">

{% hint style="info" %}
#### JSX =>React.createElement => Object => HTML(DOM)
{% endhint %}

**JSX**: \<H1>, In the JSX file these tags are not HTML tags this HTML lookalike tags.

**Babel:** babel converts your JSX code to “react.createElement” code and then later it’s converted into regular HTML code so that your browser can understand.

**Component composition:** passing components into components.

![](<../../.gitbook/assets/image (2).png>)

&#x20;

{% hint style="info" %}
To understand how keys work in react read [https://reactjs.org/docs/reconciliation.html](https://reactjs.org/docs/reconciliation.html)
{% endhint %}

{% hint style="success" %}
Always Start the Component name with a capital letter, it is not necessary but it's a good practice.
{% endhint %}

#### Function Component :

* It is just a normal function which has some JSX code in it.

![](<../../.gitbook/assets/image (6).png>)

**React Element** :&#x20;

&#x20;React element is just a normal variable that has JSX code in it.

![](<../../.gitbook/assets/image (5).png>)
