# Debugging Steps for HTML, CSS, Javascript inside VS Code
1) Open **Run and Debug** on the left panel.
2) Press **Ctrl + Shift + D** and then click on *create a launch.json file*.
3) The new file created *.vscode/launch.json* and  add a similar configuration as given below:
``` 
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Chrome",
            "type": "chrome",
            "request": "launch",
            "file": "${workspaceFolder}/index.html",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```
4) Right click on *index.html* and choose **Open with Live Server**
5) Press **F5** to launch the html page.
6) Add breakpoints in the Javascript files before launching for rendering events. We can also manually add breakpoints in the code, and remove **debugger;** in production phase.
```
function applyFilters() {

    debugger;

    const filtered = organizations.filter(org => {
        return selectedTiers.has(org.tier);
    });
}
```
7) For debugging HTML and CSS live use **DevTools**. Right Click on the webpage and click on **Inspect**.
8) Additionally for JS files, add data logging in the code. To view the console logs, press **F12**. Logging format:
```
console.log("Organizations:", organizations);
console.log("Rendering markers:", data.length);
```