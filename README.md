# 🚀 Digital Agency Website - Testimonial Slider & Footer Project

This project is a modern, responsive single-page web application built using **React**, **TypeScript**, and **React-Bootstrap**. It showcases a highly optimized dynamic Multi-Card Testimonial Slider and a fully modular structural Footer.

---

## 🌟 Key Features

* **Dynamic Viewport Multi-Card Slider**: Engineered a custom sliding-window behavior inside a single `Carousel.Item` to allow smooth, non-disruptive, card-by-card transitions.
* **Fully Responsive Architecture**: 
    * **Desktop**: Shows 3 cards at a time, calculating slide adjustments natively via CSS transforms and offsets. Automatically renders `Total Cards - 2` pagination dots, locking focus directly onto the middle slide on load.
    * **Mobile**: Scales down to 1 focused card at a time, expanding to 5 interactive pagination dots automatically.
* **Performance Optimization**: Overrode native Bootstrap `auto-play` and default slide intervals to reduce re-renders and enable full hardware-accelerated 60fps translation transitions.
* **Dynamic Data Architecture**: Structured cleanly with reusable TypeScript interfaces (`SliderProps`, `CardProps`, `FooterProps`) to automatically scale indicators and sections when adding items to the datasets.

---

## 🛠️ Architecture & Core Logic Explained

### The Slider Strategy (`Slider.tsx`)
Traditional Bootstrap carousels toggle opacity or visibility per slide. This solution stacks all data objects horizontally inside a unified track (`.slider-track`), hidden behind a visible layout boundary (`overflow: visible`):

$$\text{transformOffset} = \begin{cases} \text{index} \times 33.333333\% & \text{if Desktop} \\ \text{index} \times 100\% & \text{if Mobile} \end{cases}$$\

To force Bootstrap to draw custom indicators smoothly without breaking native states, invisible dummy items (`.d-none`) are injected programmatically alongside the main active item.

---

## ⚙️ How to Run Locally

Follow these steps to launch the repository on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/rashahatoum/task-5-adv.git](https://github.com/rashahatoum/task-5-adv.git)
   cd digital-agency