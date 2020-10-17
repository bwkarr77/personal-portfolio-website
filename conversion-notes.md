HERE ARE THE STEPS I DID TO CONVERT FROM AN HTML5 APP

- html, css, js profile
  INTO A REACT.JS PROFILE
- using React.js, and other libraries.

1. yarn create react-app <name>
2. copy the stylesheets over
   - ALL css, sass, webfonts, javascript files.
3. in the index.html file:
   - add references to the stylsheets (looks like: conversionImages\stylesheets.png)
   - add script type below the "root" div (looks like: conversionImage\scriptTags.png)
   - adjust so it includes styling and important info (look like: conversionImages\indexHtml.png)
4. in the App.js file:
   - copy over the content from the html5 template (everything with the <body> tag) over to the App.js file (inside the <div className='App'>).
   - change: *class => className; *any "for=" inside tabs to "htmlFor=";
   - fix any other issues that arise from differences in html names vs. React names.
5. Adjust any issues that arise from the conversion until the two version look similar. If you picked a complicated template (with a lot of animations) you may run into issues, or have to ignore them until you've separated them into components.
