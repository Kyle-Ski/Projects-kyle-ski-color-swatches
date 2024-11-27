# Kyle Ski Color Swatches

This project is a Vue 3 application that generates HSL color swatches using [The Color API](https://www.thecolorapi.com/).

## **Getting Started**

Follow the instructions below to set up and run this project on your local machine.

### **Prerequisites**

Ensure the following tools are installed on your machine:
- **Node.js**: Version `22.11.0` (or higher). Download and install it from [Node.js official website](https://nodejs.org/).
- **npm**: Comes bundled with Node.js. Ensure it is updated to the latest version by running:
  ```bash
  npm install -g npm

### Installation

1. **Clone the Repository**
    ``bash
    git clone https://github.com/kyle-ski/kyle-ski-color-swatches.git
    cd kyle-ski-color-swatches

2. **Install Dependencies**
    ```bash
    npm install

### Running the Project

1. **Start the Development Server:** Launch the development server to view the app in your browser:
    ```bash
    npm run dev

- Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the URL displayed in your terminal).

2. **Lint and Format Code:**

- **Lint:**
    ```bash
    npm run lint

- **Format:**
    ```bash
    npm run format

### Project Structure
The current project is in its early stages. Below is the structure so far:

- `src/`: Contains application source code.
    - `views/HomeView.vue`: The main view of the app.
    - `main.js`: The entry point of the app.

### Technologies Used
- Vue 3: The frontend framework.
- Vite: A fast build tool and development server.
- Pinia: State management library for Vue.
- Axios: For API calls.
- ESLint & Prettier: Code linting and formatting tools.

#### **Why Vue?**

1. **Something New to Play With**:
   - Since Akkio leverages Vue internally, and I'd never used it before, I thought it would be fun to try out a new technology that I'd be using on a daily basis.

2. **Great Developer Experience**:
   - Vue is simple to set up and quick to learn, especially with tools like `npm create vue@latest` that make starting a new project seamless.
   - The Composition API offers a clear and modular way to write code, similar to React Hooks, making it both intuitive and powerful.

3. **Reactivity Made Easy**:
   - Vue’s built-in reactivity system simplifies updating and managing the user interface, which is perfect for a project like this that involves dynamic inputs and real-time updates to the grid.

4. **Readable and Maintainable**:
   - Vue’s single-file components keep everything (template, script, and styles) in one place, making the code more organized and easier to maintain.

---

### **Why Axios?**

1. **Simple and Reliable**:
   - Axios is an easy-to-use library for making HTTP requests. It handles things like JSON parsing out of the box, which simplifies working with APIs.

2. **Built-In Features**:
   - Axios comes with useful features like request/response interceptors and error handling, making it easy to add robust functionality to the project without extra code.

3. **Familiar and Well-Supported**:
   - With its widespread use and excellent documentation, Axios is a dependable choice that ensures smooth integration and fewer headaches when working with external APIs.


## **Checklist**

#### **Phase 1: Foundation (High Priority)**
- [x] Clean up boilerplate code, assets, and components. *(Done)*
- [x] Set up a basic structure for the app (e.g., `HomeView` with placeholder content).
- [ ] Integrate [The Color API](https://www.thecolorapi.com/) and test fetching color data for fixed `Saturation` and `Lightness` values.
- [ ] Display a basic grid of swatches for the fetched color data:
  - [ ] Show visualized color (background of the swatch).
  - [ ] Display color name.
  - [ ] Display RGB values.

#### **Phase 2: User Interactivity (Medium Priority)**
- [ ] Add simple user controls for `Saturation` and `Lightness`:
  - [ ] Sliders or number inputs for `S` (0–100) and `L` (0–100).
  - [ ] Trigger API calls when the user changes values (debounced).
- [ ] Handle loading states:
  - [ ] Show a spinner or "Loading..." message during API calls.
  - [ ] Display a meaningful error message for failed API calls.

#### **Phase 3: Polish and Optimization (Low Priority)**
- [ ] Make the grid responsive:
  - [ ] Use CSS Grid or Flexbox to adapt the layout to screen sizes.
- [ ] Cache API responses to reduce redundant calls.
- [ ] Add a fallback message if no colors are available for the selected `S` and `L`.

#### **Phase 4: Optional Extras (If Time Allows)**
- [ ] Add unit tests for components and API integration.
- [ ] Enhance user feedback:
  - [ ] Preview the selected `S` and `L` values dynamically.
  - [ ] Allow reset to default values.
- [ ] Optimize performance for larger grids (e.g., lazy loading or virtual scrolling).
- [ ] Refine the README to explain functionality and design decisions.

