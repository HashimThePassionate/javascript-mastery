# **Scroll Events** 🎢

Scroll events allow us to detect when a user is scrolling on a page or element. These events are fired continuously while the user scrolls, and you can use them to build features like **progress bars**, **lazy loading**, **infinite scrolling**, or even **sticky headers**. Let's dive into scroll events, simplify the example, and provide additional real-world examples!

## **Basic Scroll Event Example: Progress Bar** 📊

In this example, we'll create a progress bar that fills up as you scroll down the page.

### **HTML and JavaScript Code**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Progress Bar</title>
  <style>
    #progress {
      border-bottom: 2px solid blue;
      width: 0;
      position: fixed;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>

  <div id="progress"></div>

  <script>
    // Create a long page content
    document.body.appendChild(document.createTextNode(
      "supercalifragilisticexpialidocious ".repeat(1000)
    ));

    let progressBar = document.querySelector("#progress");

    // Listen for the scroll event
    window.addEventListener("scroll", () => {
      let maxScroll = document.body.scrollHeight - window.innerHeight;  // Calculate the total scrollable height
      let currentScroll = window.pageYOffset;  // Get the current scroll position
      let scrollPercentage = (currentScroll / maxScroll) * 100;  // Calculate the scroll percentage
      progressBar.style.width = `${scrollPercentage}%`;  // Adjust the width of the progress bar
    });
  </script>

</body>
</html>
```

### **Explanation**:
1. **#progress element**: We style a `<div>` with `position: fixed` so that it stays at the top of the page and create a horizontal progress bar.
2. **window.addEventListener("scroll", callback)**: This listens for the scroll event on the window.
3. **maxScroll**: The maximum scrollable height is calculated by subtracting the window’s height (`window.innerHeight`) from the total height of the document (`document.body.scrollHeight`).
4. **pageYOffset**: The current vertical scroll position is retrieved.
5. **Percentage Calculation**: We calculate the scroll percentage based on how far the user has scrolled compared to the total scrollable distance.
6. **Adjust Progress Bar Width**: The width of the progress bar is updated according to the calculated percentage.

## **Real-World Scroll Event Examples** 🌍

### **1. Infinite Scroll Loading** 🚀

This is a common technique used by websites like social media feeds or blogs to load more content as the user scrolls.

### **HTML and JavaScript Code**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Infinite Scroll Example</title>
  <style>
    #content {
      height: 800px;
      background: #f0f0f0;
    }
  </style>
</head>
<body>

  <div id="content">
    <p>Scroll down to load more content...</p>
  </div>
  <div id="loader" style="display: none;">Loading more content...</div>

  <script>
    // Simulate loading more content
    function loadMoreContent() {
      let newContent = document.createElement("p");
      newContent.textContent = "More content loaded!";
      document.getElementById("content").appendChild(newContent);
    }

    window.addEventListener("scroll", () => {
      let scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (window.pageYOffset >= scrollableHeight - 10) {
        document.getElementById("loader").style.display = "block";  // Show the loader
        setTimeout(() => {
          loadMoreContent();  // Load new content
          document.getElementById("loader").style.display = "none";  // Hide the loader
        }, 1000);  // Simulate loading delay
      }
    });
  </script>

</body>
</html>
```

### **Explanation**:
- **Infinite Scroll**: The script checks if the user has scrolled to the bottom of the page. If so, it loads more content and displays a loading message while fetching new data.
- **scrollHeight - innerHeight**: This gives the total scrollable height minus the height of the window. If the user scrolls to this point, more content is loaded.

### **2. Sticky Navigation on Scroll** 📌

As you scroll down, the navigation bar sticks to the top of the page.

### **HTML and JavaScript Code**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sticky Navbar Example</title>
  <style>
    #navbar {
      background-color: #333;
      color: white;
      padding: 10px;
      position: relative;
      width: 100%;
    }
    #sticky-content {
      margin-top: 300px;
    }
  </style>
</head>
<body>

  <div id="navbar">I am a Navbar</div>
  <div id="sticky-content">Scroll down to see the sticky effect...</div>

  <script>
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;  // Get the offset position of the navbar

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= sticky) {
        navbar.style.position = "fixed";  // Stick the navbar at the top
        navbar.style.top = "0";
      } else {
        navbar.style.position = "relative";  // Reset to its original position
      }
    });
  </script>

</body>
</html>
```

### **Explanation**:
- **offsetTop**: This gets the navbar’s position relative to the top of the page.
- **pageYOffset**: Once the user scrolls past the navbar, it becomes fixed at the top of the window.

### **3. Lazy Loading Images** 🖼️

Images are loaded only when they are about to enter the viewport, which is great for improving performance.

### **HTML and JavaScript Code**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy Loading Images Example</title>
  <style>
    .image {
      width: 100%;
      height: 300px;
      background: lightgray;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>

  <div class="image" data-src="https://via.placeholder.com/800x300?text=1"></div>
  <div class="image" data-src="https://via.placeholder.com/800x300?text=2"></div>
  <div class="image" data-src="https://via.placeholder.com/800x300?text=3"></div>

  <script>
    // Lazy loading function
    function lazyLoad() {
      let images = document.querySelectorAll('.image');
      images.forEach(image => {
        let rect = image.getBoundingClientRect();  // Get the position of the image
        if (rect.top < window.innerHeight && rect.bottom > 0 && !image.src) {
          image.style.backgroundImage = `url(${image.getAttribute('data-src')})`;
        }
      });
    }

    // Run lazyLoad on scroll
    window.addEventListener("scroll", lazyLoad);
    lazyLoad();  // Run on page load
  </script>

</body>
</html>
```

### **Explanation**:
- **getBoundingClientRect**: This method gives the position of an element relative to the viewport.
- **Lazy Loading**: Images are loaded only when they are about to enter the viewport (i.e., when they are visible on the screen).

### **4. Scroll Percentage Indicator** 📏

This example calculates how much of the page has been scrolled and displays it in percentage.

### **HTML and JavaScript Code**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Percentage Example</title>
  <style>
    #indicator {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: #333;
      color: white;
      padding: 10px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <div style="height: 2000px;">Scroll down to see the percentage indicator.</div>
  <div id="indicator">0%</div>

  <script>
    let indicator = document.getElementById("indicator");

    window.addEventListener("scroll", () => {
      let maxScroll = document.body.scrollHeight - window.innerHeight;
      let scrollPercentage = Math

.round((window.pageYOffset / maxScroll) * 100);
      indicator.textContent = `${scrollPercentage}%`;
    });
  </script>

</body>
</html>
```

### **Explanation**:
- **Scroll Percentage**: The percentage of the scroll is calculated by dividing the current scroll position by the total scrollable height.
- **Indicator**: The percentage is displayed at the bottom right of the page, showing how far the user has scrolled.

## **Key Takeaways**:
- **Scroll Events**: These are useful for creating interactive and dynamic pages, such as progress bars, sticky elements, and lazy-loading images.
- **Performance**: Be cautious with scroll events as they can fire frequently. Consider using **debouncing** or **throttling** techniques to improve performance.
