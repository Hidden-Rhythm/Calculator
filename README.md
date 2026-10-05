<div align="center">

# 🧮 A Cute Calculator

### *A calculator, but make it unnecessarily cute.* 💙

<br>

<a href="https://a-cute-calculator-by-hidden.vercel.app">
  <img src="https://img.shields.io/badge/🌐%20Live%20Website-Open%20Calculator-6c63ff?style=for-the-badge" alt="Live Website">
</a>
&nbsp;
<a href="https://github.com/Hidden-Rhythm/Calculator">
  <img src="https://img.shields.io/badge/💻%20Source-GitHub-black?style=for-the-badge&logo=github" alt="GitHub">
</a>

</div>

---

## 💙 What Is This?

**A Cute Calculator** is a fully client-side calculator built with **HTML, CSS, and JavaScript**.

It combines a functional scientific calculator with a custom illustrated interface, sound effects, background music, animated controls, calculation history, and a tiny collection of math jokes.

It works without a backend, database, framework, or build system.

Just open it and calculate. 🧮

---

## ✨ Features

| Feature                 | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| ➕ Basic Calculator      | Addition, subtraction, multiplication and division          |
| 🔢 Numbers & Decimals   | Standard numerical input                                    |
| `()` Parentheses        | Supports grouped expressions                                |
| √ Square Root           | Built-in square-root calculation                            |
| 📐 Scientific Functions | sin, cos, tan and inverse trigonometric functions           |
| `log`                   | Base-10 logarithm                                           |
| π Pi                    | Built-in mathematical constant                              |
| `e`                     | Euler's number                                              |
| `10ˣ`                   | Power of 10                                                 |
| `yˣ`                    | Custom exponent calculations                                |
| 🧾 Calculation History  | Keeps the previous three results visible                    |
| 🔊 Sound Effects        | Click, delete, equals and error sounds                      |
| 🎵 Background Music     | Optional looping background music                           |
| 💡 Scientific Sidebar   | Expandable scientific-function panel                        |
| 😂 Math Jokes           | Random math pun from the heart button                       |
| 📱 Responsive           | Adapts to smaller screens                                   |
| 🎨 Custom UI            | Illustrated calculator interface and custom button graphics |

---

## 🧮 Calculator Flow

```text
                         ┌───────────────────┐
                         │   Cute Calculator │
                         │       🧮          │
                         └─────────┬─────────┘
                                   │
                 ┌─────────────────┴─────────────────┐
                 │                                   │
           BASIC INPUT                         SCIENTIFIC
                 │                                   │
       ┌─────────▼─────────┐             ┌───────────▼──────────┐
       │ 0 1 2 3 4 5 6 7  │             │ sin  cos  tan        │
       │ 8 9 . + - × ÷     │             │ asin acos atan       │
       │ ( ) √             │             │ log  π  e  10ˣ  yˣ  │
       └─────────┬─────────┘             └───────────┬──────────┘
                 │                                   │
                 └─────────────────┬─────────────────┘
                                   │
                              ┌────▼────┐
                              │    =    │
                              └────┬────┘
                                   │
                              ┌────▼────┐
                              │ Result  │
                              └─────────┘
```

---

## 📐 Scientific Mode

The calculator includes a slide-out scientific panel containing:

```text
sin      cos      tan

arcsin   arccos   arctan

log      e        π

10ˣ      yˣ
```

The scientific functions are mapped to JavaScript's built-in `Math` functions.

Examples:

```text
sin(x)      → Math.sin(x)
cos(x)      → Math.cos(x)
tan(x)      → Math.tan(x)

arcsin(x)   → Math.asin(x)
arccos(x)   → Math.acos(x)
arctan(x)   → Math.atan(x)

log(x)      → Math.log10(x)
√x          → Math.sqrt(x)

π           → Math.PI
e           → Math.E
```

---

## 🧾 Calculation History

The calculator keeps the **three most recent results**.

```text
┌─────────────────────┐
│     Previous #1     │
│     Previous #2     │
│     Previous #3     │
├─────────────────────┤
│    Current Result   │
└─────────────────────┘
```

Every successful calculation pushes the latest result into the history.

---

## 🔊 Sound Design

