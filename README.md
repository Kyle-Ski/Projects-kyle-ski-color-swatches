# Kyle Ski Color Swatches

This project is a Vue 3 application that generates HSL color swatches, displaying the RGB values and corresponding color using [The Color API](https://www.thecolorapi.com/).

## **Live URL**:

Check out the deployed version of this project [here!](https://projects-kyle-ski-color-swatches.vercel.app/)
Deployed with Vercel

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

- `src/`: Contains application source code.
    - `views/HomeView.vue`: The main view of the app.
    - `components/`: Houses the reusable parts of our application (ColorSwatch)
    - `router/`: Holds vue logic for routing of the app (not needed in this project)
    - `utils/`: Utility functions for the application. 
    - `main.js`: The entry point of the app.

### Technologies Used
- Vue 3: The frontend framework.
- Vite: A fast build tool and development server.
- Axios: For API calls.
- ESLint & Prettier: Code linting and formatting tools.

#### **Why Vue?**

1. **Something New to Play With**:
   - Since Akkio leverages Vue internally, and I'd never used it before, I thought it would be fun to try out a new technology that I'd be using on a daily basis.

2. **Great Developer Experience**:
   - Vue is simple to set up and quick to learn, especially with tools like `npm create vue@latest` that make starting a new project seamless.

3. **Reactivity Made Easy**:
   - Vue’s built-in reactivity system simplifies updating and managing the user interface, which is perfect for a project like this that involves dynamic inputs and real-time updates to the grid.

4. **Readable and Maintainable**:
   - Vue’s single-file components keep everything (template, script, and styles) in one place, making the code more organized and easier to maintain.

---

### **Why Number `<input/>`s?**

I chose number `<input/>` elements for the saturation and lightness fields to enhance usability and ensure data validity. Number inputs offer the following benefits:

1. **Range Validation**: By setting `min` and `max` attributes, we prevent users from entering values outside the valid range (0–100). This reduces the likelihood of invalid inputs being submitted.

2. **Accessibility**: Number inputs are more intuitive for users navigating with keyboards or assistive technologies, as they can rely on arrow keys to adjust the values.

3. **Error Prevention**: Number inputs automatically restrict the user to numeric characters, avoiding issues caused by non-numeric inputs.

By using number inputs, we prioritize data integrity and provide a seamless, user-friendly interface for configuring saturation and lightness values.
  
### **Why Cards for Colors?**

Cards provide a clean and organized way to display color swatches along with their details. They encapsulate each color's name and RGB values, making the information visually distinct and easy to scan. This structure also supports responsiveness, and if interactability is needed in the future it will be easy to add on.

### **Why "Load More" Button?**

The "Load More" button is a common pattern in modern apps and websites to handle large datasets efficiently. It allows users to load additional content incrementally without overwhelming the page or user experience, ensuring better performance and responsiveness.

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
- [x] Integrate [The Color API](https://www.thecolorapi.com/) and test fetching color data for fixed `Saturation` and `Lightness` values.
- [x] Display a basic grid of swatches for the fetched color data:
  - [x] Show visualized color (background of the swatch).
  - [x] Display color name.
  - [x] Display RGB values.

#### **Phase 2: User Interactivity (Medium Priority)**
- [x] Add simple user controls for `Saturation` and `Lightness`:
  - [x] Number inputs for `S` (0–100) and `L` (0–100).
  - [x] Add "Load More" Button to load more items from the api based on batched items
- [x] Handle loading states:
  - [x] Show "Loading..." message during API calls.
  - [x] Display a meaningful error message for failed API calls.

#### **Phase 3: Polish and Optimization (Low Priority)**
- [x] Make the grid responsive:
  - [x] Use CSS Grid to adapt the layout to screen sizes.
- [x] Cache API responses to reduce redundant calls.
- [ ] Add a fallback message if no colors are available for the selected `S` and `L`.

#### **Phase 4: Optional Extras (If Time Allows)**
- [ ] Add unit tests for components and API integration.
- [ ] Enhance user feedback:
- [ ] Optimize performance for larger grids (e.g., lazy loading or virtual scrolling).

