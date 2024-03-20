# Solar Flare Animations

A lightweight JavaScript library for applying solar flare effects to elements on your webpage. Built on top of Popmotion for smooth animations and Animate.css for initial effects.

## Installation

To install the library, run:

```bash
npm install solar-flare-animations
```

Make sure you have `popmotion` and `animate.css` installed in your project as well, as they are peer dependencies of this library:

```bash
npm install popmotion animate.css
```

## Usage

First, import the library in your JavaScript file:

```javascript
import solarFlareAnimations from 'solar-flare-animations';
```

Then, you can apply a solar flare animation to any element by calling `applyFlare` with the element's ID:

```javascript
solarFlareAnimations.applyFlare('yourElementId');
```

### Example

HTML:

```html
<div id="yourElementId">This is your element</div>
```

JavaScript:

```javascript
import solarFlareAnimations from 'solar-flare-animations';

solarFlareAnimations.applyFlare('yourElementId');
```

## API

### `applyFlare(elementId)`

Applies the solar flare animation to the element with the specified ID.

- `elementId`: The ID of the DOM element to which the animation will be applied.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