The calculator has individual sounds for different interactions:

```text
assets/sounds/
├── bg.mp3
├── click.mp3
├── delete.mp3
├── equals.mp3
├── error.mp3
├── laugh.mp3
└── sidebar-click.mp3
```

### 🔘 Button clicks

Normal calculator interactions play the click sound.

### `=` Equals

Successful calculations trigger the equals sound.

### 🗑️ Delete

Deleting an expression plays the delete sound.

### ❌ Math Error

Invalid expressions trigger the error sound and display:

```text
math error
```

### 🎵 Background Music

Background music is optional and starts disabled.

The music button toggles between:

```text
🔇 OFF
🔊 ON
```

---

## 😂 The Secret Math Button

The heart button isn't another calculator function.

It gives you a **random math pun**. 💀

Examples include jokes about:

* Parallel lines
* 90-degree angles
* Algebra
* Grid paper
* Snow angles
* Tangents

Every click selects a random joke from the built-in collection.

---

## 🎨 Design

The calculator uses a completely custom visual interface rather than a traditional calculator layout.

### Visual elements

* Custom illustrated calculator body
* Custom button images
* Custom scientific sidebar
* Patterned background
* Illustrated separators
* Custom typography
* Music control
* GitHub link
* Responsive sizing

The calculator itself scales based on the viewport:

```css
--calc-size: min(92vw, 700px);
```

So the main interface remains usable across different screen sizes.

---

## 📱 Responsive Design

On smaller screens, the calculator automatically adapts its layout.

The project includes a mobile breakpoint at:

```text
700px
```

The calculator maintains its square aspect ratio while reducing button and control sizes.

The music control, GitHub link, and sidebar behavior are also adjusted for mobile screens.

---

## 🗂️ Project Structure

```text
Calculator/
│
├── index.html
├── script.js
├── style.css
│
└── assets/
    ├── bg.png
    ├── lines.png
    ├── sci-bar.png
    ├── icon.png
    ├── github-logo.png
    │
    ├── buttons/
    │   ├── 0.jpg
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── ...
    │   ├── sin.png
    │   ├── cos.png
    │   ├── tan.png
    │   ├── pi.png
    │   ├── e.png
    │   ├── sqrt.jpg
    │   ├── heart.png
    │   └── ...
    │
    └── sounds/
        ├── bg.mp3
        ├── click.mp3
        ├── delete.mp3
        ├── equals.mp3
        ├── error.mp3
        ├── laugh.mp3
        └── sidebar-click.mp3
```

---

## 🛠️ Built With

| Technology                    | Purpose                               |
| ----------------------------- | ------------------------------------- |
| HTML5                         | Calculator structure                  |
| CSS3                          | Layout, responsiveness and animations |
| JavaScript                    | Calculator logic and interactions     |
| JavaScript Math API           | Scientific calculations               |
| Google Fonts                  | Gamja Flower typography               |
| MP3                           | Audio feedback and background music   |
| PNG / JPG / GIF / AVIF assets | Custom interface graphics             |

**No framework. No backend. No database. No build step.**

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/Hidden-Rhythm/Calculator.git
cd Calculator
```

Then open:

```text
index.html
```

directly in your browser.

Or run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## ⚙️ How Calculations Work

The calculator maintains two expressions:

```text
expression
evalExpression
```

The first is what the user sees.

The second is the JavaScript-compatible expression used for calculation.

For example:

```text
Displayed:

√(25)
```

is internally converted to:

```text
Math.sqrt(25)
```

Scientific functions are similarly mapped before evaluation.

The calculator also automatically closes unmatched parentheses before evaluating an expression and rounds floating-point results to avoid tiny trigonometric precision errors.

---

## 🌐 Live Website

### **A Cute Calculator**

<a href="https://a-cute-calculator-by-hidden.vercel.app">
  https://a-cute-calculator-by-hidden.vercel.app
</a>

---

## 💻 Source Code

**Hidden-Rhythm / Calculator**

<a href="https://github.com/Hidden-Rhythm/Calculator">
  View the source on GitHub →
</a>

---

<div align="center">

### Made with math, code & unnecessary amounts of cuteness. 🧮💙

**Hidden-Rhythm**

</div>
