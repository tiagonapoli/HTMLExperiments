## Disable Stylesheet

Two experiments were made, one with async + defer stylesheets and one without async + defer. The objective is to disable a stylesheet added on head.

### Results

- If I want to disable a stylesheet without happening a flash on screen the disable has to happen before the first paint. Analysing the page events timeline it's noticeable that the first paint occurs after DOMContentLoaded, but before window.onload. If we don't want a flash the disable has to happen on DOMContentLoaded.