# 🌍 Guess the Flag

### 🎮 A geography quiz game built with HTML, CSS, JavaScript, and jQuery  
**Created:** July 2025
**Author:** Saxony
**Play it at:** [https://saxonys.github.io/guess-the-flag/](https://yourusername.github.io/guess-the-flag/)

---

## 🧠 Objective

Test your geography knowledge by guessing which country a flag belongs to.  
The game shows you a random flag and four country name choices.  
Click the correct one to earn points.

---

## 🛠️ Resources Used

- 🌐 [Flag CDN (country flags)](https://flagcdn.com)
- 🎨 [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto)
- 🧩 [Bootstrap 5](https://getbootstrap.com/)
- 🧰 [Bootstrap Icons](https://icons.getbootstrap.com/)
- ⚙️ [jQuery](https://jquery.com/)

---

## 💻 Folder Structure

guess-the-flag/
├── index.html
├── styles/
│ └── gameStyles.css
├── scripts/
│ └── gameScripts.js
└── README.md

---

## 💡 Code Example

This snippet of code shuffles the flag arrays randomly.

```js
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
```