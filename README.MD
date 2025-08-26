# Doover Image Loader
A generic doover remote-component for displaying images of data in the Doover UI.

## Component URL
```
https://getdoover.github.io/image-loader/ImageLoader.js
```
## Description
The Image Loader component is designed to efficiently load and display images within the Doover interface. It provides a reliable way to handle image rendering with proper error handling and loading states.
## Usage
Include the component in your Doover app using the provided URL.

```python

from pydoover import ui

...

class ExampleUI:

def __init__(self, config):
	self.config = config
    self.logo = ui.RemoteComponent(
    "doover_logo",
    "Doover Logo",
	component_url="https://getdoover.github.io/image-loader/ImageLoader.js",
	image_url="https://doover.com/wp-content/uploads/2025/02/Blue-Background-2.png",
	max_height="100px",
)

```
## Features
- Efficient image loading and caching
- Error handling for failed image loads
- Loading state management
- Responsive image display
- Integration with Doover UI framework

## Development
This component is built using webpack and can be developed locally. See the webpack configuration for build details.