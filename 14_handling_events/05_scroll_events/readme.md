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
1. **Creating Scrollable Content**:
   - The line `document.body.appendChild(document.createTextNode("supercalifragilisticexpialidocious ".repeat(1000)))`:
     - Creates a long string by repeating `"supercalifragilisticexpialidocious "` 1000 times.
     - This long string is added to the body of the document, making the page scrollable.

2. **Selecting the Progress Bar Element**:
   - `let progressBar = document.querySelector("#progress");`:
     - Selects the `<div>` element with the id `progress` and stores it in the variable `progressBar`.
     - This is the element that visually represents the scroll progress bar.

3. **Listening for Scroll Events**:
   - `window.addEventListener("scroll", () => {...});`:
     - Adds an event listener that listens for the **scroll** event.
     - Whenever the user scrolls the page, the function inside the event listener is triggered.

4. **Calculating Maximum Scrollable Height**:
   - `let maxScroll = document.body.scrollHeight - window.innerHeight;`:
     - `document.body.scrollHeight` gets the total height of the webpage.
     - `window.innerHeight` gets the height of the visible part of the page (the viewport).
     - The difference between these two values (`scrollHeight - innerHeight`) gives the **total scrollable height** of the page.

5. **Getting Current Scroll Position**:
   - `let currentScroll = window.pageYOffset;`:
     - `window.pageYOffset` gets the number of pixels the user has scrolled from the top of the page.

6. **Calculating Scroll Percentage**:
   - `let scrollPercentage = (currentScroll / maxScroll) * 100;`:
     - Divides the current scroll position (`currentScroll`) by the total scrollable height (`maxScroll`).
     - Multiplies the result by 100 to get the scroll progress as a percentage.
     - Example: If the user has scrolled halfway down the page, `scrollPercentage` will be `50%`.

7. **Updating the Progress Bar Width**:
   - `progressBar.style.width = `${scrollPercentage}%`;`:
     - Dynamically updates the width of the progress bar based on the scroll percentage.
     - The progress bar will grow in width as the user scrolls further down the page.

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
### JavaScript Explanation in Points:

1. **Selecting the Navbar Element**:
   - `let navbar = document.getElementById("navbar");`
     - This line selects the `<div>` element with the `id="navbar"` and stores it in the variable `navbar`.
     - The navbar is the element we want to make "sticky" when the user scrolls.

2. **Getting Navbar Offset Position**:
   - `let sticky = navbar.offsetTop;`
     - `offsetTop` retrieves the **vertical position** of the navbar relative to the top of the page.
     - This value is stored in the variable `sticky` and is used to determine when the navbar should become "sticky."

3. **Listening for Scroll Events**:
   - `window.addEventListener("scroll", () => {...});`
     - This adds an event listener that listens for the **scroll event** on the `window` object.
     - Whenever the user scrolls, the function inside the event listener is triggered.

4. **Checking Scroll Position**:
   - `if (window.pageYOffset >= sticky) {...}`
     - `window.pageYOffset` gets the number of pixels the user has scrolled from the top of the page.
     - This checks if the user has scrolled **past** the navbar's original position (stored in `sticky`).

5. **Making the Navbar Sticky**:
   - `navbar.style.position = "fixed";`
     - If the user has scrolled past the navbar's original position, this changes the navbar's `position` to `"fixed"`, making it stick to the top of the screen.
     - `navbar.style.top = "0";` ensures the navbar stays fixed at the top of the viewport.

6. **Resetting Navbar to Original Position**:
   - `else { navbar.style.position = "relative"; }`
     - If the user scrolls **back up**, this resets the navbar's `position` to `"relative"`, putting it back in its original place in the page flow.on.

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