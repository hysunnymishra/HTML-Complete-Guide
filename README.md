# HTML Mastery : A Comprehensive Guide by Sunny Kumar Mishra

Welcome to **HTML Mastery** ! This repository is a curated guide to mastering HTML concepts from the basics to advanced topics, designed to support both beginners and experienced developers. With handwritten notes and practical examples, you'll gain a deep understanding of HTML for building robust web foundations.
- Go Through With Notes First [ Which I provided ]
- Download Notes = <a href="https://sunnykumarmishra.gumroad.com/l/YourQuickGuide?_gl=1*1r3kr73*_ga*Mzg2ODAwMTgzLjE3MzA2Mzg2MTg.*_ga_6LJN6D94N6*MTczMTI0MDM3NC4xMi4xLjE3MzEyNDAzNzkuMC4wLjA.">HTML NOTES</a>
- in notes = the table conept , you might feel lost , so that's why i talked about it in detail in this repository !
---

## 📚 Contents

1. [Setting Development Environment](#setting-development-environment)
   - [Browser](#browser)
   - [Code Editor](#code-editor)
   - [How to Use Visual Studio?](#how-to-use-visual-studio)

2. [HTML Attributes](#html-attributes)
   - [Global Attributes](#global-attributes)
   - [Form Attributes](#form-attributes)
   - [Media Attributes](#media-attributes)
   - [Link Attributes](#link-attributes)
   - [Table Attributes](#table-attributes)
   - [Button and Input-Specific Attributes](#button-and-input-specific-attributes)
   - [Other Noteworthy Attributes](#other-noteworthy-attributes)

3. [HTML Comments](#html-comments)
   - [Basic HTML Comment](#basic-html-comment)
   - [Commenting Multiple Lines](#commenting-multiple-lines)
   - [Commenting Out Code](#commenting-out-code)
   - [Commenting for Debugging](#commenting-for-debugging)
   - [Comments for Documentation](#comments-for-documentation)

4. [HTML Tags](#html-tags)
   - [Basic Structure Tags](#basic-structure-tags)
   - [Structure Tags](#structure-tags)
   - [Text Content Tags](#text-content-tags)
   - [List Tags](#list-tags)
   - [Link and Media Tags](#link-and-media-tags)
   - [Form Tags](#form-tags)
   - [Table Tags](#table-tags)
   - [Script and Style Tags](#script-and-style-tags)
   - [Metadata Tags](#metadata-tags)
   - [Other HTML Tags](#other-html-tags)

5. [List of Blocking Elements](#list-of-blocking-elements)

6. [List of Non-Blocking Elements](#list-of-non-blocking-elements)

7. [Semantic Elements](#semantic-elements)

8. [How to Make a Table](#how-to-make-a-table)

9. [How to Add Images](#how-to-add-images)

10. [How to Add or Embed Video and Audio](#how-to-add-or-embed-video-and-audio)

----

## 🚀 Getting Started

This repository provides:
- **Handwritten Notes**: Personal notes covering each HTML concept in-depth.
- **Code Examples**: Real-world applications to help visualize each concept.
- **Project Ideas**: Hands-on mini-projects to reinforce learning.

> **How to Use**: Each topic is explained in detail. Start from the basics and move to advanced concepts. Make sure to experiment with code snippets provided in each section!

---

## 🔥 Highlights

- **Clear Explanations**: Simplified notes and examples make even complex topics understandable.
- **Code + Theory**: Balance of code and theoretical notes ensures strong foundational understanding.
- **Real Projects**: Build projects to solidify your knowledge and create portfolio-ready work.

---

# Setting Development Environment

## Browser

I usually use Google chrome for development and I recommend it too. [Download](https://www.google.com/chrome/) Google Chrome if you do not have one.

## Code Editor

I will use Visual studio code. I strongly suggest to use Visual Studio Code because it has lots of productivity extensions that makes super productive. Now, let's [download](https://code.visualstudio.com/) visual studio code.

## How to use Visual Studio 

To know how to use visual studio code, watch the following [video](https://youtu.be/VqCgcpAypFQ?feature=shared)

# HTML Attributes
## Global Attributes
 <!-- class Example -->
  <p class="example-class">1. <strong>class</strong> : Assigns one or more class names to an element, allowing CSS and JavaScript to target it.</p>

  <!-- id Example -->
  <p id="example-id">2. <strong>id</strong> : Provides a unique identifier for an element, used for CSS styling or JavaScript access.</p>

  <!-- style Example -->
  <p style="color: blue;">3. <strong>style</strong> : Inline styling for elements, usually written in CSS.</p>

  <!-- title Example -->
  <p title="This is a tooltip text.">4. <strong>title</strong> : Adds extra information about an element, often displayed as a tooltip on hover.</p>

  <!-- lang Example -->
  <p lang="es">5. <strong>lang</strong> : Specifies the language of the element's content. (This text is set to Spanish language.)</p>

  <!-- data-* Example -->
  <p data-info="customData">6. <strong>data</strong> : Used to store custom data private to the page or application.</p>

  <!-- tabindex Example -->
  <p tabindex="0">7. <strong>tabindex</strong> : Specifies the order of elements when using the Tab key for navigation.</p>

  <!-- contenteditable Example -->
  <p contenteditable="true">8. <strong>contenteditable</strong> : Allows the content to be edited directly by the user. (You can edit this text.)</p>

  <!-- hidden Example -->
  <p hidden>9. <strong>hidden</strong> : Hides an element without removing it from the DOM. (This paragraph is hidden.)</p>

  <!-- dir Example -->
  <p dir>10. <strong>dir</strong> : Sets text direction (e.g., ltr for left-to-right or rtl for right-to-left). (This text is right-to-left.)</p>
  
## Form Attributes
1. **`action`**: Defines the URL where form data will be sent after submission.
2. **`method`**: Specifies HTTP method to send form data (`GET` or `POST`).
3. **`autocomplete`**: Enables or disables autocomplete for the form.
4. **`novalidate`**: Prevents form validation when submitting.
5. **`target`**: Specifies where to open the response after submitting the form (e.g., `_blank`, `_self`).
6. **`name`**: Identifies form controls for data submission.
7. **`value`**: Sets the initial value of an element like `<input>`.
8. **`placeholder`**: Displays placeholder text in empty form fields.
9. **`required`**: Makes an input field mandatory before form submission.
10. **`readonly`**: Prevents the user from modifying the input value.
11. **`disabled`**: Disables an input element.
12. **`maxlength`**: Limits the number of characters allowed in an input.
13. **`min` / `max`**: Sets the range for numeric, date, or range inputs.
14. **`step`**: Specifies the interval for numeric inputs.
15. **`pattern`**: Provides a regular expression for input validation.

## Media Attributes
Used for `<img>`, `<video>`, `<audio>`, etc.

1. **`src`**: Specifies the source file of an image, audio, or video.
2. **`alt`**: Alternative text for images, used for accessibility.
3. **`width` / `height`**: Sets the width or height of media elements in pixels.
4. **`autoplay`**: Automatically starts playback when the media file is ready.
5. **`controls`**: Displays playback controls for audio and video.
6. **`loop`**: Allows media to loop after finishing.
7. **`muted`**: Starts media muted by default.
8. **`preload`**: Specifies how the media should be loaded (`auto`, `metadata`, `none`).
9. **`poster`**: For videos, specifies an image to be shown while the video is downloading.

## Link Attributes

Common for `<a>` and `<link>` elements.

1. **`href`**: Defines the destination URL for the link.
2. **`target`**: Specifies where to open the linked document (`_blank`, `_self`, etc.).
3. **`rel`**: Specifies the relationship between the current document and the linked document (e.g., `nofollow`, `noopener`).
4. **`download`**: Indicates that the target should be downloaded when clicked.
5. **`type`**: Defines the MIME type of the linked document.

## Table Attributes

For structuring tables with `<table>`, `<th>`, `<tr>`, `<td>`, etc.

1. **`colspan`**: Allows a cell to span multiple columns.
2. **`rowspan`**: Allows a cell to span multiple rows.
3. **`headers`**: Associates table cells with header cells for accessibility.
4. **`scope`**: Specifies whether a `<th>` element applies to a row, column, or group.

## Button and Input-Specific Attributes

Used primarily with `<button>` and `<input>` elements.

1. **`type`**: Defines the type of button or input (e.g., `button`, `submit`, `text`, `checkbox`).
2. **`checked`**: Pre-checks a checkbox or radio button.
3. **`multiple`**: Allows selecting multiple options in `<input type="file">` and `<select>` elements.
4. **`accept`**: Specifies acceptable file types for file inputs.
5. **`for`**: Connects a label to a form element using the element's `id`.

## Other Noteworthy Attributes

1. **`srcset`**: For images, specifies different image sources for responsive images.
2. **`defer`** / **`async`**: Used with `<script>` to control how scripts are loaded.
3. **`crossorigin`**: Manages CORS requests for `<img>`, `<video>`, and `<audio>`.
4. **`sandbox`**: Adds security restrictions to an `<iframe>`.
5. **`aria-*`**: Provides additional accessibility information for screen readers.

# HTML Comments
Comments are crucial for documentation, organizing code, and leaving notes for future reference. They are ignored by browsers and do not affect the page rendering.

##  Basic HTML Comment

A simple comment is enclosed between `<!--` and `-->`. This is the most common type of comment in HTML.

```html
<!-- This is a simple comment -->
<p>This is a paragraph.</p>

```

**Use**: For general notes or explanations within the HTML code.

##  Commenting Multiple Lines

Comments can span multiple lines. Just place `<!--` at the beginning and `-->` at the end, with line breaks in between.

```html
<!--
  This is a multi-line comment.
  You can write a lot of details here.
  This will not be displayed in the browser.
-->
<p>Some content here.</p>

```

**Use**: For longer explanations, to temporarily hide code, or to break up sections of the code for clarity.

##  Commenting Out Code

You can comment out code to temporarily disable it or for testing purposes. The commented-out code won’t be rendered by the browser.

```html
<!-- <p>This paragraph is commented out and will not be displayed.</p> -->
<p>This paragraph is visible.</p>

```

**Use**: Temporarily hiding code during development or testing.

##  Commenting for Debugging

During development, you might comment out sections of code to help debug or isolate problems.

```html
<!--
  <div>
    This section is causing issues, so I'm commenting it out for now.
  </div>
-->

```

**Use**: To isolate and debug problematic sections of code.

##  Comments for Documentation**

Comments can be used to explain what a block of code does, which can be helpful for team members or when revisiting the code later.

```html
<!--
  This section contains the header for the webpage
  It includes the title, navigation links, and logo.
-->
<header>
  <h1>Welcome to My Website</h1>
  <nav>...</nav>
</header>

```

**Use**: To explain the purpose or structure of a particular section of the page.

# HTML Tags
##  Basic Structure Tags

These tags form the foundation of an HTML document.

1. **`<!DOCTYPE html>`**: Declares the document type and version of HTML. It tells the browser to render the document in HTML5 mode.
2. **`<html>`**: The root element that encloses all the content in the document.
3. **`<head>`**: Contains metadata about the HTML document, such as the title, links to stylesheets, and scripts.
4. **`<body>`**: Contains the content of the HTML document (text, images, videos, etc.) that is visible to the user.
5. **`<title>`**: Sets the title of the document, visible on the browser tab.

##  Structure Tags

Tags that define the layout and sections of a webpage.

1. **`<header>`**: Represents introductory content or a set of navigational links (usually at the top of the page).
2. **`<footer>`**: Represents the footer content of a document or section, typically containing copyright, contact info, etc.
3. **`<main>`**: Specifies the main content of a document, excluding headers, footers, and sidebars.
4. **`<nav>`**: Defines a section of navigation links.
5. **`<section>`**: Defines a section in a document, used to group related content.
6. **`<article>`**: Represents a self-contained piece of content, such as a blog post, news article, or user comment.
7. **`<aside>`**: Defines content that is tangentially related to the content around it, often used for sidebars.
8. **`<div>`**: A generic container used to group elements for styling or scripting. It has no semantic meaning.
9. **`<span>`**: A generic inline container used to style or manipulate small parts of text.

##  Text Content Tags

Used to define and structure text on the page.

1. **`<p>`**: Defines a paragraph of text.
2. **`<h1>`, `<h2>`, ..., `<h6>`**: Define headings, where `<h1>` is the highest (most important) and `<h6>` is the lowest.
3. **`<strong>`**: Indicates that text should be strongly emphasized, typically displayed in bold.
4. **`<em>`**: Indicates that text should be emphasized, typically displayed in italics.
5. **`<b>`**: Represents bold text, but without the semantic emphasis of `<strong>`.
6. **`<i>`**: Represents italicized text, but without the semantic emphasis of `<em>`.
7. **`<u>`**: Underlines text.
8. **`<small>`**: Displays text in a smaller font size.
9. **`<mark>`**: Highlights text, typically used for search results.
10. **`<del>`**: Represents text that has been deleted or removed.
11. **`<ins>`**: Represents text that has been inserted into a document.
12. **`<blockquote>`**: Defines a block of text that is a quotation from another source.
13. **`<q>`**: Defines a short inline quotation.
14. **`<code>`**: Represents a block of code.
15. **`<pre>`**: Represents preformatted text, maintaining whitespace and formatting.
16. **`<br>`**: Represents a line break within text.
17. **`<hr>`**: Defines a thematic break or horizontal rule, often used to separate content.

##  List Tags

Used for defining lists of items.

1. **`<ul>`**: Defines an unordered (bulleted) list.
2. **`<ol>`**: Defines an ordered (numbered) list.
3. **`<li>`**: Defines a list item in both unordered and ordered lists.
4. **`<dl>`**: Defines a description list.
5. **`<dt>`**: Defines a term (or name) in a description list.
6. **`<dd>`**: Defines the description or definition of a term in a description list.

##  Link and Media Tags

Used for linking, embedding, and referencing external content.

1. **`<a>`**: Defines a hyperlink to another page or resource.
2. **`<img>`**: Embeds an image.
3. **`<audio>`**: Defines an audio file.
4. **`<video>`**: Defines a video file.
5. **`<source>`**: Specifies multiple media resources for `<audio>` and `<video>` elements, allowing for multiple formats.
6. **`<iframe>`**: Embeds another document or webpage within the current document.
7. **`<object>`**: Embeds an object such as a Flash file, PDF, or Java applet.
8. **`<embed>`**: Embeds external content, such as multimedia or interactive content.
9. **`<link>`**: Defines relationships between the current document and external resources (often used for linking stylesheets).
10. **`<area>`**: Defines clickable areas inside an image map.
11. **`<map>`**: Defines an image map with clickable areas.
12. **`<picture>`**: Defines a responsive image container for multiple sources.

##  Form Tags

Used to create forms for user input and interaction.

1. **`<form>`**: Defines an HTML form used to collect user input.
2. **`<input>`**: Defines an input field for various types of data (text, password, checkbox, etc.).
3. **`<textarea>`**: Defines a multi-line text input field.
4. **`<button>`**: Defines a clickable button, used to submit forms or trigger JavaScript actions.
5. **`<select>`**: Defines a dropdown list.
6. **`<option>`**: Defines an option in a `<select>` dropdown.
7. **`<optgroup>`**: Groups related options in a dropdown list.
8. **`<label>`**: Defines a label for an `<input>` element.
9. **`<fieldset>`**: Groups related elements within a form and often used with `<legend>`.
10. **`<legend>`**: Defines a caption for a `<fieldset>` element.
11. **`<datalist>`**: Provides a list of predefined options for an `<input>` element.
12. **`<output>`**: Defines the result of a calculation or user action in a form.

##  Table Tags

Used for displaying tabular data.

1. **`<table>`**: Defines a table.
2. **`<tr>`**: Defines a table row.
3. **`<td>`**: Defines a table cell (data).
4. **`<th>`**: Defines a table header cell.
5. **`<thead>`**: Groups the header content in a table.
6. **`<tbody>`**: Groups the body content in a table.
7. **`<tfoot>`**: Groups the footer content in a table.
8. **`<caption>`**: Defines a caption for a table.
9. **`<col>`**: Specifies column properties for an HTML table.
10. **`<colgroup>`**: Groups columns to apply attributes to multiple columns at once.

##  Script and Style Tags

Used for linking and embedding JavaScript and CSS.

1. **`<script>`**: Embeds or links to a JavaScript file.
2. **`<noscript>`**: Defines content to be displayed if JavaScript is not supported or disabled.
3. **`<style>`**: Defines internal CSS styles for the document.
   
##  Metadata Tags

Provide metadata about the HTML document.

1. **`<meta>`**: Specifies metadata such as character encoding, author, description, or keywords.
2. **`<base>`**: Specifies a base URL for all relative URLs in the document.
3. **`<link>`**: Used for external resources like stylesheets or icons.
4. **`<title>`**: Specifies the title of the document shown in the browser’s title bar or tab.
5. **`<head>`**: Contains metadata about the document, such as links to CSS and JavaScript files.

##  Other HTML Tags

Miscellaneous tags used for various purposes.

1. **`<canvas>`**: Provides a drawing surface for graphics, often used for dynamic content like charts and games.
2. **`<svg>`**: Defines scalable vector graphics, used to create vector-based drawings.
3. **`<math>`**: Embeds mathematical notation in web documents.
4. **`<wbr>`**: Suggests possible line break points within text content.

# List of Blocking Elements 
### 1. **`<div>`**

- **Use Case:**
    - `<div>` is a generic container used for grouping and styling elements. It doesn't provide any inherent styling by itself but is crucial for structuring layouts, especially when combined with CSS classes or IDs.
- **Example:**
    
    ```html
    <div class="container">
      <p>This is a paragraph inside a div container.</p>
    </div>
    
    ```
    

---

### 2. **`<p>`** (Paragraph)

- **Use Case:**
    - Used for grouping text into paragraphs. Every `<p>` element automatically has margins above and below it, ensuring text is well-spaced.
- **Example:**
    
    ```html
    <p>This is a paragraph of text that is displayed with block-level behavior.</p>
    
    ```
    

---

### 3. **`<h1>` to `<h6>`** (Headings)

- **Use Case:**
    - These elements represent headings, with `<h1>` being the most important and `<h6>` the least. They are used to create a document outline and are block-level by default.
- **Example:**
    
    ```html
    <h1>Main Heading</h1>
    <h2>Subheading</h2>
    
    ```
    

---

### 4. **`<ol>`** (Ordered List)

- **Use Case:**
    - Used to create numbered lists. Each list item (`<li>`) inside an `<ol>` is a block-level element.
- **Example:**
    
    ```html
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
    
    ```
    

---

### 5. **`<ul>`** (Unordered List)

- **Use Case:**
    - Used to create bullet-point lists. Like `<ol>`, each list item (`<li>`) inside the `<ul>` is block-level.
- **Example:**
    
    ```html
    <ul>
      <li>Item A</li>
      <li>Item B</li>
    </ul>
    
    ```
    

---

### 6. **`<li>`** (List Item)

- **Use Case:**
    - Represents an item in either an ordered (`<ol>`) or unordered (`<ul>`) list. Although it’s a list item, it behaves as a block-level element within its parent list.
- **Example:**
    
    ```html
    <ul>
      <li>This is a list item.</li>
    </ul>
    
    ```
    

---

### 7. **`<header>`**

- **Use Case:**
    - Defines a header for a document or section, typically containing navigation links, a logo, or introductory content. It’s commonly used in semantic layouts.
- **Example:**
    
    ```html
    <header>
      <h1>Website Header</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
    
    ```
    

---

### 8. **`<footer>`**

- **Use Case:**
    - Defines a footer for a document or section. It typically contains copyright information, links, or other metadata.
- **Example:**
    
    ```html
    <footer>
      <p>&copy; 2024 My Website</p>
    </footer>
    
    ```
    

---

### 9. **`<section>`**

- **Use Case:**
    - Represents a thematic grouping of content, typically with a header. It’s used to group related content together, especially in larger, more complex layouts.
- **Example:**
    
    ```html
    <section>
      <h2>Our Services</h2>
      <p>We offer a variety of services...</p>
    </section>
    
    ```
    

---

### 10. **`<article>`**

- **Use Case:**
    - Represents a self-contained piece of content that could be distributed or syndicated, such as a blog post or news article. It is often used in blogs or content-heavy websites.
- **Example:**
    
    ```html
    <article>
      <h2>Article Title</h2>
      <p>This is an article with content that can be read independently.</p>
    </article>
    
    ```
    

---

### 11. **`<nav>`**

- **Use Case:**
    - Defines navigation links. It is commonly used for creating menus or navigation bars in a website.
- **Example:**
    
    ```html
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    
    ```
    

---

### 12. **`<aside>`**

- **Use Case:**
    - Represents content that is tangentially related to the content around it, like a sidebar or additional information.
- **Example:**
    
    ```html
    <aside>
      <h3>Related Articles</h3>
      <p>Check out these related articles...</p>
    </aside>
    
    ```
    

---

### 13. **`<main>`**

- **Use Case:**
    - Defines the main content of the document, excluding headers, footers, and sidebars. It’s important for accessibility and SEO.
- **Example:**
    
    ```html
    <main>
      <h1>Main Content Area</h1>
      <p>This is the primary content of the page.</p>
    </main>
    
    ```
    

---

### 14. **`<form>`**

- **Use Case:**
    - Defines an HTML form that is used to collect user input. It contains other form elements such as `<input>`, `<select>`, and `<textarea>`, all of which are block-level elements.
- **Example:**
    
    ```html
    <form action="/submit" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <button type="submit">Submit</button>
    </form>
    
    ```
    

---

### 15. **`<blockquote>`**

- **Use Case:**
    - Used for displaying a section of content that is quoted from another source. It typically has an indentation or some other visual cue.
- **Example:**
    
    ```html
    <blockquote>
      <p>"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt</p>
    </blockquote>
    
    ```
    

---

### 16. **`<hr>`** (Horizontal Rule)

- **Use Case:**
    - Creates a horizontal line, typically used to separate content or create visual breaks between sections.
- **Example:**
    
    ```html
    <hr>
    
    ```
    

---

### 17. **`<address>`**

- **Use Case:**
    - Represents contact information for the author or owner of a document or section. It’s typically used to mark the address section of a page.
- **Example:**
    
    ```html
    <address>
      <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
    </address>
    
    ```
    
'''
### 18. **`<details>`** and **`<summary>`**

- **Use Case:**
    - `<details>` is used to create a disclosure widget that the user can toggle open or closed. `<summary>` provides a summary or label for the details.
- **Example:**
    
    ```html
    <details>
      <summary>More Info</summary>
      <p>Here is some additional information...</p>
    </details>
    
    ```
    

---

# List of Non-Blocking Elements
In HTML, non-blocking elements refer to elements that do **not** disrupt the flow of content on the page or take up the full width of their parent container. These elements allow other content to appear alongside them, and they typically do **not** create a new block-level box.

Here's a comprehensive list of **non-blocking elements** and their use cases:

### 1. **Inline Elements**

These elements do not start on a new line and only take up as much width as their content requires.

### a. **`<span>`**

- **Use case**: A generic inline container for styling or grouping inline elements.
- **Example**: Wrapping text in a specific style.

```html
<p>This is <span style="color:red;">important</span> text.</p>

```

### b. **`<a>`**

- **Use case**: Defines a hyperlink. It allows users to navigate to another page or resource.
- **Example**: Creating a clickable link to another webpage.

```html
<a href="<https://www.example.com>">Click here</a>

```

### c. **`<img>`**

- **Use case**: Embeds images within text. It is treated as an inline element by default.
- **Example**: Displaying an image within text without breaking the flow.

```html
<p>Check out this image: <img src="image.jpg" alt="Image description"></p>

```

### d. **`<strong>`**

- **Use case**: Used to indicate that the text should be strongly emphasized, often displayed in bold.
- **Example**: Emphasizing important text in a paragraph.

```html
<p><strong>Warning:</strong> Please follow the instructions carefully.</p>

```

### e. **`<em>`**

- **Use case**: Marks text to be emphasized, typically displayed in italics.
- **Example**: Highlighting a word for emphasis.

```html
<p>This is <em>important</em> information.</p>

```

### f. **`<code>`**

- **Use case**: Displays inline code snippets, typically within a text paragraph.
- **Example**: Showing a piece of code in a sentence.

```html
<p>Use the <code>print()</code> function to output text in Python.</p>

```

### g. **`<q>`**

- **Use case**: Represents a short inline quotation. Typically enclosed in quotation marks.
- **Example**: Displaying an inline quote.

```html
<p>He said, <q>Learning HTML is fun!</q></p>

```

### h. **`<small>`**

- **Use case**: Renders text in a smaller font size, usually for fine print.
- **Example**: Including disclaimers or footnotes.

```html
<p><small>Disclaimer: This is a test message.</small></p>

```

### i. **`<abbr>`**

- **Use case**: Represents an abbreviation or acronym. Often used with the `title` attribute to provide a full description.
- **Example**: Displaying an abbreviation with its full form as a tooltip.

```html
<p>The <abbr title="Hypertext Markup Language">HTML</abbr> standard is widely used.</p>

```

### j. **`<b>`**

- **Use case**: Boldface text without indicating any additional emphasis.
- **Example**: Displaying a word in bold.

```html
<p>The answer is <b>42</b>.</p>

```

### k. **`<i>`**

- **Use case**: Italic text, similar to `<em>` but without added emphasis.
- **Example**: Displaying a word in italics.

```html
<p>The word <i>etymology</i> comes from Greek.</p>

```

### 2. **Form Elements**

Some form elements are inline by default, which allows them to flow with surrounding content.

### a. **`<input>`**

- **Use case**: Accepts user input. Can be used in forms to capture data from users.
- **Example**: An inline text field in a form.

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">

```

### b. **`<button>`**

- **Use case**: Represents a clickable button that can trigger actions when clicked.
- **Example**: A submit button in a form.

```html
<form>
  <button type="submit">Submit</button>
</form>

```

### c. **`<select>`**

- **Use case**: Defines a dropdown list of options from which the user can select.
- **Example**: A dropdown list for selecting a country.

```html
<select name="country">
  <option value="usa">USA</option>
  <option value="canada">Canada</option>
</select>

```

### d. **`<label>`**

- **Use case**: Defines a label for a form element, typically associated with `<input>`, `<select>`, and `<textarea>`.
- **Example**: Labeling a form input.

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">

```

### 3. **Text-level Elements**

These are used for inline-level text manipulation and formatting.

### a. **`<bdi>`**

- **Use case**: Used to isolate text that might be formatted in a different direction from the surrounding text.
- **Example**: Isolating bidirectional text in different languages.

```html
<p>This is a <bdi>non-Latin</bdi> language.</p>

```

### b. **`<bdo>`**

- **Use case**: Overrides the default bidirectional text algorithm.
- **Example**: Forcing text to display in a specific direction.

```html
<bdo dir="rtl">This text is right to left</bdo>

```

### c. **`<time>`**

- **Use case**: Represents a specific period in time, such as a date or a time.
- **Example**: Showing a date or time on a webpage.

```html
<time datetime="2024-11-10">November 10, 2024</time>

```

### 4. **Embedded Content Elements**

Some embedded elements can be inline, meaning they don't disrupt the page layout.

### a. **`<iframe>`**

- **Use case**: Embeds another document within the current document.
- **Example**: Embedding a YouTube video or external content inline.

```html
<iframe src="<https://www.youtube.com/embed/example>" width="560" height="315"></iframe>

```

### b. **`<object>`**

- **Use case**: Embeds external resources like multimedia files or interactive content, like Flash or Java applets.
- **Example**: Embedding a PDF document.

```html
<object data="file.pdf" type="application/pdf" width="600" height="400"></object>

```

### c. **`<embed>`**

- **Use case**: Embeds content like a multimedia file (audio, video, etc.).
- **Example**: Embedding a PDF file or audio.

```html
<embed src="audio.mp3" width="300" height="50">

```

### d. **`<svg>`**

- **Use case**: Embeds Scalable Vector Graphics (SVG) directly within an HTML page.
- **Example**: Drawing an inline SVG shape.

```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

```

# Semantic elements 
These elements are specifically designed to give meaning to the structure of web pages, improving readability, accessibility, and SEO.

### 1. **`<header>`**

- **Description**: Represents the introductory content of a page or section. It often contains navigation links, logo, and other introductory elements.
- **Use Case**: Used at the top of a webpage or within a section to provide introductory information and navigation.

```html
<header>
  <h1>Welcome to My Website</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
</header>

```

### 2. **`<nav>`**

- **Description**: Defines a set of navigation links. It groups links to important sections of a website.
- **Use Case**: Used to create navigation bars, links to other pages, or in-page links.

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

```

### 3. **`<article>`**

- **Description**: Represents a self-contained, independent piece of content. It could be a blog post, news article, or any other standalone content.
- **Use Case**: Used for blog posts, news articles, forum posts, or any other piece of content that could be reused or syndicated.

```html
<article>
  <h2>Title of the Article</h2>
  <p>This is the content of the article...</p>
</article>

```

### 4. **`<section>`**

- **Description**: Represents a thematic grouping of content, such as a chapter or a specific section of a page.
- **Use Case**: Used to group related content together, like sections of a page (e.g., a "Contact Us" section, "About Us" section).

```html
<section>
  <h2>About Us</h2>
  <p>We are a company that...</p>
</section>

```

### 5. **`<footer>`**

- **Description**: Represents the footer of a page or section. It often contains copyright information, contact details, or links to privacy policies.
- **Use Case**: Used at the bottom of a page or section to hold information like copyright notices, contact details, or additional navigation links.

```html
<footer>
  <p>&copy; 2024 My Website</p>
  <p><a href="#contact">Contact</a></p>
</footer>

```

### 6. **`<aside>`**

- **Description**: Represents content that is tangentially related to the content around it, often used for sidebars, pull quotes, or related links.
- **Use Case**: Used for sidebars, additional information, or advertisements that are related but not central to the content.

```html
<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="#">Article 1</a></li>
    <li><a href="#">Article 2</a></li>
  </ul>
</aside>

```

### 7. **`<main>`**

- **Description**: Represents the primary content of a document. There should be only one `<main>` element per document.
- **Use Case**: Used to wrap the central content of a page, excluding headers, footers, sidebars, etc.

```html
<main>
  <h1>Welcome to Our Website</h1>
  <p>This is the main content area.</p>
</main>

```

### 8. **`<figure>`**

- **Description**: Represents any content that is referenced from the main content, such as images, diagrams, or illustrations.
- **Use Case**: Used for images, diagrams, or any media that is referenced from the main content, typically with an optional caption.

```html
<figure>
  <img src="image.jpg" alt="A beautiful landscape">
  <figcaption>Beautiful landscape in the mountains.</figcaption>
</figure>

```

### 9. **`<figcaption>`**

- **Description**: Represents a caption or description for the content inside the `<figure>` element.
- **Use Case**: Used within a `<figure>` element to provide a caption for an image, chart, or other media content.

```html
<figure>
  <img src="diagram.png" alt="Chart showing data trends">
  <figcaption>Chart showing the rise in web traffic.</figcaption>
</figure>

```

### 10. **`<mark>`**

- **Description**: Represents text that has been highlighted or marked for reference or emphasis, typically used for search results or important keywords.
- **Use Case**: Used to highlight keywords or important sections of text in the document.

```html
<p>We offer <mark>great deals</mark> on all our products.</p>

```

### 11. **`<time>`**

- **Description**: Represents a specific time or range of time. It can be used for dates, times, or durations.
- **Use Case**: Used to represent specific dates, times, or time ranges, such as event schedules or blog post dates.

```html
<time datetime="2024-11-10">November 10, 2024</time>

```

### 12. **`<details>`**

- **Description**: Represents a disclosure widget from which the user can obtain additional information, typically a toggleable section.
- **Use Case**: Used to create collapsible sections, like a "Read more" button or expandable details.

```html
<details>
  <summary>Click to reveal more info</summary>
  <p>Here is the additional information...</p>
</details>

```

### 13. **`<summary>`**

- **Description**: Represents a summary or label for a `<details>` element. It's visible when the details are collapsed.
- **Use Case**: Used as the clickable heading to toggle visibility of the content inside the `<details>` element.

```html
<details>
  <summary>More about us</summary>
  <p>We are a company specializing in...</p>
</details>

```

### 14. **`<address>`**

- **Description**: Represents contact information for the author or owner of a document or article.
- **Use Case**: Used for contact information such as email, phone number, or address.

```html
<address>
  <p>Email us at: <a href="mailto:contact@example.com">contact@example.com</a></p>
</address>

```

### 15. **`<progress>`**

- **Description**: Represents the progress of a task or action, such as file upload or download.
- **Use Case**: Used to indicate the progress of a process, such as a download or upload.

```html
<progress value="50" max="100">50%</progress>

```

### 16. **`<output>`**

- **Description**: Represents the result of a calculation or user action, such as a form input.
- **Use Case**: Used to display the result of a calculation or dynamic input to the user.

```html
<output for="number1 number2" name="result">0</output>

```

---

### Summary

- **Structural Elements**: `<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<aside>`
- **Content and Media Elements**: `<figure>`, `<figcaption>`, `<mark>`, `<time>`, `<address>`, `<progress>`, `<output>`
- **Interactive and Descriptive Elements**: `<details>`, `<summary>`

  # How to Make a Table
  ### Basic Table Structure

To create a table, you use the `<table>` element. The basic building blocks of a table are rows (`<tr>`), headers (`<th>`), and cells (`<td>`).

```html
<table border="1">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
    <td>Row 1, Cell 3</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
    <td>Row 2, Cell 3</td>
  </tr>
</table>

```

### Key Elements for Tables

1. **`<table>`**: Defines the table itself.
2. **`<tr>`**: Represents a row in the table.
3. **`<th>`**: Defines a header cell, typically bold and centered by default.
4. **`<td>`**: Defines a standard cell in the table.

### Adding Table Headers

Headers are often used to describe the content of the columns or rows. You can define headers using the `<th>` element.

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Location</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>28</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>34</td>
    <td>London</td>
  </tr>
</table>

```

### Adding Column and Row Spanning

1. **`colspan`**: Makes a cell span multiple columns.
2. **`rowspan`**: Makes a cell span multiple rows.

### Example: Table with `colspan` and `rowspan`

```html
<table border="1">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td rowspan="2">Row 1, Cell 1 (spans 2 rows)</td>
    <td>Row 1, Cell 2</td>
    <td>Row 1, Cell 3</td>
  </tr>
  <tr>
    <td colspan="2">Row 2, Cell 2 (spans 2 columns)</td>
  </tr>
</table>

```

### Styling the Table

You can use CSS to add styles to your table for a cleaner and more attractive design.

### Example: Table with CSS Styling

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styled Table</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 10px;
      text-align: left;
      border: 1px solid #ddd;
    }
    th {
      background-color: #f2f2f2;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  </style>
</head>
<body>

<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Location</th>
  </tr>
  <tr>
    <td>John Doe</td>
    <td>28</td>
    <td>New York</td>
  </tr>
  <tr>
    <td>Jane Smith</td>
    <td>34</td>
    <td>London</td>
  </tr>
</table>

</body>
</html>

```

### Additional Table Features

1. **Table Caption**: You can add a caption to describe the table using the `<caption>` element.
    
    ```html
    <table border="1">
      <caption>Employee Information</caption>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Salary</th>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>Developer</td>
        <td>$100,000</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>Designer</td>
        <td>$85,000</td>
      </tr>
    </table>
    
    ```
    
2. **Table with `thead`, `tbody`, and `tfoot`**: These elements are used for grouping header, body, and footer content, improving readability and accessibility.
    
    ```html
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>28</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>34</td>
          <td>London</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">End of the Table</td>
        </tr>
      </tfoot>
    </table>
    
    ```
    

### Example: Complete Table with All Features

```html
<table border="1">
  <caption>Sales Data</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
      <th>Expenses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$5000</td>
      <td>$3000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$4000</td>
      <td>$2500</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$9000</td>
      <td>$5500</td>
    </tr>
  </tfoot>
</table>

```

### Explanation of the Structure:

- **`<caption>`**: Adds a title to the table.
- **`<thead>`**, **`<tbody>`**, **`<tfoot>`**: Grouping elements for header, body, and footer content.
- **`colspan`**: Allows a cell to span across multiple columns.
- **`rowspan`**: Allows a cell to span across multiple rows.

<!-- Basic Table Structure -->
<section>
<h2>Basic Table Structure</h2>
<table border="1">
<tr>
<th>Header 1</th>
<th>Header 2</th>
<th>Header 3</th>
</tr>
<tr>
<td>Row 1, Cell 1</td>
<td>Row 1, Cell 2</td>
<td>Row 1, Cell 3</td>
</tr>
<tr>
<td>Row 2, Cell 1</td>
<td>Row 2, Cell 2</td>
<td>Row 2, Cell 3</td>
</tr>
</table>
</section>

<!-- Table with Header -->
<section>
<h2>Table with Header</h2>
<table border="1">
<tr>
<th>Name</th>
<th>Age</th>
<th>Location</th>
</tr>
<tr>
<td>John Doe</td>
<td>28</td>
<td>New York</td>
</tr>
<tr>
<td>Jane Smith</td>
<td>34</td>
<td>London</td>
</tr>
</table>
</section>

<!-- Table with Thead, Tbody, Tfoot -->
<section>
<h2>Table with Thead, Tbody, Tfoot</h2>
<table>
<caption>Sales Data</caption>
<thead>
<tr>
<th>Month</th>
<th>Sales</th>
<th>Expenses</th>
</tr>
</thead>
<tbody>
<tr>
<td>January</td>
<td>$5000</td>
<td>$3000</td>
</tr>
<tr>
<td>February</td>
<td>$4000</td>
<td>$2500</td>
</tr>
</tbody>
<tfoot>
<tr>
<td>Total</td>
<td>$9000</td>
<td>$5500</td>
</tr>
</tfoot>
</table>
</section>

<!-- Table with Caption -->
<section>
<h2>Table with Caption</h2>
<table border="1">
<caption>Employee List</caption>
<tr>
<th>Name</th>
<th>Age</th>
<th>Location</th>
</tr>
<tr>
<td>John Doe</td>
<td>28</td>
<td>New York</td>
</tr>
<tr>
<td>Jane Smith</td>
<td>34</td>
<td>London</td>
</tr>
</table>
</section>

<!-- Table with Additional Features -->
<section>
<h2>Table with Additional Features</h2>
<table border="1">
<thead>
<tr>
<th>Month</th>
<th>Sales</th>
<th>Expenses</th>
</tr>
</thead>
<tbody>
<tr>
<td>January</td>
<td>$5000</td>
<td>$3000</td>
</tr>
<tr>
<td>February</td>
<td>$4000</td>
<td>$2500</td>
</tr>
</tbody>
<tfoot>
<tr>
<td>Total</td>
<td>$9000</td>
<td>$5500</td>
</tr>
</tfoot>
</table>
</section>

# How to Add Images
In HTML, you can add images using the `<img>` tag. Below are the various ways to add images in HTML, with explanations and examples:

### 1. **Basic Image Inclusion**

To include an image, you can use the `<img>` tag with the `src` attribute specifying the image URL and the `alt` attribute for accessibility.

```html
<img src="image.jpg" alt="Description of the image">

```

### 2. **Adding an Image with Local Path**

If your image is stored locally (in the same directory as your HTML file), you can reference it directly by its filename or relative path.

```html
<img src="images/myimage.jpg" alt="A beautiful scenery">

```

### 3. **Adding an Image with an External URL**

You can also add an image hosted on an external website by providing the full URL.

```html
<img src="<https://www.example.com/images/logo.png>" alt="Website Logo">

```

### 4. **Setting Width and Height**

You can specify the width and height of an image directly in the `<img>` tag using the `width` and `height` attributes (in pixels).

```html
<img src="image.jpg" alt="Description" width="500" height="300">

```

### 5. **Responsive Images Using `srcset`**

For responsive design, you can use the `srcset` attribute to provide different image sources for different screen sizes.

```html
<img src="image.jpg" srcset="image-small.jpg 500w, image-medium.jpg 1000w, image-large.jpg 2000w" alt="Responsive image">

```

- The browser will choose the appropriate image based on the display width and device resolution.

### 6. **Adding an Image as a Link**

You can wrap an `<img>` tag with an anchor `<a>` tag to make the image clickable, linking to another page.

```html
<a href="<https://www.example.com>">
  <img src="logo.png" alt="Click here to visit Example.com">
</a>

```

### 7. **Using `picture` Element for Art Direction**

The `<picture>` element allows you to specify multiple image sources for different scenarios, like varying screen resolutions or aspect ratios.

```html
<picture>
  <source srcset="image-small.jpg" media="(max-width: 600px)">
  <source srcset="image-medium.jpg" media="(max-width: 1200px)">
  <img src="image-large.jpg" alt="A responsive image example">
</picture>

```

- This approach allows you to display different images based on the viewport size or other conditions.

### 8. **Adding Background Images Using CSS**

While the `<img>` tag is for inserting images into content, you can also use CSS to set an image as the background of an element.

```html
<div class="background-image">
  <p>This is content over a background image.</p>
</div>

<style>
  .background-image {
    background-image: url('background.jpg');
    background-size: cover; /* Ensures the image covers the entire div */
    height: 500px;
  }
</style>

```

### 9. **Image with Tooltip (Title)**

You can add a tooltip to an image by using the `title` attribute. When a user hovers over the image, the text from `title` will appear.

```html
<img src="image.jpg" alt="Description" title="This is a beautiful landscape.">

```

### 10. **Lazy Loading Images**

To improve page load performance, you can use the `loading="lazy"` attribute to defer loading images until they come into view.

```html
<img src="image.jpg" alt="Lazy-loaded image" loading="lazy">

```

### Complete Example of Adding Multiple Types of Images

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Images in HTML</title>
</head>
<body>

  <!-- Basic Image -->
  <h2>Basic Image</h2>
  <img src="image.jpg" alt="Description of image">

  <!-- Image with Local Path -->
  <h2>Image with Local Path</h2>
  <img src="images/scenery.jpg" alt="Beautiful Scenery">

  <!-- External URL Image -->
  <h2>External Image</h2>
  <img src="<https://www.example.com/logo.png>" alt="External Logo">

  <!-- Image with Width and Height -->
  <h2>Image with Specified Width and Height</h2>
  <img src="image.jpg" alt="Scenery" width="600" height="400">

  <!-- Responsive Image with srcset -->
  <h2>Responsive Image</h2>
  <img src="image.jpg" srcset="image-small.jpg 500w, image-medium.jpg 1000w, image-large.jpg 2000w" alt="Responsive Image Example">

  <!-- Image as Link -->
  <h2>Image as a Link</h2>
  <a href="<https://www.example.com>">
    <img src="logo.png" alt="Click to Visit Example" width="100">
  </a>

  <!-- Using picture for Art Direction -->
  <h2>Using picture for Art Direction</h2>
  <picture>
    <source srcset="image-small.jpg" media="(max-width: 600px)">
    <source srcset="image-medium.jpg" media="(max-width: 1200px)">
    <img src="image-large.jpg" alt="A responsive image example">
  </picture>

  <!-- Background Image with CSS -->
  <h2>Background Image with CSS</h2>
  <div class="background-image">
    <p>This content is over a background image.</p>
  </div>

  <style>
    .background-image {
      background-image: url('background.jpg');
      background-size: cover;
      height: 300px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>

  <!-- Lazy Loaded Image -->
  <h2>Lazy Loaded Image</h2>
  <img src="image.jpg" alt="Lazy Loaded Image" loading="lazy">

</body>
</html>

```

### Summary of Key Attributes:

- **`src`**: Specifies the image source (URL or path).
- **`alt`**: Provides a description for the image (important for accessibility).
- **`width` / `height`**: Defines the size of the image in pixels.
- **`srcset`**: Defines multiple sources for responsive images.
- **`title`**: Displays a tooltip on hover.
- **`loading="lazy"`**: Defers the image load until it’s needed.
- **`background-image`**: Used in CSS to set an image as the background.

  # How to Add or Embed Video and Audio
  To add or embed video and audio in HTML, you can use the `<video>` and `<audio>` elements, respectively. Here's how you can embed different types of video and audio in an HTML document:

### 1. **Embedding a Video**

You can embed a video using the `<video>` tag. It supports various attributes like `controls`, `autoplay`, `loop`, and `poster`.
- make sure in the sub file of your new folder on vs code the music or video is uploaded.
- if you want to add pinterest high quality GIF you can simply right click - go to Copy Image Address and add in <img src="paste the Copied Address link here" alt="GIF">
  
```html
<!-- Embedding a Video -->
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  <p>Your browser does not support HTML5 video. You can <a href="video.mp4">download the video</a> instead.</p>
</video>

```

**Explanation:**

- **`<video>`**: This is the HTML tag to embed the video.
- **`width` and `height`**: These attributes define the size of the video.
- **`controls`**: This attribute adds playback controls such as play, pause, volume, etc.
- **`<source>`**: Specifies multiple video sources for different formats (MP4, OGG). The browser will play the first one it supports.
- **`type`**: Specifies the MIME type of the video source.
- **Fallback Content**: The `<p>` tag inside provides fallback content for browsers that don't support the video element.

### 2. **Embedding Audio**

To embed audio, use the `<audio>` tag. It can also include the `controls`, `autoplay`, and `loop` attributes.

```html
<!-- Embedding Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <p>Your browser does not support HTML5 audio. You can <a href="audio.mp3">download the audio</a> instead.</p>
</audio>

```

**Explanation:**

- **`<audio>`**: The HTML tag used to embed audio.
- **`controls`**: Adds the default audio controls (play, pause, volume, etc.).
- **`<source>`**: Specifies the audio file sources and their MIME types (MP3, OGG).
- **Fallback Content**: Provides an alternative link for browsers that don’t support the `<audio>` tag.

### 3. **Additional Attributes for Video and Audio**

- **`autoplay`**: Automatically starts the video/audio when the page loads.
- **`muted`**: Starts the video/audio with the sound muted.
- **`loop`**: Makes the video/audio loop indefinitely once it ends.
- **`poster`**: For the `<video>` tag, it specifies an image to show while the video is loading (used as a preview).
- **`preload`**: Specifies if and how the video or audio should be preloaded when the page loads:
    - `auto`: The browser should load the entire media file.
    - `metadata`: Only metadata (like duration) should be loaded.
    - `none`: No media is loaded until playback begins.

### 4. **Example with Advanced Features**

```html
<!-- Advanced Video Example -->
<video width="640" height="360" controls autoplay loop muted poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogv" type="video/ogg">
  <p>Your browser does not support HTML5 video. You can <a href="video.mp4">download the video</a> instead.</p>
</video>

<!-- Advanced Audio Example -->
<audio controls autoplay loop>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <p>Your browser does not support HTML5 audio. You can <a href="audio.mp3">download the audio</a> instead.</p>
</audio>

```

### Key Points:

- Always include multiple sources with different formats to ensure compatibility across browsers.
- The fallback content (like the `<p>` tag) ensures users without support for the `<video>` or `<audio>` tags have a download link.
- The `autoplay` and `muted` attributes are commonly used together for video or audio that plays automatically but is muted (e.g., background media).

Let me know if you need further details or specific use cases!

If You want Little More extra or Specific Tag Knowlege or Api Knowledge 
- visit = <a href="https://www.w3schools.com/html/default.asp">w3schools</a>
