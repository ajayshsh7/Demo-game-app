import { Category, Question } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'frontend', name: 'Front-end', description: 'React, CSS, Browser APIs' },
  { id: 'backend', name: 'Back-end', description: 'Node.js, APIs, Architecture' },
  { id: 'database', name: 'Database', description: 'SQL, NoSQL, Optimization' },
  { id: 'system_design', name: 'System Design', description: 'Scalability, Patterns' },
  { id: 'devops', name: 'DevOps', description: 'Master deployment, CI/CD, containers, cloud infrastructure, and automation.'},
  {id: 'oop', name: 'Object Oriented Programming', description: 'Solve problems using encapsulation, inheritance, polymorphism, abstraction, and design principles.'},
];

export const QUESTIONS: Record<string, Question[]> = {
  frontend: [
  {
    id: 'fe-1',
    categoryId: 'frontend',
    text: 'You create a React component as `function profile() { return <div>Profile</div> }` and render `<profile />`. What is the most likely problem?',
    options: [
      'React treats `profile` as a regular HTML or DOM tag',
      'React converts `profile` into a component automatically',
      'React prevents the component from receiving any props',
      'React requires every component to use arrow functions'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-2',
    categoryId: 'frontend',
    text: 'A large project has 30 pages and each page contains slightly different global button styles. What approach would best improve long-term maintainability?',
    options: [
      'Copy the same button styles into every page',
      'Create a shared button system with reusable styles',
      'Place every button style inside one huge file',
      'Use separate inline styles for every button'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-3',
    categoryId: 'frontend',
    text: 'An e-commerce homepage uses several JavaScript-driven animations that run continuously while the user scrolls. The page feels laggy on mobile. What should you investigate first?',
    options: [
      'Increase the duration of every animation slightly',
      'Add additional React state during scrolling',
      'Replace the animations with database requests',
      'Check layout work and prefer transform or opacity'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-4',
    categoryId: 'frontend',
    text: 'A React list contains 1,000 products. Every time the user types into a search box, all product components appear to re-render. What is the most appropriate first optimization?',
    options: [
      'Remove React state from the product components',
      'Convert each product into a separate image',
      'Filter efficiently and prevent unnecessary re-renders',
      'Store every product inside a separate browser tab'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-5',
    categoryId: 'frontend',
    text: 'A component receives an object prop created inline on every parent render. A memoized child still re-renders. Why?',
    options: [
      'React.memo cannot work with object properties',
      'Objects cannot normally be passed through React props',
      'React deeply compares every object before rendering',
      'The object receives a new reference on every render'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-6',
    categoryId: 'frontend',
    text: 'A developer uses `useEffect` to calculate `totalPrice` from existing state on every render. What would usually be a better approach?',
    options: [
      'Calculate the derived value directly when needed',
      'Store the calculated value permanently in localStorage',
      'Use another effect to calculate the value again',
      'Use useRef to store every calculated value'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-7',
    categoryId: 'frontend',
    text: 'A search input sends an API request on every keystroke and causes unnecessary network traffic. What is the best solution?',
    options: [
      'Disable the search field during every keystroke',
      'Use a debounce before sending the search request',
      'Send multiple requests for each entered character',
      'Use setInterval to repeatedly trigger every search'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-8',
    categoryId: 'frontend',
    text: 'A user clicks "Submit" twice quickly and two orders are created. Which frontend improvement would help prevent this situation?',
    options: [
      'Increase the submit button font size slightly',
      'Add additional animations to the submit button',
      'Disable submission while the request remains pending',
      'Clear the entire application state after submitting'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-9',
    categoryId: 'frontend',
    text: 'A React component fetches data inside useEffect. The user navigates away before the request finishes. Why might cancellation be useful?',
    options: [
      'It makes the API response considerably larger',
      'It automatically changes REST requests into GraphQL',
      'It makes the applications CSS load considerably faster',
      'It prevents unnecessary work after the component is gone'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-10',
    categoryId: 'frontend',
    text: 'A dashboard has several components that all need the logged-in users information. What is usually cleaner than passing the user through many unrelated components?',
    options: [
      'Use shared state such as Context or state management',
      'Duplicate the same user data inside every component',
      'Store the user information inside CSS variables',
      'Create separate HTML pages for every component'
    ],
    correctOptionIndex: 0,
  },

  {
    id: 'fe-11',
    categoryId: 'frontend',
    text: 'A React list uses the array index as the key. Items can be inserted or removed from the middle of the list. What problem can occur?',
    options: [
      'React may associate state with the wrong list item',
      'The browser automatically removes the entire DOM',
      'React automatically converts the list into a table',
      'The browser completely stops applying the CSS'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-12',
    categoryId: 'frontend',
    text: 'A component has deeply nested conditional rendering that is becoming difficult to understand. What would improve maintainability?',
    options: [
      'Put all conditions inside one extremely large ternary',
      'Break the UI into smaller meaningful components and conditions',
      'Duplicate the component several times across the application',
      'Move the conditions into separate CSS animation rules'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-13',
    categoryId: 'frontend',
    text: 'A React component stores `isLoggedIn` and also stores `user` separately, even though `isLoggedIn` can be determined from `user`. What problem can this create?',
    options: [
      'React cannot store boolean values inside component state',
      'The browser may automatically refresh after every update',
      'The application can develop conflicting sources of truth',
      'React state objects cannot contain ordinary string values'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-14',
    categoryId: 'frontend',
    text: 'A component needs to remember a DOM element but changing that reference should not trigger a re-render. Which hook fits this requirement?',
    options: [
      'useState is designed for storing changing DOM references',
      'useEffect is designed for storing persistent DOM references',
      'useMemo is designed for storing mutable DOM references',
      'useRef stores the reference without causing a re-render'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-15',
    categoryId: 'frontend',
    text: 'A developer adds `useCallback` to every function in an application hoping to make everything faster. What is the main issue with this approach?',
    options: [
      'Memoization adds overhead and is useful when stability matters',
      'useCallback completely prevents functions from executing normally',
      'useCallback can only be used inside CSS-related components',
      'useCallback always makes every application significantly slower'
    ],
    correctOptionIndex: 0,
  },

  {
    id: 'fe-16',
    categoryId: 'frontend',
    text: 'A form contains email, password, and confirm-password fields. The submit button should remain disabled until all fields are valid. Where should validation logic primarily live?',
    options: [
      'Only inside CSS rules associated with the input fields',
      'Inside reusable validation logic based on the form state',
      'Inside an SVG attached to the form submit button',
      'Only inside the browser document title element'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-17',
    categoryId: 'frontend',
    text: 'A form reloads the page whenever the user clicks Submit in a React application. What is likely missing?',
    options: [
      'The form is missing a React.memo optimization call',
      'The form is missing a window.reload invocation',
      'The form is missing a useMemo calculation hook',
      'The submit handler is missing event.preventDefault()'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-18',
    categoryId: 'frontend',
    text: 'A form displays an error message only after the user has interacted with the field. What state is useful for this behavior?',
    options: [
      'A loading state that tracks the current network request',
      'A theme state that tracks the current visual appearance',
      'A touched state that tracks whether the field was visited',
      'An animation state that tracks whether the field is moving'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-19',
    categoryId: 'frontend',
    text: 'A login form stores the password in React state and logs the entire state object while debugging. What is the main concern?',
    options: [
      'React cannot safely store ordinary password strings in state',
      'Passwords may accidentally appear in logs or debugging tools',
      'Password inputs require an SVG before they can work correctly',
      'React state objects cannot contain values from password fields'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-20',
    categoryId: 'frontend',
    text: 'A form has 15 fields and validation becomes difficult to maintain because every input has separate validation code. What is the better approach?',
    options: [
      'Centralize validation rules so the same logic can be reused',
      'Remove most validation rules to simplify the form structure',
      'Validate only the first input before allowing submission',
      'Use CSS selectors as the primary validation mechanism'
    ],
    correctOptionIndex: 0,
  },

  {
    id: 'fe-21',
    categoryId: 'frontend',
    text: 'A page has a navigation link styled as a `<div>` with an onClick handler. Keyboard users cannot easily activate it. What is the better solution?',
    options: [
      'Make the clickable div larger for keyboard users',
      'Add an SVG behind the div to improve its semantics',
      'Use a semantic anchor or button for the intended action',
      'Add additional box shadows around the clickable div'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-22',
    categoryId: 'frontend',
    text: 'A form field has a placeholder saying "Enter email" but no visible label. What is the main accessibility concern?',
    options: [
      'Email inputs are not allowed to contain placeholder text',
      'CSS cannot style placeholders consistently across browsers',
      'The field may lack a persistent accessible name or label',
      'Placeholder attributes cannot contain ordinary descriptive text'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-23',
    categoryId: 'frontend',
    text: 'A modal opens when a user clicks a button. For accessibility, what should happen to keyboard focus?',
    options: [
      'Focus should generally move into the modal and be managed',
      'Focus should always move to the browser address bar',
      'Focus should be removed completely from the document',
      'Focus should automatically move toward the page footer'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-24',
    categoryId: 'frontend',
    text: 'A decorative SVG icon is announced by a screen reader and makes the page confusing. What should you consider?',
    options: [
      'Replace the SVG with JavaScript-generated visual elements',
      'Hide decorative SVGs from assistive technology when appropriate',
      'Add more animation so the SVG becomes visually obvious',
      'Make every decorative SVG interactive for screen readers'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-25',
    categoryId: 'frontend',
    text: 'An image contains important information, but its alt attribute is empty. What should be done?',
    options: [
      'Keep alt empty because all images should have empty alternatives',
      'Put the important image description only inside CSS content',
      'Replace the image with an animated version containing the information',
      'Provide meaningful alternative text describing the important information'
    ],
    correctOptionIndex: 3,
  },

  {
    id: 'fe-26',
    categoryId: 'frontend',
    text: 'A CSS animation changes width from 100px to 500px every frame and causes visible jank. Which properties are generally safer for smooth animations?',
    options: [
      'Use width and height properties for the animation instead',
      'Use margin and padding properties for the animation instead',
      'Use transform and opacity properties for smoother animations',
      'Use top and left properties for the animation instead'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-27',
    categoryId: 'frontend',
    text: 'A card should smoothly move 100px to the right when hovered. Which approach is generally preferable for performance?',
    options: [
      'Use transform: translateX() to move the card visually',
      'Change margin-left repeatedly during the hover animation',
      'Modify the DOM structure during every animation frame',
      'Use JavaScript to repeatedly modify the HTML content'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-28',
    categoryId: 'frontend',
    text: 'A page contains a scroll animation that runs JavaScript on every scroll event and becomes sluggish. What is a good first improvement?',
    options: [
      'Increase the amount of JavaScript executed during scrolling',
      'Disable browser scrolling so the animation cannot run',
      'Increase the number of DOM nodes used by the animation',
      'Use CSS where possible and throttle expensive scroll work'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-29',
    categoryId: 'frontend',
    text: 'A website uses large JavaScript animations for a simple fade-in effect. What is usually the better choice?',
    options: [
      'Create a new DOM node for every animation frame',
      'Use CSS transitions or animations when they are sufficient',
      'Use React state updates for every animation frame',
      'Use a WebSocket connection to control the fade effect'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-30',
    categoryId: 'frontend',
    text: 'A user has enabled reduced motion in their operating system. How should a frontend application respond?',
    options: [
      'Increase animation speed so the effect finishes sooner',
      'Force every animation to run regardless of user preference',
      'Ignore the operating system preference completely',
      'Respect prefers-reduced-motion and reduce unnecessary motion'
    ],
    correctOptionIndex: 3,
  },

  {
    id: 'fe-31',
    categoryId: 'frontend',
    text: 'You use Motion to animate a list when items are added and removed. Which capability is particularly useful for making removed items animate out?',
    options: [
      'Use localStorage to preserve the removed list elements',
      'Use AnimatePresence to handle exiting animated elements',
      'Use useId to generate identifiers for removed list elements',
      'Use dangerouslySetInnerHTML to animate removed list elements'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-32',
    categoryId: 'frontend',
    text: 'A Motion animation should start only after a component enters the viewport. Which concept is most appropriate?',
    options: [
      'Use database indexing to detect viewport visibility',
      'Use form serialization to detect viewport visibility',
      'Use viewport-based animation triggering for the component',
      'Use CSS specificity rules to detect viewport visibility'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-33',
    categoryId: 'frontend',
    text: 'A developer creates a spring animation with extremely high stiffness and low damping. What visual result is most likely?',
    options: [
      'The element may oscillate or feel excessively bouncy',
      'The element will automatically become completely static',
      'The browser will disable JavaScript during the animation',
      'The animated element will automatically become inaccessible'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-34',
    categoryId: 'frontend',
    text: 'A page uses dozens of complex Motion animations simultaneously and performance drops on low-end devices. What is the best design decision?',
    options: [
      'Increase the number of animated elements across the page',
      'Add more React state to coordinate every animation',
      'Animate everything more aggressively to finish sooner',
      'Reduce unnecessary motion and prioritize efficient transforms'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-35',
    categoryId: 'frontend',
    text: 'A button changes its width during a hover animation, causing nearby content to jump. What would prevent most of this layout shift?',
    options: [
      'Increase the font size so the width change appears smaller',
      'Add additional margins whenever the button changes width',
      'Animate transform or scale instead of changing layout dimensions',
      'Force a complete page reload after every hover animation'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-36',
    categoryId: 'frontend',
    text: 'A dashboard is responsive on desktop but overflows horizontally on mobile because a child has a fixed width of 900px. What should you investigate?',
    options: [
      'Increase the fixed child width to approximately 1200px',
      'Use responsive sizing constraints and flexible layout behavior',
      'Remove all CSS rules affecting the responsive dashboard',
      'Add additional JavaScript to manually position the child'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-37',
    categoryId: 'frontend',
    text: 'A CSS rule `.card p` unexpectedly overrides a component-specific paragraph style. What should you investigate first?',
    options: [
      'Investigate CSS specificity and the order of style rules',
      'Investigate the React state used by the paragraph component',
      'Investigate the SVG viewBox used somewhere on the page',
      'Investigate the TypeScript generic used by the component'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-38',
    categoryId: 'frontend',
    text: 'A project has repeated CSS values such as the same spacing, radius, and brand colors in dozens of files. What would make the design system easier to maintain?',
    options: [
      'Duplicate the same values more consistently across files',
      'Move every design value into separate JavaScript strings',
      'Use CSS custom properties or shared design tokens',
      'Remove responsive styles so fewer values need maintenance'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-39',
    categoryId: 'frontend',
    text: 'Two elements overlap unexpectedly because one has a higher z-index but still appears behind another. What should you investigate?',
    options: [
      'Investigate the React hooks used by both overlapping elements',
      'Investigate the stacking contexts and positioning rules',
      'Investigate the form validation logic on the page',
      'Investigate the TypeScript types assigned to each element'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-40',
    categoryId: 'frontend',
    text: 'A CSS layout uses many absolute positions and breaks whenever text becomes longer. What layout strategy would usually be more resilient?',
    options: [
      'Use JavaScript to calculate every element position dynamically',
      'Hardcode every text width so positions remain predictable',
      'Use additional absolute positioning for the remaining elements',
      'Use Flexbox or Grid for the main structural layout'
    ],
    correctOptionIndex: 3,
  },

  {
    id: 'fe-41',
    categoryId: 'frontend',
    text: 'A button contains only a hamburger SVG icon and has no accessible name. What should you add?',
    options: [
      'Add an accessible label such as aria-label or visible text',
      'Add a larger SVG so the icon becomes easier to recognize',
      'Add more CSS animation so the button becomes noticeable',
      'Add a database ID so assistive technology can identify it'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-42',
    categoryId: 'frontend',
    text: 'An SVG logo looks blurry when displayed at different sizes because it was converted into a low-resolution PNG. What advantage would an SVG provide?',
    options: [
      'It automatically improves JavaScript execution performance',
      'It stores database records more efficiently than a PNG',
      'It removes the need for CSS styling across the application',
      'It scales without the same pixelation associated with raster images'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-43',
    categoryId: 'frontend',
    text: 'An SVG illustration contains dozens of unnecessary path elements and significantly increases DOM complexity. What could improve performance?',
    options: [
      'Add more path elements to simplify browser rendering',
      'Animate every path continuously to improve visual performance',
      'Optimize and simplify the SVG path structure',
      'Convert every SVG path into a separate React state value'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-44',
    categoryId: 'frontend',
    text: 'You want to change the color of an SVG icon using CSS, but the SVG uses hardcoded `fill="#000"`. What could make it easier to theme?',
    options: [
      'Use currentColor or another CSS-compatible fill value',
      'Convert the SVG into SQL data before applying the color',
      'Remove the SVG viewBox so CSS can control the shape',
      'Use useEffect to manually change every SVG pixel'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-45',
    categoryId: 'frontend',
    text: 'An SVG is purely decorative and should not receive keyboard focus. What should you consider?',
    options: [
      'Add tabindex="0" so the decorative SVG can receive focus',
      'Make every SVG path clickable for keyboard navigation',
      'Use appropriate accessibility attributes such as aria-hidden',
      'Add a form action so the SVG becomes a semantic control'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-46',
    categoryId: 'frontend',
    text: 'A TypeScript function accepts either a string ID or a number ID. What is the most appropriate type?',
    options: [
      'Use `any` because the function accepts multiple possible values',
      'Use `string | number` because both values are explicitly supported',
      'Use `never` because the function accepts more than one value',
      'Use `unknown[]` because IDs can have different primitive types'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-47',
    categoryId: 'frontend',
    text: 'A React component receives a `variant` prop that should only be `"primary"` or `"secondary"`. How can TypeScript help prevent invalid values?',
    options: [
      'Use a literal union type containing the allowed variant values',
      'Use `any` so the component accepts all possible variant values',
      'Remove the prop type so React handles the values automatically',
      'Use a boolean because the component has two possible variants'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-48',
    categoryId: 'frontend',
    text: 'A API response is typed as `any`, and a developer accesses `response.user.profile.name` without checking whether those properties exist. What is the main disadvantage?',
    options: [
      'The browser automatically caches the API response differently',
      'The API becomes faster because TypeScript skips checking',
      'TypeScript provides less protection against invalid property access',
      'React automatically stops rendering when nested data is missing'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-49',
    categoryId: 'frontend',
    text: 'You receive data from an external API and do not fully trust its runtime shape. Which TypeScript type is safer than `any` before validation?',
    options: [
      'Use `unknown` until the received value has been properly checked',
      'Use `never` because external data should not be trusted',
      'Use `void` because the API response is not yet validated',
      'Use `object[]` because every API response must contain objects'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-50',
    categoryId: 'frontend',
    text: 'A component prop should be optional and have a default value when omitted. Which TypeScript design expresses this correctly?',
    options: [
      'Make every component property required before rendering',
      'Use `never` for the property to prevent missing values',
      'Use `undefined` as the entire component prop type',
      'Make the property optional and provide a default during destructuring'
    ],
    correctOptionIndex: 3,
  },

  {
    id: 'fe-51',
    categoryId: 'frontend',
    text: 'A JavaScript loop modifies an array while iterating over it, causing some elements to be skipped. What is a safer approach?',
    options: [
      'Always replace the loop with an infinite while loop',
      'Avoid mutation during iteration or create a new filtered array',
      'Add random delays between every array modification',
      'Convert the array into an object before modifying its values'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-52',
    categoryId: 'frontend',
    text: 'A developer compares two objects with `===` and expects it to check whether their contents are identical. What actually happens?',
    options: [
      'Objects are compared by reference rather than their contents',
      'Objects are deeply compared automatically by JavaScript',
      'Objects are converted to JSON before comparison automatically',
      'Objects are compared alphabetically based on their properties'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-53',
    categoryId: 'frontend',
    text: 'A function unexpectedly uses an older value of state inside an asynchronous callback. What concept should the developer investigate?',
    options: [
      'Investigate CSS inheritance and cascading behavior',
      'Investigate SVG path rendering and coordinate systems',
      'Investigate closures and the possibility of stale state',
      'Investigate HTML semantics and browser document structure'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-54',
    categoryId: 'frontend',
    text: 'A developer uses `map()` to transform an array but forgets to return anything from the callback. What will the resulting array contain?',
    options: [
      'The original values will automatically remain unchanged',
      'Each array element will contain an undefined result',
      'Every array element will automatically become a Promise',
      'The transformed values will automatically be returned by map'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-55',
    categoryId: 'frontend',
    text: 'A UI performs an expensive calculation after every keystroke even though the result is only needed when the user stops typing. What JavaScript technique can help?',
    options: [
      'Use recursion to delay the expensive calculation',
      'Use infinite loops to wait until typing has stopped',
      'Use deep cloning to reduce the number of calculations',
      'Use debouncing to wait until typing activity pauses'
    ],
    correctOptionIndex: 3,
  },

  {
    id: 'fe-56',
    categoryId: 'frontend',
    text: 'A page contains a huge image below the fold that is slowing initial loading. What could improve loading performance?',
    options: [
      'Convert the image into an even larger PNG file',
      'Load the same image multiple times during page startup',
      'Lazy-load the image when it is appropriate to do so',
      'Block the main thread until the image finishes loading'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-57',
    categoryId: 'frontend',
    text: 'A React page loads a large chart library even though only one rarely visited route uses it. What optimization could help?',
    options: [
      'Use code splitting or lazy loading for the chart library',
      'Import the same chart library multiple times in the app',
      'Move the chart library into a CSS file for faster loading',
      'Disable React features so the chart library becomes smaller'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-58',
    categoryId: 'frontend',
    text: 'A web page has a large amount of JavaScript and the first interaction feels delayed. Which browser metric/concept is especially relevant?',
    options: [
      'Database normalization and relational table structure',
      'SVG viewBox dimensions and vector coordinate systems',
      'CSS color contrast and visual accessibility requirements',
      'Main-thread work and overall interaction responsiveness'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-59',
    categoryId: 'frontend',
    text: 'A component performs a heavy calculation during every render even when its inputs have not changed. What React feature could help when the calculation is genuinely expensive?',
    options: [
      'Use useState with changing values to cache calculations',
      'Use useMemo to reuse an expensive calculated result',
      'Use useEffect without dependencies for every calculation',
      'Use useRef for every calculated value regardless of cost'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-60',
    categoryId: 'frontend',
    text: 'A page renders 10,000 rows and becomes slow because all rows exist in the DOM simultaneously. What technique is appropriate?',
    options: [
      'Use larger font sizes so fewer rows fit on screen',
      'Add more rows so the browser can optimize the list',
      'Use virtualization or windowing to render visible rows',
      'Run setState repeatedly so each row updates independently'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-61',
    categoryId: 'frontend',
    text: 'A developer uses `innerHTML` with user-provided content to render comments. What security problem should they consider?',
    options: [
      'Potential cross-site scripting vulnerabilities from unsafe content',
      'React key collisions caused by repeatedly rendering comments',
      'CSS specificity problems caused by user-generated content',
      'SVG scaling problems caused by dynamically inserted content'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-62',
    categoryId: 'frontend',
    text: 'A user submits a form while offline. Which frontend architecture provides a better user experience than simply showing a network error?',
    options: [
      'Disable every button permanently whenever the connection disappears',
      'Delete the submitted form whenever the network request fails',
      'Reload the entire page repeatedly until the connection returns',
      'Detect offline state and provide retry or queue behavior when supported'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-63',
    categoryId: 'frontend',
    text: 'A button works with a mouse but not when users press Enter or Space with the keyboard. What is the likely issue?',
    options: [
      'The CSS color prevents keyboard users from activating the button',
      'The interaction may not use an appropriate semantic control',
      'The API response is too fast for keyboard interaction to work',
      'The SVG icon is too large for keyboard events to function'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-64',
    categoryId: 'frontend',
    text: 'A page displays a loading spinner for every tiny piece of data, causing the interface to constantly flicker. What is a better UX strategy?',
    options: [
      'Make every loading spinner considerably larger and more visible',
      'Reload the complete page whenever a small request begins',
      'Add additional animations around every individual loading spinner',
      'Use stable loading states such as skeletons and avoid flickering'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-65',
    categoryId: 'frontend',
    text: 'A React app fetches the same data in five different components, causing duplicate network requests. What architectural improvement would help?',
    options: [
      'Make five additional requests so all components stay synchronized',
      'Store the API response inside CSS variables for shared access',
      'Centralize and cache server state using a suitable data strategy',
      'Disable the components that request the same data repeatedly'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-66',
    categoryId: 'frontend',
    text: 'A navigation menu opens with an animation, but users can click links while the menu is visually disappearing. What should be considered?',
    options: [
      'Coordinate animation and interaction state so unavailable elements stay inactive',
      'Increase the animation speed so users cannot see the disappearing menu',
      'Add more z-index values to separate the menu from other elements',
      'Remove semantic HTML so the animation can control all interactions'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-67',
    categoryId: 'frontend',
    text: 'A page has a sticky header that covers anchor-linked content when users jump to a section. What CSS technique can help?',
    options: [
      'Increase the header z-index to an extremely large value',
      'Disable page scrolling whenever an anchor link is activated',
      'Add position: absolute to the body element to change scrolling',
      'Use scroll-margin-top or another appropriate scroll offset strategy'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-68',
    categoryId: 'frontend',
    text: 'A component needs to fetch data whenever its `userId` changes. What should be included in the useEffect dependency list?',
    options: [
      'The complete DOM tree should be included in the dependencies',
      'Nothing should be included because useEffect detects changes itself',
      'The userId value should be included in the dependencies',
      'Only the setState function should be included in the dependencies'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-69',
    categoryId: 'frontend',
    text: 'A CSS animation works perfectly on desktop but causes discomfort for some users. What is the most responsible implementation?',
    options: [
      'Respect user motion preferences and provide reduced-motion behavior',
      'Increase animation speed so users experience the motion briefly',
      'Force the animation because consistent behavior is more important',
      'Replace the CSS animation with a JavaScript interval instead'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-70',
    categoryId: 'frontend',
    text: 'You are building a large frontend application where developers repeatedly solve the same problems for buttons, forms, modals, typography, spacing, and animations. What architecture would provide the greatest long-term benefit?',
    options: [
      'Copy and paste components whenever another page needs them',
      'Allow every page to define completely different UI conventions',
      'Put every component into one large file for centralized management',
      'Build a reusable design system with shared tokens and patterns'
    ],
    correctOptionIndex: 3,
  },
],
  backend: [
    {
  id: 'be-1',
  categoryId: 'backend',
  text: 'Your Node.js API receives thousands of requests, but one endpoint performs a heavy CPU calculation and causes other requests to become slow. What would be the best approach?',
  options: [
    'Store the calculation result inside browser cookies',
    'Move the CPU-heavy work to worker threads or another service',
    'Increase the request body size for that endpoint',
    'Add more logging statements around the calculation'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-2',
  categoryId: 'backend',
  text: 'A Node.js API occasionally crashes because an unexpected error is thrown inside an asynchronous operation. What should you implement to handle such failures more reliably?',
  options: [
    'Use centralized error handling with proper async propagation',
    'Add additional validation inside the frontend application',
    'Store failed requests temporarily inside browser localStorage',
    'Add extra middleware without changing error propagation'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-3',
  categoryId: 'backend',
  text: 'Your API is receiving requests from many clients, and one endpoint is being abused by a single user. What would best protect the server?',
  options: [
    'Increase the maximum response size for that endpoint',
    'Remove authentication requirements from the endpoint',
    'Apply rate limiting based on users or client requests',
    'Create additional HTML pages for the affected endpoint'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-4',
  categoryId: 'backend',
  text: 'A Node.js application needs to read a large file and send it to the client without consuming a huge amount of memory. Which approach is most appropriate?',
  options: [
    'Convert the complete file into a JSON response first',
    'Load the complete file into memory before sending it',
    'Store the complete file temporarily inside a browser cookie',
    'Use Node.js streams to process and send the file gradually'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-5',
  categoryId: 'backend',
  text: 'Your Node.js server has database credentials directly written inside the source code. What is the biggest problem with this approach?',
  options: [
    'It exposes sensitive credentials and complicates environment configuration',
    'It prevents the Node.js application from accepting HTTP requests',
    'It causes JavaScript code to execute significantly slower on the server',
    'It increases the amount of CSS and frontend code in the application'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-6',
  categoryId: 'backend',
  text: 'An API endpoint takes several seconds because it performs multiple independent database requests sequentially. What could improve the response time?',
  options: [
    'Add additional HTML elements to the frontend application',
    'Execute independent database operations concurrently when appropriate',
    'Disable some HTTP methods from the backend application',
    'Store sensitive database passwords inside the request URL'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-7',
  categoryId: 'backend',
  text: 'Your Node.js application becomes difficult to maintain because routes contain authentication, validation, database queries, and business logic all together. What would be a better design?',
  options: [
    'Keep every responsibility together inside the same route file',
    'Duplicate the route logic separately for each type of user',
    'Separate controllers, services, middleware, and data-access responsibilities',
    'Move the business logic from backend routes into frontend styling'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-8',
  categoryId: 'backend',
  text: 'A backend receives malformed JSON from a client and currently crashes instead of returning a useful response. What should the backend do?',
  options: [
    'Restart the browser whenever malformed JSON reaches the server',
    'Ignore malformed requests and continue processing them normally',
    'Return HTTP 500 for every malformed request received by the server',
    'Return an appropriate 4xx response through centralized error handling'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-9',
  categoryId: 'backend',
  text: 'Your Node.js API performs a long-running email-generation task. Users do not need the result immediately. What architecture would reduce the API response time?',
  options: [
    'Put the email task into a background job queue for later processing',
    'Process the complete email task synchronously during every request',
    'Increase the password length used by users of the application',
    'Send the email-generation task through the frontend styling system'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-10',
  categoryId: 'backend',
  text: 'Your Node.js server needs to handle CPU-intensive work while utilizing multiple CPU cores. What could help scale the application?',
  options: [
    'Open additional browser tabs for each CPU-intensive operation',
    'Use Node.js clustering or multiple application instances across cores',
    'Increase the size of cookies sent with each application request',
    'Create additional HTML files for the application workload'
  ],
  correctOptionIndex: 1,
},

{
  id: 'be-11',
  categoryId: 'backend',
  text: 'A frontend needs to retrieve a user’s profile without modifying anything on the server. Which HTTP method is most appropriate?',
  options: [
    'POST',
    'DELETE',
    'GET',
    'PATCH'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-12',
  categoryId: 'backend',
  text: 'A client sends invalid data while creating a user account. Which response is generally more appropriate?',
  options: [
    '200 OK',
    '201 Created',
    '301 Moved Permanently',
    '400 Bad Request'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-13',
  categoryId: 'backend',
  text: 'Your API successfully creates a new resource after receiving a POST request. Which status code best communicates this?',
  options: [
    '204 No Content',
    '201 Created',
    '401 Unauthorized',
    '404 Not Found'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-14',
  categoryId: 'backend',
  text: 'A user requests a resource that does not exist. Which HTTP response should normally be returned?',
  options: [
    '200 OK',
    '500 Internal Server Error',
    '201 Created',
    '404 Not Found'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-15',
  categoryId: 'backend',
  text: 'Your API allows users to update only one field of a profile without replacing the entire resource. Which HTTP method is most appropriate?',
  options: [
    'PATCH',
    'GET',
    'DELETE',
    'OPTIONS'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-16',
  categoryId: 'backend',
  text: 'An authenticated user attempts to access an admin-only endpoint but does not have the required permission. What response best represents this situation?',
  options: [
    '201 Created',
    '404 Not Found',
    '403 Forbidden',
    '301 Redirect'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-17',
  categoryId: 'backend',
  text: 'Your REST API has an endpoint `/users/123/orders`. What does this URL most naturally represent?',
  options: [
    'A database server named orders for user 123',
    'Orders associated with user 123',
    'A WebSocket connection for user 123',
    'A CSS file belonging to user 123'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-18',
  categoryId: 'backend',
  text: 'Your API returns different error formats from different endpoints, making frontend error handling difficult. What would improve the design?',
  options: [
    'Remove error messages from the backend responses',
    'Return HTML pages from every API endpoint',
    'Return different status formats based on each endpoint',
    'Use a consistent error-response structure across API endpoints'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-19',
  categoryId: 'backend',
  text: 'A client repeatedly sends the same GET request for data that rarely changes. What HTTP mechanism can help reduce unnecessary network requests?',
  options: [
    'HTTP caching headers',
    'Password hashing',
    'POST requests for repeated retrieval',
    'WebSockets for every repeated request'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-20',
  categoryId: 'backend',
  text: 'Your API returns 100,000 records from a database to a mobile client, causing slow responses. What is the better solution?',
  options: [
    'Return every record in a single response',
    'Convert all records into an HTML response',
    'Implement pagination for large result sets',
    'Disable authentication for large responses'
  ],
  correctOptionIndex: 2,
},

{
  id: 'be-21',
  categoryId: 'backend',
  text: 'After login, your server needs a way to recognize the user across subsequent API requests. What is a common solution?',
  options: [
    'Authentication tokens',
    'Random query parameters',
    'CSS classes',
    'HTML comments'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-22',
  categoryId: 'backend',
  text: 'Your application stores user passwords as plain text. What is the biggest problem?',
  options: [
    'Login operations become unnecessarily fast',
    'REST API requests can no longer contain passwords',
    'A database breach could expose users’ actual passwords',
    'Passwords become difficult for administrators to display'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-23',
  categoryId: 'backend',
  text: 'What should a backend use to protect stored passwords?',
  options: [
    'Base64 encoding for each stored password value',
    'Plain text storage inside a protected database table',
    'Reversible encryption with one shared application key',
    'A strong password hashing algorithm with a unique salt'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-24',
  categoryId: 'backend',
  text: 'Your JWT contains user information and is sent with API requests. What problem does the token primarily solve?',
  options: [
    'It automatically encrypts all application database records',
    'It allows the server to identify and authenticate the requester',
    'It replaces the frontend application during authentication',
    'It improves browser CSS rendering during authenticated requests'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-25',
  categoryId: 'backend',
  text: 'A user logs out, but an already-issued JWT remains valid until it expires. What is one common strategy for handling token invalidation?',
  options: [
    'Use short-lived access tokens with refresh-token management',
    'Store the token permanently inside the user’s browser',
    'Increase the token size to prevent future authentication',
    'Remove HTTPS from the authentication and API requests'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-26',
  categoryId: 'backend',
  text: 'Your application allows an authenticated normal user to call an admin endpoint by manually changing the URL. What is missing?',
  options: [
    'Browser routing',
    'Image optimization',
    'Authorization checks',
    'CSS validation'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-27',
  categoryId: 'backend',
  text: 'An attacker attempts to inject malicious SQL through a login form. Which backend practice helps prevent this?',
  options: [
    'Increase the input field size for login requests',
    'Use parameterized queries or a properly configured ORM',
    'Store SQL commands inside browser cookies',
    'Remove database indexes from the affected tables'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-28',
  categoryId: 'backend',
  text: 'Your API sends authentication credentials over plain HTTP. What is the major risk?',
  options: [
    'The API automatically becomes difficult to scale',
    'Database queries become slower during authentication',
    'JSON responses can no longer be returned by the API',
    'Credentials can potentially be intercepted during transmission'
  ],
  correctOptionIndex: 3,
},

{
  id: 'be-29',
  categoryId: 'backend',
  text: 'Your product API repeatedly queries the database for the same popular product. What problem can Redis caching help solve?',
  options: [
    'It can reduce repeated database queries and improve response time',
    'It permanently replaces the primary database for all application data',
    'It automatically fixes frontend bugs without changing backend logic',
    'It removes authentication requirements from protected application routes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-30',
  categoryId: 'backend',
  text: 'A cached product price is changed in the database, but users continue receiving the old price from Redis. What problem is occurring?',
  options: [
    'DNS failure',
    'SQL injection',
    'WebSocket failure',
    'Cache invalidation or stale cache data'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-31',
  categoryId: 'backend',
  text: 'You want cached data to automatically disappear after a certain period. Which Redis feature is useful?',
  options: [
    'Foreign keys',
    'TTL or key expiration',
    'HTTP redirects',
    'GraphQL fragments'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-32',
  categoryId: 'backend',
  text: 'Your website receives a huge number of requests for a public leaderboard that changes every few minutes. Why might Redis be a good choice?',
  options: [
    'Redis automatically converts REST APIs into GraphQL APIs',
    'Redis replaces HTTPS communication between clients and servers',
    'Frequently requested data can be served from memory',
    'Redis automatically renders React components on the server'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-33',
  categoryId: 'backend',
  text: 'Your application stores user session information in Redis because several backend servers need access to the same sessions. What problem does this solve?',
  options: [
    'Shared session state across multiple application instances',
    'Database schema design across unrelated application services',
    'Frontend component reuse across different browser pages',
    'CSS responsiveness across different screen sizes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-34',
  categoryId: 'backend',
  text: 'Your Redis cache goes down and your application immediately fails even though the primary database is still available. What architectural improvement would make the system more resilient?',
  options: [
    'Store all primary database data only inside Redis',
    'Remove the primary database and depend entirely on Redis',
    'Treat the cache as an optimization and fall back to the database',
    'Disable backend error handling whenever Redis becomes unavailable'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-35',
  categoryId: 'backend',
  text: 'You need to prevent multiple users from simultaneously processing the same resource in a distributed application. Which Redis capability could help?',
  options: [
    'CSS variables',
    'HTTP redirects',
    'HTML forms',
    'Distributed locking'
  ],
  correctOptionIndex: 3,
},

{
  id: 'be-36',
  categoryId: 'backend',
  text: 'A mobile application needs only a user’s name and profile image, but a REST endpoint returns 30 additional fields. What problem could GraphQL solve?',
  options: [
    'Replace authentication across the complete application',
    'Automatically encrypt all records stored in the database',
    'Allow the client to request only the fields it needs',
    'Eliminate all backend business logic from the application'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-37',
  categoryId: 'backend',
  text: 'Your frontend needs data from users, posts, and comments, requiring several REST requests. What GraphQL capability can reduce this problem?',
  options: [
    'A single query can request related data through the GraphQL schema',
    'GraphQL removes the need for databases behind the application',
    'GraphQL converts normal HTTP communication directly into TCP',
    'GraphQL automatically eliminates authorization requirements'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-38',
  categoryId: 'backend',
  text: 'A GraphQL API allows clients to request extremely deeply nested relationships, causing expensive database operations. What should the backend consider?',
  options: [
    'Disable every GraphQL query from being processed by the server',
    'Remove the GraphQL schema to prevent complex client requests',
    'Return HTML instead of GraphQL responses for nested relationships',
    'Use query depth or complexity limits with efficient data fetching'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-39',
  categoryId: 'backend',
  text: 'A GraphQL resolver fetches a user’s posts individually for 1,000 users, resulting in hundreds of database queries. Which problem is this commonly associated with?',
  options: [
    'JWT expiration',
    'N+1 query problem',
    'DNS poisoning',
    'CSS cascade problem'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-40',
  categoryId: 'backend',
  text: 'A GraphQL API needs to expose a new optional field without breaking existing clients. What is generally the safest approach?',
  options: [
    'Add the field while keeping existing fields available',
    'Delete the existing field immediately after adding the new field',
    'Change every existing field type at the same time',
    'Require every existing client to upgrade immediately'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-41',
  categoryId: 'backend',
  text: 'Your GraphQL API allows a user to query another user’s private information. What should be added to the resolver logic?',
  options: [
    'Browser routing',
    'CSS middleware',
    'Image compression',
    'Authorization checks'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-42',
  categoryId: 'backend',
  text: 'Your application has many different clients that need different representations of the same data. Why might GraphQL be useful?',
  options: [
    'It removes the need for backend validation across all clients',
    'It automatically creates database indexes for every requested field',
    'Clients can define the shape of the data they need',
    'It eliminates network communication between clients and servers'
  ],
  correctOptionIndex: 2,
},

{
  id: 'be-43',
  categoryId: 'backend',
  text: 'You are building a chat application where messages should appear immediately without repeatedly polling the server. Which technology is most suitable?',
  options: [
    'FTP',
    'SQL',
    'CSS',
    'WebSockets'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-44',
  categoryId: 'backend',
  text: 'A stock dashboard needs to receive price updates from the server as soon as they occur. Why would WebSockets be useful?',
  options: [
    'They replace the database used to store stock information',
    'They maintain a persistent connection for real-time communication',
    'They require the client to refresh the page for every update',
    'They only work when serving static files from the backend'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-45',
  categoryId: 'backend',
  text: 'Your WebSocket server has thousands of connected users and one server instance becomes overloaded. What could help scale it?',
  options: [
    'Use multiple WebSocket servers with shared state or message distribution',
    'Disable persistent connections so every message starts a new connection',
    'Store all real-time messages only inside browser variables',
    'Add additional HTML elements to distribute the connection workload'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-46',
  categoryId: 'backend',
  text: 'Multiple WebSocket servers are running, and a message received by server A needs to reach users connected to server B. What can help distribute the message?',
  options: [
    'HTML forms',
    'CSS Grid',
    'Redis Pub/Sub or another message broker',
    'LocalStorage used independently by every browser'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-47',
  categoryId: 'backend',
  text: 'A user’s internet connection temporarily drops while using a WebSocket application. What should the client typically do?',
  options: [
    'Permanently disable WebSockets after the first connection failure',
    'Delete the application database when the connection disappears',
    'Restart the backend server manually whenever a client disconnects',
    'Detect disconnection and retry with an appropriate backoff strategy'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-48',
  categoryId: 'backend',
  text: 'A WebSocket connection remains open for a very long time and the server needs to determine whether the client is still reachable. What mechanism can help?',
  options: [
    'SQL joins',
    'Ping/pong heartbeat messages',
    'HTTP redirects',
    'CSS animations'
  ],
  correctOptionIndex: 1,
},

{
  id: 'be-49',
  categoryId: 'backend',
  text: 'Your Spring Boot application has database, business logic, and HTTP handling inside the same controller classes. What would improve maintainability?',
  options: [
    'Separate controllers, services, and repositories',
    'Move business logic from controllers into HTML pages',
    'Remove dependency injection from the Spring Boot application',
    'Put every backend responsibility inside one controller class'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-50',
  categoryId: 'backend',
  text: 'A Spring Boot controller directly creates database repository objects using new. What Spring feature could improve this design?',
  options: [
    'Browser caching',
    'GraphQL fragments',
    'CSS modules',
    'Dependency injection'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-51',
  categoryId: 'backend',
  text: 'Multiple Spring Boot services need the same configuration values, such as database URLs, without hardcoding them into Java classes. What should you use?',
  options: [
    'URL fragments',
    'Externalized configuration',
    'CSS variables',
    'HTML attributes'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-52',
  categoryId: 'backend',
  text: 'A Spring Boot endpoint throws different exceptions, and each controller handles them differently. What would create more consistent API error responses?',
  options: [
    'Disable exception handling throughout the backend',
    'Add duplicate controllers for each exception type',
    'Use global exception handling such as @ControllerAdvice',
    'Move exception handling into frontend validation logic'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-53',
  categoryId: 'backend',
  text: 'Your Spring Boot application repeatedly creates database connections for every request, causing performance issues. What should you investigate?',
  options: [
    'Database connection pooling',
    'HTML routing',
    'JWT payload size',
    'CSS caching'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-54',
  categoryId: 'backend',
  text: 'Your Spring Boot application receives thousands of requests, and several requests execute the same expensive database query. What could improve performance?',
  options: [
    'Disable transactions for all database operations',
    'Increase the amount of JSON indentation in responses',
    'Remove database indexes from frequently queried tables',
    'Add appropriate caching for repeatedly requested data'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-55',
  categoryId: 'backend',
  text: 'A Spring Boot service updates multiple database records, and failure halfway through would leave inconsistent data. What should be considered?',
  options: [
    'A browser cookie',
    'A WebSocket connection',
    'A database transaction',
    'A CSS transaction'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-56',
  categoryId: 'backend',
  text: 'Your Spring Boot API exposes an endpoint that should only be accessible to administrators. What should enforce this?',
  options: [
    'Authorization rules and backend security configuration',
    'Frontend buttons that hide the endpoint from normal users',
    'URL naming conventions that indicate administrator-only access',
    'CSS classes that prevent normal users from opening the endpoint'
  ],
  correctOptionIndex: 0,
},

{
  id: 'be-57',
  categoryId: 'backend',
  text: 'Your application works correctly with 100 users but becomes slow with 100,000 users. What should you investigate first?',
  options: [
    'Add more frontend animations to improve perceived performance',
    'Remove logging completely before identifying the actual bottleneck',
    'Investigate database, CPU, memory, network, and architecture bottlenecks',
    'Change the colors of application buttons to reduce processing time'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-58',
  categoryId: 'backend',
  text: 'A database query becomes increasingly slow as the table grows from thousands to millions of records. What should you investigate?',
  options: [
    'JWT formatting used by authenticated application requests',
    'Query execution plans and appropriate database indexes',
    'HTTP method names used by the API endpoints',
    'CSS specificity used by the frontend application'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-59',
  categoryId: 'backend',
  text: 'Two users attempt to purchase the last available product at almost exactly the same time. What backend problem must be handled carefully?',
  options: [
    'Race condition and transactional consistency',
    'Browser rendering during the purchase request',
    'CSS inheritance between product components',
    'HTML validation performed by the product page'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-60',
  categoryId: 'backend',
  text: 'Your API performs multiple database operations that must either all succeed or all fail together. What should you use?',
  options: [
    'HTTP caching',
    'Redis TTL only',
    'Separate browser tabs',
    'A database transaction'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-61',
  categoryId: 'backend',
  text: 'Your backend receives the same request multiple times because the client retries after a network timeout. For operations such as payments, what concept can prevent duplicate processing?',
  options: [
    'WebSocket heartbeat',
    'Idempotency',
    'GraphQL fragments',
    'CSS inheritance'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-62',
  categoryId: 'backend',
  text: 'Your application sends an email whenever an order is placed, but slow email delivery makes the order API slow. What would improve the architecture?',
  options: [
    'Store the email-processing logic inside CSS',
    'Make the user wait for email delivery before completing the order',
    'Process email sending asynchronously through a background queue',
    'Remove order validation so email processing can finish faster'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-63',
  categoryId: 'backend',
  text: 'Your backend has multiple services that need to communicate asynchronously without waiting for each other to finish. What architecture is suitable?',
  options: [
    'Message queues or event-driven communication between services',
    'Only synchronous database calls between every backend service',
    'HTML redirects between each backend application service',
    'CSS events connecting independent backend service processes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-64',
  categoryId: 'backend',
  text: 'Your API is deployed across multiple servers, but users are randomly logged out when requests move between servers. What is a likely problem?',
  options: [
    'JSON cannot be used consistently across multiple backend servers',
    'The frontend CSS is not loaded on every server response',
    'REST APIs cannot support authentication across multiple servers',
    'Session state is stored locally on individual application servers'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-65',
  categoryId: 'backend',
  text: 'Your API is receiving huge amounts of traffic from automated clients. Before scaling the entire infrastructure, what should you consider?',
  options: [
    'Increase image resolution throughout the frontend application',
    'Remove API authentication so automated requests are processed faster',
    'Use rate limiting, caching, validation, and traffic analysis',
    'Add more frontend components to distribute incoming API traffic'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-66',
  categoryId: 'backend',
  text: 'A backend service depends on another service that occasionally becomes unavailable. Requests start hanging and eventually consume all available connections. Which resilience pattern can help?',
  options: [
    'Use timeouts and a circuit breaker for the failing dependency',
    'Use infinite retries until the dependent service becomes available',
    'Add more database tables to compensate for the unavailable service',
    'Use a CSS fallback when backend service requests become unavailable'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-67',
  categoryId: 'backend',
  text: 'Your API is used by several frontend applications, and changing a response field unexpectedly breaks older clients. What should the backend team consider?',
  options: [
    'Remove validation so clients can handle arbitrary response structures',
    'Use API versioning and backward-compatible response changes',
    'Randomly change response formats so clients adapt automatically',
    'Disable HTTP status codes to avoid compatibility problems'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-68',
  categoryId: 'backend',
  text: 'Your backend logs contain passwords, authentication tokens, and sensitive user information. What should you do?',
  options: [
    'Make application logs publicly accessible for easier debugging',
    'Store additional sensitive information to improve debugging detail',
    'Disable authentication so sensitive credentials are no longer logged',
    'Remove or redact sensitive information before writing logs'
  ],
  correctOptionIndex: 3,
},
{
  id: 'be-69',
  categoryId: 'backend',
  text: 'Your API becomes difficult to debug because you cannot determine which request caused an error across several backend services. What could improve observability?',
  options: [
    'Add correlation IDs with centralized structured logging',
    'Add more frontend routes to identify backend requests',
    'Increase JWT payload sizes to contain more debugging information',
    'Add more CSS comments around frontend API calls'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-70',
  categoryId: 'backend',
  text: 'Your application has REST APIs, GraphQL queries, WebSocket connections, Redis caching, and multiple backend services. Users report intermittent slow responses. What would be the most systematic first step?',
  options: [
    'Rewrite the entire backend before measuring the existing system',
    'Add Redis to every backend function regardless of its workload',
    'Increase the frontend bundle size to improve backend responsiveness',
    'Use logs, metrics, tracing, and profiling to identify the bottleneck'
  ],
  correctOptionIndex: 3,
},
  ],
  database: [
    {
      id: 'db-1',
      categoryId: 'database',
      text: 'Which property of a database transaction guarantees that either all operations complete successfully, or none do?',
      options: ['Atomicity', 'Consistency', 'Isolation', 'Durability'],
      correctOptionIndex: 0,
    },
    {
  id: 'db-2',
  categoryId: 'database',
  text: 'A MySQL query becomes much slower after a users table grows from 50,000 to 10 million rows. The query frequently searches by email. What should you investigate first?',
  options: [
    'Changing all columns to TEXT',
    'Adding an appropriate index on the email column',
    'Removing the primary key',
    'Storing emails in localStorage'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-3',
  categoryId: 'database',
  text: 'Your application stores customer information in one large table, and changing an address requires updating the same address in hundreds of rows. What database design problem is likely occurring?',
  options: [
    'Replication lag',
    'Deadlock',
    'Data redundancy caused by poor normalization',
    'Vector similarity failure'
  ],
  correctOptionIndex: 2,
},
{
  id: 'db-4',
  categoryId: 'database',
  text: 'A payment operation inserts an order, creates order items, and decreases product inventory. If the inventory update fails, what should happen to the other database changes?',
  options: [
    'They should remain partially completed',
    'They should be rolled back as part of a transaction',
    'They should be copied to localStorage',
    'They should be moved into a graph database'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-5',
  categoryId: 'database',
  text: 'A MySQL application frequently joins orders with customers using customer_id, but the join becomes slow as the tables grow. What could improve the query?',
  options: [
    'Add an appropriate index on the columns used for the join',
    'Convert every column to VARCHAR',
    'Remove the customer_id relationship',
    'Store the tables in browser localStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-6',
  categoryId: 'database',
  text: 'Your PostgreSQL application needs to store flexible profile metadata where different users may have different fields. Which PostgreSQL feature is particularly useful?',
  options: [
    'Only fixed-length CHAR columns',
    'JSONB columns',
    'HTML attributes',
    'CSS variables'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-7',
  categoryId: 'database',
  text: 'A PostgreSQL query searches a large JSONB column repeatedly for a particular key and value. What can help improve this workload?',
  options: [
    'Remove all constraints',
    'Store the JSON only in cookies',
    'Use an appropriate JSONB index such as GIN',
    'Convert the database to localStorage'
  ],
  correctOptionIndex: 2,
},
{
  id: 'db-8',
  categoryId: 'database',
  text: 'Your application needs to guarantee that usernames are unique even when two users register at almost exactly the same time. Where should this rule primarily be enforced?',
  options: [
    'Only in the frontend',
    'Only in localStorage',
    'Only through a JavaScript if statement',
    'With a database-level unique constraint'
  ],
  correctOptionIndex: 3,
},
{
  id: 'db-9',
  categoryId: 'database',
  text: 'A developer checks whether an email exists before inserting a new user, but duplicate emails occasionally still appear during concurrent registrations. Why can this happen?',
  options: [
    'The browser cannot render SQL',
    'The check and insert are separate operations without database-level concurrency protection',
    'Indexes always create duplicates',
    'MongoDB automatically duplicates every record'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-10',
  categoryId: 'database',
  text: 'Your MySQL application must execute several related updates where partial completion would corrupt financial data. Which approach is most appropriate?',
  options: [
    'Use a database transaction',
    'Use localStorage as the source of truth',
    'Execute every query without error handling',
    'Replace SQL with CSS'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-11',
  categoryId: 'database',
  text: 'A database administrator notices that one query is scanning millions of rows even though an index exists. What should be investigated?',
  options: [
    'The React component tree',
    'The CSS cascade',
    'The query execution plan and whether the index is actually useful',
    'The browser viewport size'
  ],
  correctOptionIndex: 2,
},
{
  id: 'db-12',
  categoryId: 'database',
  text: 'A MySQL table contains millions of historical orders, but users usually search only recent orders. Which optimization could be considered for a very large workload?',
  options: [
    'Remove all timestamps',
    'Consider partitioning based on an appropriate key such as date',
    'Move all orders into browser cookies',
    'Duplicate every order into every table'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-13',
  categoryId: 'database',
  text: 'Your PostgreSQL application frequently needs to return the newest 20 orders sorted by created_at. Which database change could help this query?',
  options: [
    'Add an appropriate index involving created_at',
    'Remove created_at',
    'Convert created_at to HTML',
    'Store the newest orders only in sessionStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-14',
  categoryId: 'database',
  text: 'A team stores every customer order as a separate JSON document in MongoDB, including customer information that rarely changes. What problem could occur when the customer changes their name?',
  options: [
    'Every affected embedded copy may need to be updated',
    'MongoDB automatically converts JSON into SQL',
    'The database cannot store strings',
    'Indexes stop working permanently'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-15',
  categoryId: 'database',
  text: 'Your MongoDB application frequently queries documents using a customerId field, but performance decreases as the collection grows. What should you consider?',
  options: [
    'Removing customerId',
    'Adding an appropriate index on customerId',
    'Moving customerId into CSS',
    'Converting every document into a SQL table'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-16',
  categoryId: 'database',
  text: 'A MongoDB collection contains documents with different structures because older and newer application versions store different fields. What advantage of MongoDB helps in this situation?',
  options: [
    'Flexible document schemas can accommodate varying fields',
    'MongoDB requires every document to have identical columns',
    'MongoDB cannot store nested objects',
    'MongoDB automatically normalizes every document'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-17',
  categoryId: 'database',
  text: 'A MongoDB document embeds thousands of comments inside a single post, and the document keeps growing. What should the developer reconsider?',
  options: [
    'Whether embedding is appropriate or whether comments should be stored separately',
    'Whether CSS Grid should be used',
    'Whether MongoDB should remove all indexes',
    'Whether comments should be saved in cookies'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-18',
  categoryId: 'database',
  text: 'Your application needs atomic updates across multiple MongoDB documents. Which MongoDB capability can be considered?',
  options: [
    'Browser localStorage',
    'MongoDB multi-document transactions',
    'CSS transactions',
    'HTTP caching'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-19',
  categoryId: 'database',
  text: 'A MongoDB query frequently filters documents by status and sorts them by createdAt. What could improve this query when the collection becomes large?',
  options: [
    'Use an appropriate compound index',
    'Remove the status field',
    'Store createdAt only in localStorage',
    'Convert every document to XML'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-20',
  categoryId: 'database',
  text: 'Your MongoDB application needs to calculate totals by category from millions of documents. Which feature is designed for this kind of workload?',
  options: [
    'CSS selectors',
    'MongoDB aggregation pipeline',
    'Browser cookies',
    'HTML forms'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-21',
  categoryId: 'database',
  text: 'A shopping cart is stored in localStorage, but the user opens the same account on another device and cannot see the cart. Why does this happen?',
  options: [
    'localStorage is generally local to the browser and origin rather than a server-side shared database',
    'localStorage automatically deletes data every hour',
    'SQL prevents synchronization',
    'MongoDB blocks localStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-22',
  categoryId: 'database',
  text: 'A developer stores a user authentication token containing sensitive information in localStorage. What is the main security concern?',
  options: [
    'localStorage makes SQL queries slower',
    'JavaScript running in the page can potentially access the stored token, increasing XSS-related risk',
    'localStorage automatically encrypts the token',
    'localStorage can only store images'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-23',
  categoryId: 'database',
  text: 'Your application stores a large amount of structured user data in localStorage and starts hitting browser storage limits. What should you consider?',
  options: [
    'Move persistent application data to an appropriate server-side database or storage system',
    'Increase localStorage size using CSS',
    'Store unlimited data in cookies',
    'Duplicate the same data hundreds of times'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-24',
  categoryId: 'database',
  text: 'A user clears browser storage and all locally saved application preferences disappear. What does this demonstrate?',
  options: [
    'Browser storage should always replace server databases',
    'localStorage is not a reliable replacement for server-side persistent data',
    'PostgreSQL automatically deletes preferences',
    'MongoDB requires browser storage'
  ],
  correctOptionIndex: 1,
},
{
  id: 'db-25',
  categoryId: 'database',
  text: 'A web application stores a cached API response in localStorage and later displays outdated information after the server data changes. What problem is occurring?',
  options: [
    'Stale client-side data',
    'Database normalization',
    'SQL injection',
    'Deadlock'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-26',
  categoryId: 'database',
  text: 'Your application needs to model relationships such as "Alice works with Bob", "Bob manages Carol", and "Carol belongs to Team X". Which database type is particularly suited to relationship-heavy queries?',
  options: [
    'Graph database',
    'LocalStorage',
    'Key-value browser storage only',
    'Plain text files'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-27',
  categoryId: 'database',
  text: 'A social network needs to find friends-of-friends across many relationship levels. Why might a graph database be useful?',
  options: [
    'It is optimized for representing and traversing relationships between entities',
    'It stores only CSS rules',
    'It cannot represent relationships',
    'It requires every relationship to be stored as a browser cookie'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-28',
  categoryId: 'database',
  text: 'A recommendation system needs to identify connections between users, products, interests, and communities. What graph database advantage can help?',
  options: [
    'Efficient traversal of connected entities and relationships',
    'Automatic frontend rendering',
    'Unlimited browser storage',
    'Replacement of authentication'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-29',
  categoryId: 'database',
  text: 'A graph database query becomes slow because the application is traversing an extremely large and poorly constrained relationship network. What should be investigated?',
  options: [
    'Traversal strategy, indexes, relationship modeling, and query constraints',
    'CSS specificity',
    'HTML semantics',
    'Browser font size'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-30',
  categoryId: 'database',
  text: 'Your application stores millions of product descriptions and wants to find products that are semantically similar rather than matching exact keywords. Which database technology is particularly useful?',
  options: [
    'Vector database',
    'HTML database',
    'CSS database',
    'Cookie storage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-31',
  categoryId: 'database',
  text: 'A vector search system converts documents into numerical embeddings. What is the purpose of those embeddings?',
  options: [
    'Represent content in a numerical space where semantic similarity can be measured',
    'Encrypt database passwords',
    'Replace all database indexes',
    'Store HTML styles'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-32',
  categoryId: 'database',
  text: 'A chatbot needs to retrieve the most semantically relevant documents before generating an answer. What database capability can help?',
  options: [
    'Vector similarity search',
    'Only exact string comparison',
    'CSS selectors',
    'HTTP redirects'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-33',
  categoryId: 'database',
  text: 'A vector search returns many documents that are mathematically close but contain information from the wrong product category. What should the system consider?',
  options: [
    'Use metadata filtering or hybrid search alongside vector similarity',
    'Delete all embeddings',
    'Remove all product metadata',
    'Use localStorage as the vector index'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-34',
  categoryId: 'database',
  text: 'A vector database contains embeddings generated using an old embedding model, while new documents use a different model. What problem can this cause?',
  options: [
    'Comparisons may become inconsistent because embeddings from incompatible models may not share the same representation space',
    'SQL joins automatically become faster',
    'MongoDB documents become relational',
    'localStorage becomes encrypted'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-35',
  categoryId: 'database',
  text: 'A company wants users to search products using both exact filters such as price and semantic similarity such as "comfortable shoes". What approach is useful?',
  options: [
    'Combine metadata filtering with vector similarity search',
    'Use only localStorage',
    'Remove all product attributes',
    'Use only exact string equality'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-36',
  categoryId: 'database',
  text: 'A SQL query selects every column from a large table even though the application needs only three fields. What improvement could reduce unnecessary work?',
  options: [
    'Select only the required columns',
    'Always use SELECT *',
    'Duplicate the table',
    'Convert every column to JSON'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-37',
  categoryId: 'database',
  text: 'A developer builds a SQL query by directly concatenating user input into the query string. What security vulnerability should be considered?',
  options: [
    'SQL injection',
    'Memory caching',
    'Graph traversal',
    'Vector drift'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-38',
  categoryId: 'database',
  text: 'What is a safer approach when application input needs to be included in a SQL query?',
  options: [
    'Parameterized queries or properly configured prepared statements',
    'String concatenation with more quotes',
    'Putting SQL inside CSS',
    'Saving SQL commands in localStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-39',
  categoryId: 'database',
  text: 'A database breach exposes stored user passwords. The passwords were stored using a strong password hashing algorithm rather than plain text. Why is this safer?',
  options: [
    'The original passwords are not directly stored and are harder to recover from the hashes',
    'Hashes can always be reversed instantly',
    'Hashing makes passwords public',
    'Hashing removes the need for authentication'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-40',
  categoryId: 'database',
  text: 'A database contains confidential customer information, but every application user can query every table. What design problem should be addressed?',
  options: [
    'Excessive database permissions and lack of least-privilege access',
    'Too many CSS classes',
    'Missing browser history',
    'Incorrect HTML nesting'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-41',
  categoryId: 'database',
  text: 'A PostgreSQL application must ensure that an employee salary cannot become negative. Where is the strongest place to enforce this invariant?',
  options: [
    'Only with a frontend warning',
    'Only in localStorage',
    'With an appropriate database constraint such as CHECK',
    'Only inside a CSS class'
  ],
  correctOptionIndex: 2,
},
{
  id: 'db-42',
  categoryId: 'database',
  text: 'Your application deletes a customer record that is referenced by many orders. What database feature can help enforce the intended relationship behavior?',
  options: [
    'Foreign keys and appropriate referential actions',
    'CSS inheritance',
    'localStorage events',
    'Vector embeddings'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-43',
  categoryId: 'database',
  text: 'An order references a customer_id that does not exist in the customers table. Which database mechanism can prevent this invalid relationship?',
  options: [
    'Foreign key constraint',
    'Browser cache',
    'CSS selector',
    'Vector index'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-44',
  categoryId: 'database',
  text: 'Two transactions each hold a lock that the other transaction needs, and both remain waiting. What database problem is occurring?',
  options: [
    'Deadlock',
    'Normalization',
    'Replication',
    'Sharding'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-45',
  categoryId: 'database',
  text: 'A production database experiences frequent deadlocks during high traffic. What is a sensible first step?',
  options: [
    'Investigate transaction order, locking behavior, indexes, and transaction duration',
    'Disable all transactions',
    'Move all data to localStorage',
    'Remove every database constraint'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-46',
  categoryId: 'database',
  text: 'A reporting query reads data while another transaction is changing related records, producing inconsistent results. Which database concept should the team investigate?',
  options: [
    'Transaction isolation levels',
    'CSS specificity',
    'Browser routing',
    'Vector dimensions'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-47',
  categoryId: 'database',
  text: 'A read-heavy application has one primary database receiving both writes and thousands of read queries. What architecture could reduce read pressure on the primary?',
  options: [
    'Read replicas',
    'Browser cookies',
    'Removing indexes',
    'Storing every query in localStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-48',
  categoryId: 'database',
  text: 'Your application reads from a PostgreSQL replica immediately after writing to the primary and sometimes sees old data. What issue is this an example of?',
  options: [
    'Replication lag',
    'SQL injection',
    'Normalization',
    'Schema migration'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-49',
  categoryId: 'database',
  text: 'A database contains 500 million records and one server can no longer handle the workload. The data can be distributed based on customer region. What scaling strategy could be considered?',
  options: [
    'Sharding',
    'Removing primary keys',
    'localStorage',
    'CSS Grid'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-50',
  categoryId: 'database',
  text: 'A team adds indexes to nearly every column hoping to make all queries faster, but writes become significantly slower. Why can this happen?',
  options: [
    'Indexes require additional storage and maintenance during inserts, updates, and deletes',
    'Indexes always delete rows',
    'Indexes prevent all SELECT queries',
    'Indexes only work in MongoDB'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-51',
  categoryId: 'database',
  text: 'A frequently updated MySQL table has several large indexes, and write performance is poor. What should the team consider?',
  options: [
    'Review whether every index is necessary and remove unused or redundant indexes',
    'Add ten more indexes',
    'Move all indexes to localStorage',
    'Disable all primary keys'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-52',
  categoryId: 'database',
  text: 'A developer changes a production database schema manually without recording the change, and another environment later becomes inconsistent. What practice would help prevent this?',
  options: [
    'Version-controlled database migrations',
    'Manual edits without documentation',
    'Storing schemas in browser cookies',
    'Deleting the development database'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-53',
  categoryId: 'database',
  text: 'A new database migration changes a column used by an older version of the application, causing deployment failures. What deployment strategy can reduce this risk?',
  options: [
    'Use backward-compatible or expand-and-contract migrations',
    'Delete the old column before deploying the new code',
    'Change the database without testing',
    'Disable database constraints permanently'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-54',
  categoryId: 'database',
  text: 'Your production database is corrupted after an infrastructure failure. Backups exist, but the latest backup is three days old. What problem does this reveal?',
  options: [
    'The backup frequency and recovery-point objective may be insufficient',
    'The database has too many primary keys',
    'MongoDB cannot use backups',
    'localStorage should have been used instead'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-55',
  categoryId: 'database',
  text: 'A company creates backups but has never tested restoring them. Why is this risky?',
  options: [
    'A backup may be unusable or incomplete when recovery is actually needed',
    'Testing backups deletes all production data',
    'Backups only work with MongoDB',
    'Database backups cannot contain indexes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-56',
  categoryId: 'database',
  text: 'A database stores millions of old logs that are almost never queried, but the primary tables are becoming difficult to manage. What strategy could help?',
  options: [
    'Archive or partition historical data according to the application requirements',
    'Delete all logs immediately',
    'Move logs into CSS',
    'Duplicate every log in the primary table'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-57',
  categoryId: 'database',
  text: 'An application repeatedly fetches the same expensive database result for thousands of users. What can reduce database load when the data can tolerate some staleness?',
  options: [
    'Caching the result with an appropriate expiration or invalidation strategy',
    'Removing the database index',
    'Running the query more times',
    'Saving all results permanently in the URL'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-58',
  categoryId: 'database',
  text: 'A cache contains an old product price after the database has been updated. What architectural problem does this represent?',
  options: [
    'Cache invalidation or stale cache data',
    'Database normalization',
    'Foreign key violation',
    'Graph traversal'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-59',
  categoryId: 'database',
  text: 'An application needs to store a large number of loosely structured event records where fields may evolve over time. Which option may be more convenient than a highly rigid relational schema?',
  options: [
    'A document-oriented NoSQL database such as MongoDB',
    'CSS variables',
    'localStorage only',
    'A database containing one column for every possible future field'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-60',
  categoryId: 'database',
  text: 'A financial application requires strict relationships, constraints, transactions, and consistent reporting across many related tables. Which database model is generally a strong fit?',
  options: [
    'Relational SQL database',
    'localStorage',
    'Only a graph database',
    'Only a vector database'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-61',
  categoryId: 'database',
  text: 'A MongoDB application needs to update a large number of documents that match a specific condition. What is generally preferable to fetching every document into application memory first?',
  options: [
    'Use an appropriate database-side bulk update operation',
    'Download every document into the browser',
    'Update documents manually one at a time through the UI',
    'Copy all documents into localStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-62',
  categoryId: 'database',
  text: 'A PostgreSQL application frequently searches for users by a case-insensitive email address. What should the team consider when designing the query and index?',
  options: [
    'Use an appropriate case-insensitive strategy and matching index expression or data representation',
    'Remove all email indexes',
    'Store emails as images',
    'Use localStorage as the primary lookup database'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-63',
  categoryId: 'database',
  text: 'A SQL query joins five large tables and becomes extremely slow after new features are added. What is the most useful first debugging approach?',
  options: [
    'Inspect the query execution plan and identify expensive scans, joins, and missing indexes',
    'Rewrite the frontend in React',
    'Move the query into localStorage',
    'Remove all WHERE clauses'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-64',
  categoryId: 'database',
  text: 'An application sends thousands of individual database queries to retrieve related records, causing high latency. What problem might this indicate?',
  options: [
    'An N+1 query pattern',
    'CSS inheritance',
    'Vector dimension mismatch',
    'Browser cache poisoning'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-65',
  categoryId: 'database',
  text: 'A backend receives 1,000 product IDs and performs one database query for each ID. What could improve this design?',
  options: [
    'Fetch the required records using a batched query where appropriate',
    'Make 10,000 queries instead',
    'Store product IDs in CSS',
    'Disable the database index'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-66',
  categoryId: 'database',
  text: 'A developer decides to store a user’s entire account record in localStorage because it is convenient. What is the biggest architectural concern?',
  options: [
    'Sensitive and authoritative user data should generally remain controlled by the server-side system of record',
    'localStorage can only store numbers',
    'localStorage automatically creates SQL indexes',
    'Browser storage is always synchronized across devices'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-67',
  categoryId: 'database',
  text: 'A recommendation engine needs both relationships between users and semantic similarity between product descriptions. Which architecture could combine specialized database technologies?',
  options: [
    'Use a graph database for relationships and a vector database for semantic similarity',
    'Use localStorage for all relationships',
    'Use CSS for embeddings',
    'Use only a relational table with no indexes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-68',
  categoryId: 'database',
  text: 'A company experiences a database security breach. What should the team do first from a database security perspective?',
  options: [
    'Contain the incident, revoke compromised credentials, investigate access, and restore from trusted systems when necessary',
    'Ignore the breach if the database is still running',
    'Publish the database credentials',
    'Disable all backups'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-69',
  categoryId: 'database',
  text: 'A production database contains personally identifiable information, but developers copy the full production database into their local machines for testing. What is a safer approach?',
  options: [
    'Use sanitized, anonymized, or synthetic test data with appropriate access controls',
    'Give every developer production credentials',
    'Copy the database more frequently',
    'Store the production database in localStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'db-70',
  categoryId: 'database',
  text: 'Your application uses MySQL for transactions, MongoDB for flexible documents, PostgreSQL for relational workloads, localStorage for client preferences, a graph database for relationships, and a vector database for semantic search. Users report that the application is becoming slow. What should you do first?',
  options: [
    'Measure the system using database metrics, query plans, logs, tracing, and profiling to identify the actual bottleneck',
    'Replace every database immediately',
    'Add indexes to every column in every database',
    'Move all databases into localStorage'
  ],
  correctOptionIndex: 0,
},
  ],
  system_design: [
    {
      id: 'sd-1',
      categoryId: 'system_design',
      text: 'In a microservices architecture, what pattern is commonly used to prevent cascading failures?',
      options: ['Singleton', 'Circuit Breaker', 'Adapter', 'Observer'],
      correctOptionIndex: 1,
    },
    {
    id: 'sd-2',
    categoryId: 'system_design',
    text: 'Your application runs on three servers, but one server failure makes the entire service unavailable. What architectural change would remove this single point of failure?',
    options: [
      'Store all application state on one dedicated server',
      'Run multiple application instances behind a load balancer',
      'Increase the memory available to the existing server',
      'Move all requests through a single application instance'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-3',
    categoryId: 'system_design',
    text: 'A traffic spike causes requests to overwhelm your application servers. What component can distribute incoming requests across healthy instances?',
    options: [
      'Message queue',
      'Database replica',
      'Load balancer',
      'Object storage'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-4',
    categoryId: 'system_design',
    text: 'Your application has millions of read requests but relatively few writes. Which strategy could improve database scalability?',
    options: [
      'Send every read operation to the primary database',
      'Remove indexes to reduce database maintenance',
      'Store every database record inside application memory',
      'Use read replicas to distribute read-heavy traffic'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-5',
    categoryId: 'system_design',
    text: 'A popular product page receives thousands of identical requests every second. What would reduce repeated database work?',
    options: [
      'Cache frequently requested product data',
      'Increase the number of database writes',
      'Disable database connection pooling',
      'Force every request to query the primary database'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-6',
    categoryId: 'system_design',
    text: 'Your cache becomes unavailable and the application immediately stops serving requests even though the database is healthy. What design would improve resilience?',
    options: [
      'Store the only copy of important data in the cache',
      'Treat the cache as optional and fall back to the database',
      'Make every request wait until the cache becomes available',
      'Remove the database and rely entirely on cached responses'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-7',
    categoryId: 'system_design',
    text: 'An external payment service sometimes becomes unavailable, causing your requests to wait indefinitely. Which resilience technique should you introduce?',
    options: [
      'Increase request timeout values significantly',
      'Retry every failed request without any limit',
      'Use timeouts and a circuit breaker around the dependency',
      'Create additional database tables for failed requests'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-8',
    categoryId: 'system_design',
    text: 'A service occasionally fails because of temporary network problems. What retry strategy is safer than immediately retrying every failure at once?',
    options: [
      'Retry continuously without waiting between attempts',
      'Retry all requests simultaneously after every failure',
      'Disable all retries even for temporary failures',
      'Use bounded retries with exponential backoff and jitter'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-9',
    categoryId: 'system_design',
    text: 'Your order API sends emails, generates reports, and updates analytics before returning a response. How could you reduce user-facing latency?',
    options: [
      'Move non-critical work into asynchronous background jobs',
      'Make every operation execute sequentially on the request thread',
      'Increase the response payload to include processing information',
      'Force the client to wait until every background task completes'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-10',
    categoryId: 'system_design',
    text: 'Several services need to react when an order is created without directly depending on each other. Which architecture fits this requirement?',
    options: [
      'Synchronous calls between every participating service',
      'Event-driven communication through a message broker',
      'A single database table containing every service operation',
      'Direct browser communication between backend services'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-11',
    categoryId: 'system_design',
    text: 'Your image-processing service receives bursts of thousands of jobs and cannot process them immediately. What component can smooth the workload?',
    options: [
      'Load balancer',
      'Read replica',
      'Message queue',
      'DNS resolver'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-12',
    categoryId: 'system_design',
    text: 'Multiple consumers process messages from a queue, but some messages are delivered more than once. What should consumers support?',
    options: [
      'Assume every message can only arrive once',
      'Delete all failed messages immediately',
      'Disable acknowledgements for faster processing',
      'Make message processing idempotent'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-13',
    categoryId: 'system_design',
    text: 'Your application stores user sessions locally on each server, causing random logouts when requests reach different instances. What should change?',
    options: [
      'Use shared session storage or stateless authentication',
      'Increase the number of cookies stored by each browser',
      'Route every user permanently to one random server',
      'Store sessions only inside each server process'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-14',
    categoryId: 'system_design',
    text: 'A service needs to handle unpredictable traffic while avoiding large numbers of permanently running servers. Which approach is suitable?',
    options: [
      'Use one powerful server regardless of traffic',
      'Use automatic horizontal scaling based on demand',
      'Increase database storage whenever traffic increases',
      'Disable load balancing during low-traffic periods'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-15',
    categoryId: 'system_design',
    text: 'Your application needs to serve users from several continents with low latency. What infrastructure strategy would help most?',
    options: [
      'Keep every request routed to one central region',
      'Increase the size of responses sent from the server',
      'Deploy services closer to users across multiple regions',
      'Store all static assets only on the primary database'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-16',
    categoryId: 'system_design',
    text: 'Users frequently download the same images and JavaScript files from your application. What can reduce latency and origin-server traffic?',
    options: [
      'Store all assets inside the relational database',
      'Send larger versions of assets to reduce requests',
      'Disable browser caching for frequently requested assets',
      'Use a CDN to cache and serve static content'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-17',
    categoryId: 'system_design',
    text: 'Your database becomes a bottleneck because several services constantly query the same records. What should you investigate first?',
    options: [
      'Query patterns, indexes, caching, and connection usage',
      'Adding more frontend components to reduce backend traffic',
      'Removing database indexes to simplify database maintenance',
      'Moving every database query into the browser'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-18',
    categoryId: 'system_design',
    text: 'A table has grown from thousands to billions of records, making queries increasingly expensive. Which technique can help divide the dataset?',
    options: [
      'Store every record inside one application process',
      'Partition data according to an appropriate access pattern',
      'Remove all indexes from the growing table',
      'Duplicate every record across every application server'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-19',
    categoryId: 'system_design',
    text: 'A single database server cannot handle the write volume of your rapidly growing application. Which approach can distribute writes across database nodes?',
    options: [
      'Database replication used only for backups',
      'HTTP caching applied to database requests',
      'Database sharding using an appropriate partition key',
      'Adding more read replicas without changing write routing'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-20',
    categoryId: 'system_design',
    text: 'Your sharded database performs poorly because many requests need data from multiple shards. What should you reconsider?',
    options: [
      'Increase the number of network hops between shards',
      'Store every record on every shard',
      'Remove all partition keys from the database',
      'Choose a partition key aligned with common access patterns'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-21',
    categoryId: 'system_design',
    text: 'A system needs to remain available even if one availability zone fails. What deployment strategy provides better fault isolation?',
    options: [
      'Distribute application instances across multiple availability zones',
      'Run every application instance inside one availability zone',
      'Keep only one database server in the primary zone',
      'Route all traffic through a single zone for simplicity'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-22',
    categoryId: 'system_design',
    text: 'Your application cannot tolerate losing recently written data if a database server fails. What should you prioritize?',
    options: [
      'Disable database replication to reduce write latency',
      'Use durable replication and an appropriate backup strategy',
      'Store recent writes only inside application memory',
      'Increase API response sizes to preserve more information'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-23',
    categoryId: 'system_design',
    text: 'A service performs expensive calculations repeatedly for the same inputs. What architectural optimization could reduce unnecessary computation?',
    options: [
      'Execute every calculation again for every request',
      'Move calculations into the frontend without measuring the impact',
      'Cache computed results using suitable keys and expiration',
      'Increase database write frequency for every calculation'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-24',
    categoryId: 'system_design',
    text: 'Users complain that search results are slow because the database performs expensive text matching across millions of records. What could improve this?',
    options: [
      'Perform full table scans for every search request',
      'Send the entire dataset to the client before searching',
      'Increase the size of every search response',
      'Use a dedicated search engine with appropriate indexing'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-25',
    categoryId: 'system_design',
    text: 'Your application needs to find similar documents using semantic meaning rather than exact keywords. Which technology is appropriate?',
    options: [
      'A vector database with embedding-based similarity search',
      'A traditional load balancer with round-robin routing',
      'A message queue containing the complete document collection',
      'A CDN configured to store only static JavaScript files'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-26',
    categoryId: 'system_design',
    text: 'Your graph-based application frequently traverses relationships between users, accounts, and recommendations. Which database model may fit naturally?',
    options: [
      'A document database optimized only for isolated records',
      'A graph database designed around nodes and relationships',
      'A cache designed primarily for temporary key-value storage',
      'An object store designed primarily for large binary files'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-27',
    categoryId: 'system_design',
    text: 'A real-time collaboration system needs updates delivered immediately to connected users. Which communication approach is most suitable?',
    options: [
      'Periodic database polling from every browser',
      'Repeated full-page refreshes after every update',
      'Persistent WebSocket connections with server-side events',
      'Static files served through a traditional CDN'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-28',
    categoryId: 'system_design',
    text: 'Thousands of users connect to several WebSocket servers, and events received by one server must reach clients connected elsewhere. What can help?',
    options: [
      'Store WebSocket messages only inside each server process',
      'Require every client to connect to every server',
      'Send all events through browser local storage',
      'Use shared messaging such as Redis Pub/Sub or a broker'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-29',
    categoryId: 'system_design',
    text: 'Your API receives excessive requests from a small group of clients, affecting other users. What protection should you introduce?',
    options: [
      'Rate limiting based on suitable client or account identifiers',
      'Increase response sizes so fewer requests are required',
      'Remove authentication to simplify request processing',
      'Disable logging so the server spends less time recording requests'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-30',
    categoryId: 'system_design',
    text: 'A public API is being targeted by abusive automated traffic. What combination provides a stronger defense?',
    options: [
      'Disable all caching and increase application server capacity',
      'Use rate limits, authentication, validation, and traffic controls',
      'Allow unlimited requests and rely only on database scaling',
      'Move all API logic into the client to reduce server responsibilities'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-31',
    categoryId: 'system_design',
    text: 'A service returns large responses even when clients need only a few fields. What design improvement can reduce bandwidth and processing?',
    options: [
      'Return every available field to simplify client development',
      'Duplicate the same response across multiple endpoints',
      'Allow clients to request only the fields required for the operation',
      'Increase response compression without changing the response structure'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-32',
    categoryId: 'system_design',
    text: 'Your microservices have become difficult to operate because every service owns shared business logic and databases. What principle could improve boundaries?',
    options: [
      'Make every service directly access every other service database',
      'Centralize all business logic into one large service',
      'Duplicate all data and logic across every service',
      'Define clear service ownership around business capabilities'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-33',
    categoryId: 'system_design',
    text: 'A microservice deployment causes failures because one service is tightly dependent on another service being available. What can reduce this coupling?',
    options: [
      'Use asynchronous messaging where immediate responses are unnecessary',
      'Make every service call every other service synchronously',
      'Share one database connection pool across all services',
      'Increase timeout values for every service dependency'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-34',
    categoryId: 'system_design',
    text: 'Your application has many services and debugging a slow request requires checking logs from several machines. What should improve observability?',
    options: [
      'Store logs only on the local machine running each service',
      'Use centralized logs, metrics, tracing, and correlation identifiers',
      'Disable application logs to reduce infrastructure overhead',
      'Ask users to report which backend server handled their request'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-35',
    categoryId: 'system_design',
    text: 'A production service occasionally becomes slow, but CPU and memory metrics look normal. What should you investigate next?',
    options: [
      'Increase server memory without identifying the actual bottleneck',
      'Restart all services whenever latency increases',
      'Use distributed tracing and request-level latency measurements',
      'Disable monitoring because the infrastructure metrics look healthy'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-36',
    categoryId: 'system_design',
    text: 'A deployment introduces a serious bug, and rolling back the entire system is risky. Which release strategy can limit the impact?',
    options: [
      'Deploy the new version to every server simultaneously',
      'Disable health checks during deployment to speed up releases',
      'Release the new version only after removing the previous version',
      'Use canary or gradual deployments before expanding traffic'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-37',
    categoryId: 'system_design',
    text: 'Your application must support zero-downtime deployments while several server instances are being updated. What approach helps?',
    options: [
      'Use rolling deployments while maintaining enough healthy capacity',
      'Stop every server before installing the new version',
      'Route all traffic to an instance being upgraded',
      'Disable health checks until deployment finishes'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-38',
    categoryId: 'system_design',
    text: 'A service stores uploaded videos and images directly on application servers, making scaling difficult. What architecture is better?',
    options: [
      'Store every uploaded file permanently inside server memory',
      'Use durable object storage and serve files through a CDN',
      'Duplicate every file manually across application instances',
      'Store large binary files directly inside API response payloads'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-39',
    categoryId: 'system_design',
    text: 'Your application allows users to upload large files, but uploads consume too many backend resources. What could reduce server involvement?',
    options: [
      'Send every file through the application server twice',
      'Increase API timeout values for larger uploads',
      'Use direct uploads to object storage with controlled access',
      'Convert every uploaded file into database rows before storing it'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-40',
    categoryId: 'system_design',
    text: 'A distributed application needs one unique sequence of events, but different servers generate conflicting timestamps. What should you consider?',
    options: [
      'Assume machine clocks are always perfectly synchronized',
      'Use local timestamps without accounting for clock differences',
      'Increase the precision of browser-generated timestamps only',
      'Use an appropriate ordering or coordination mechanism for the system'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-41',
    categoryId: 'system_design',
    text: 'A system must remain usable during temporary dependency failures instead of failing every request. Which design principle is most relevant?',
    options: [
      'Design graceful degradation and provide useful fallback behavior',
      'Make every dependency mandatory for every user operation',
      'Retry failed dependencies forever until they become available',
      'Return larger error responses containing internal service details'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'sd-42',
    categoryId: 'system_design',
    text: 'Your service must process a payment request safely even if the client retries after a timeout. What should the API support?',
    options: [
      'Allow every retry to create another payment attempt',
      'Use idempotency keys to prevent duplicate processing',
      'Ignore all retry requests regardless of their contents',
      'Store payment requests only inside the client browser'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'sd-43',
    categoryId: 'system_design',
    text: 'A system has several independent databases, but generating a cross-service report requires joining their data. What should you consider architecturally?',
    options: [
      'Make every service directly query every other service database',
      'Create one shared database and remove service ownership',
      'Build a reporting or analytics data pipeline for required views',
      'Copy every database completely into every application server'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'sd-44',
    categoryId: 'system_design',
    text: 'Your system needs to survive a regional outage with minimal downtime. Which architecture provides stronger disaster recovery?',
    options: [
      'Keep backups only on the same infrastructure as production',
      'Depend on manual database restoration from local disks',
      'Run all production capacity inside one geographic region',
      'Maintain replicated infrastructure and tested recovery procedures'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'sd-45',
    categoryId: 'system_design',
    text: 'Before redesigning a slow distributed application, what is the most reliable way to decide which component needs optimization?',
    options: [
      'Use metrics, logs, traces, profiling, and load testing to locate bottlenecks',
      'Rewrite every service using a different programming language',
      'Add caching to every component without measuring its effectiveness',
      'Increase infrastructure capacity everywhere before investigating the cause'
    ],
    correctOptionIndex: 0,
  },
  ],
  devops: [

  {

    id: 'devops-1',

    categoryId: 'devops',

    text: 'Your application must handle sudden traffic spikes without manually adding servers. Which approach best fits this requirement?',

    options: [

      'Use auto-scaling groups with defined capacity limits',

      'Use one larger server with a fixed capacity limit',

      'Use manual deployments whenever traffic starts increasing',

      'Use local storage with a fixed number of workers'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-2',

    categoryId: 'devops',

    text: 'A cloud availability zone becomes unavailable, but users must still access your service. Which design most directly improves resilience?',

    options: [

      'Run all workloads on one larger instance type',

      'Deploy critical workloads across multiple availability zones',

      'Store application logs only on the failed region',

      'Increase container image size to improve regional recovery'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-3',

    categoryId: 'devops',

    text: 'Your team wants every code change tested before reaching production. Which practice best supports this goal?',

    options: [

      'Require developers to test only after production deployment',

      'Run automated builds and tests on every accepted code change',

      'Run tests manually once at the end of each release month',

      'Skip automated tests when the changed feature is small'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-4',

    categoryId: 'devops',

    text: 'A Docker image works locally but fails in production because dependencies differ. What is the strongest fix?',

    options: [

      'Install dependencies separately on every production server',

      'Copy only the source files into each production container',

      'Package the application and its dependencies inside the image',

      'Use different dependency versions for local and production systems'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-5',

    categoryId: 'devops',

    text: 'Several Kubernetes pods keep restarting because the application exceeds its memory limit. What should you investigate first?',

    options: [

      'Increase replica count without checking resource consumption',

      'Disable Kubernetes health checks to prevent the restarts',

      'Move all pods to the same node to reduce network traffic',

      'Review memory requests, limits, and the application usage pattern'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-6',

    categoryId: 'devops',

    text: 'A production deployment introduces errors, and the previous version was stable. Which DevOps capability provides the fastest safe recovery?',

    options: [

      'A rollback mechanism that restores the previous known-good version',

      'A longer build process that delays every deployment',

      'A larger container image containing unused debugging tools',

      'A manual database export performed after the incident'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-7',

    categoryId: 'devops',

    text: 'Your company stores customer data in a cloud database. Which responsibility generally remains with the customer even when the provider manages the database infrastructure?',

    options: [

      'Protecting customer data through access controls and proper configuration',

      'Replacing physical disks inside the provider data center',

      'Repairing the provider cooling equipment during outages',

      'Maintaining the provider private network hardware'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-8',

    categoryId: 'devops',

    text: 'A CI pipeline takes 40 minutes because every job runs sequentially. What change can reduce feedback time safely?',

    options: [

      'Remove all automated tests from the pipeline',

      'Run independent jobs in parallel where their dependencies allow it',

      'Run every job twice to improve pipeline consistency',

      'Move the entire pipeline onto one slower shared runner'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-9',

    categoryId: 'devops',

    text: 'Your containers need credentials to access a managed database. Which approach is safest?',

    options: [

      'Bake credentials directly into the Docker image',

      'Commit credentials into the application repository for easy access',

      'Place credentials in public environment files used by every service',

      'Store secrets in a managed secret system and inject them securely'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-10',

    categoryId: 'devops',

    text: 'A Kubernetes service receives uneven traffic across healthy pods. Which mechanism is designed to distribute service traffic?',

    options: [

      'A Kubernetes Service that routes traffic across matching endpoints',

      'A Dockerfile instruction that increases container memory',

      'A ConfigMap that stores application source code',

      'A container registry that stores deployment manifests'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-11',

    categoryId: 'devops',

    text: 'Your team needs repeatable infrastructure across development and production. Which practice best reduces configuration drift?',

    options: [

      'Manually configure each environment using separate runbooks',

      'Define infrastructure as code and review changes through version control',

      'Allow engineers to change production resources without recording them',

      'Create infrastructure only through temporary local scripts'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-12',

    categoryId: 'devops',

    text: 'A container image contains an outdated library with a known critical vulnerability. What should happen before deployment?',

    options: [

      'Deploy it immediately and scan the image after customers use it',

      'Remove the image tag while keeping the vulnerable package installed',

      'Scan the image and block deployment when policy thresholds are violated',

      'Increase the container CPU limit so the vulnerability matters less'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-13',

    categoryId: 'devops',

    text: 'A Kubernetes application must keep serving traffic while a new version is introduced gradually. Which strategy fits best?',

    options: [

      'Stop every old pod before starting any new pod',

      'Deploy the new version only to developer laptops first',

      'Replace the database before changing the application containers',

      'Use a rolling or progressive deployment with controlled traffic changes'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-14',

    categoryId: 'devops',

    text: 'Your CI system builds the same dependencies repeatedly, slowing pipelines. What optimization is usually appropriate?',

    options: [

      'Cache dependencies or build layers when they can be reused safely',

      'Disable dependency installation and rely on developer machines',

      'Copy the entire source repository into every cache entry',

      'Run dependency downloads only after production deployment'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-15',

    categoryId: 'devops',

    text: 'A production API becomes slow, but CPU usage is normal. Which observability improvement is most useful for diagnosis?',

    options: [

      'Increase CPU limits without measuring request behavior',

      'Collect metrics, logs, and traces with request-level context',

      'Restart all services every few minutes to clear possible issues',

      'Delete historical logs so current logs are easier to read'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-16',

    categoryId: 'devops',

    text: 'A service should automatically restart when its process crashes, but not when it is merely slow. Which Kubernetes feature is most relevant?',

    options: [

      'A readiness probe that determines whether the pod receives traffic',

      'A ConfigMap that stores the container environment variables',

      'A liveness probe that detects whether the container is functioning',

      'A ServiceAccount that controls the pod API permissions'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-17',

    categoryId: 'devops',

    text: 'Your application starts successfully but needs time before it can accept traffic. Which Kubernetes mechanism prevents premature requests?',

    options: [

      'A liveness probe that always restarts the container during startup',

      'A ConfigMap that stores the pod container image',

      'A PersistentVolume that delays requests until mounted',

      'A readiness probe that marks the pod available only when ready'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-18',

    categoryId: 'devops',

    text: 'Your organization wants deployments to happen automatically after successful tests, but only for approved production releases. What pattern fits?',

    options: [

      'Use CI for validation and controlled CD promotion into production',

      'Deploy every commit directly to production without approval',

      'Require developers to copy build files manually to production',

      'Run production deployments only when monitoring reports an outage'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-19',

    categoryId: 'devops',

    text: 'A Docker container needs data that must survive container replacement. What should you use?',

    options: [

      'The writable container layer because it survives image replacement',

      'A persistent volume or external managed storage for durable data',

      'A temporary process variable because it persists after restarts',

      'The container hostname because it identifies durable application state'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-20',

    categoryId: 'devops',

    text: 'A Kubernetes workload has unpredictable CPU demand throughout the day. Which feature can adjust replicas based on measured utilization?',

    options: [

      'PersistentVolumeClaim using configured storage metrics',

      'ConfigMap using configured application settings',

      'Horizontal Pod Autoscaler using configured resource metrics',

      'ServiceAccount using configured identity permissions'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-21',

    categoryId: 'devops',

    text: 'Your build process produces artifacts that deployment jobs need later. What is a good pipeline design?',

    options: [

      'Rebuild the application separately for every environment',

      'Ask each environment to compile source code during deployment',

      'Store build outputs only on a developer local workstation',

      'Publish versioned artifacts and promote the same artifact between environments'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-22',

    categoryId: 'devops',

    text: 'A production incident requires knowing which deployment changed the service. Which practice helps most?',

    options: [

      'Attach immutable version identifiers and deployment metadata to releases',

      'Reuse the same image tag for every deployment without recording changes',

      'Delete deployment history after each successful release',

      'Use server names as the only identifier for application versions'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-23',

    categoryId: 'devops',

    text: 'A Kubernetes node fails and its pods disappear. What helps workloads recover automatically?',

    options: [

      'Pin every workload permanently to one specific node',

      'Run replicated workloads under a controller that reschedules pods',

      'Store all application state only inside pod writable layers',

      'Disable scheduling so Kubernetes waits for the failed node'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-24',

    categoryId: 'devops',

    text: 'Your team wants to reduce the impact of a compromised container. Which practice is most effective?',

    options: [

      'Give every container root access to simplify operational debugging',

      'Mount the entire host filesystem into each production container',

      'Run with least privilege, restricted capabilities, and minimal images',

      'Use one shared privileged container for all application services'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-25',

    categoryId: 'devops',

    text: 'A CI runner can deploy to production using long-lived cloud credentials. What is a safer design?',

    options: [

      'Store permanent administrator credentials inside pipeline variables',

      'Share one root credential across every CI runner and project',

      'Put cloud credentials directly inside public deployment scripts',

      'Use short-lived, scoped workload identities with minimal permissions'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-26',

    categoryId: 'devops',

    text: 'Your Kubernetes deployment should never temporarily drop below four available replicas. Which configuration expresses that goal?',

    options: [

      'Set a PodDisruptionBudget requiring the minimum available replicas',

      'Set a ConfigMap requiring the minimum available replicas',

      'Set a ServiceAccount requiring the minimum available replicas',

      'Set a PersistentVolume requiring the minimum available replicas'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-27',

    categoryId: 'devops',

    text: 'A service must receive zero traffic until its new version passes health checks. What deployment control is most appropriate?',

    options: [

      'Use container labels without connecting them to traffic routing',

      'Use readiness checks before allowing new pods into service traffic',

      'Use image compression so startup files are transferred faster',

      'Use a ConfigMap to force requests toward every new pod'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-28',

    categoryId: 'devops',

    text: 'Your team wants to detect configuration mistakes before infrastructure changes reach production. What workflow is strongest?',

    options: [

      'Apply every infrastructure change directly and inspect results afterward',

      'Keep production configuration outside version control to avoid accidental edits',

      'Run infrastructure plans and policy checks in CI before applying approved changes',

      'Allow each engineer to use different infrastructure definitions locally'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-29',

    categoryId: 'devops',

    text: 'A company wants the same container image promoted from testing to production. Why is this valuable?',

    options: [

      'It guarantees the application will never experience runtime failures',

      'It removes the need for security scanning after the image is built',

      'It allows production to ignore configuration and secret management entirely',

      'It reduces differences between environments and improves release traceability'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-30',

    categoryId: 'devops',

    text: 'A Kubernetes application must expose HTTP traffic externally while routing requests to the correct service. Which resource is commonly used?',

    options: [

      'An Ingress configured with routing rules and an ingress controller',

      'A ConfigMap configured with routing rules and an ingress controller',

      'A PersistentVolume configured with routing rules and an ingress controller',

      'A ServiceAccount configured with routing rules and an ingress controller'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-31',

    categoryId: 'devops',

    text: 'A deployment is healthy but users report errors only in one region. What observability practice makes this easier to isolate?',

    options: [

      'Aggregate every region into one metric with no identifying dimensions',

      'Break down metrics and traces by region, version, and service',

      'Delete regional logs after successful deployments to reduce storage costs',

      'Monitor only CPU because application errors cannot be region-specific'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-32',

    categoryId: 'devops',

    text: 'A team frequently edits production containers manually to fix issues. What DevOps principle should replace this practice?',

    options: [

      'Keep manual changes because they are faster than automated deployments',

      'Modify running containers and document changes only during audits',

      'Rebuild and redeploy from version-controlled configuration instead of manual mutation',

      'Create a separate undocumented production image for every emergency fix'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-33',

    categoryId: 'devops',

    text: 'A Docker build includes compilers and source tools that are unnecessary at runtime. What improvement reduces the final image footprint?',

    options: [

      'Install additional development packages so builds become easier to reproduce',

      'Keep all build tools because smaller images are less secure',

      'Copy the entire build environment into the final runtime image',

      'Use a multi-stage build and copy only required runtime artifacts'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-34',

    categoryId: 'devops',

    text: 'Your application must deploy frequently while limiting the blast radius of each release. Which strategy is useful?',

    options: [

      'Use canary releases that expose the new version to a small traffic segment',

      'Send all users to the new version immediately after the first build',

      'Deploy only during outages so fewer normal users observe changes',

      'Run the new version without monitoring until the full rollout completes'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-35',

    categoryId: 'devops',

    text: 'A CI runner can access production databases even when its job does not need them. What security improvement should you make?',

    options: [

      'Give every pipeline job broader access so future deployments need fewer changes',

      'Apply least-privilege permissions and isolate deployment credentials by job',

      'Reuse one administrator role for testing, building, and production operations',

      'Store database access inside the runner image so every job can use it'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-36',

    categoryId: 'devops',

    text: 'Your service needs a configuration value that changes between environments but is not secret. What Kubernetes resource is appropriate?',

    options: [

      'A Secret for every configuration value regardless of sensitivity',

      'A PersistentVolume for every configuration value regardless of sensitivity',

      'A ConfigMap for non-sensitive environment-specific configuration',

      'A ServiceAccount for every configuration value regardless of sensitivity'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-37',

    categoryId: 'devops',

    text: 'A production service needs API keys that should not appear in Git history. What is the correct approach?',

    options: [

      'Encrypt the API keys with a key committed in the same repository',

      'Store the API keys in Docker labels so operators can inspect them',

      'Place the API keys in frontend source files so deployments can access them',

      'Use a secret manager and inject the values during deployment or runtime'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-38',

    categoryId: 'devops',

    text: 'Your Kubernetes pods are repeatedly killed after exceeding memory usage. What is a practical first step?',

    options: [

      'Measure memory behavior and set realistic requests and limits based on usage',

      'Remove memory limits from every namespace without measuring workload behavior',

      'Increase CPU limits because CPU allocation directly prevents memory exhaustion',

      'Restart the entire cluster whenever one pod exceeds its memory allocation'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-39',

    categoryId: 'devops',

    text: 'A team wants deployments to be auditable and reproducible months later. Which practice helps most?',

    options: [

      'Keep deployment files only on the CI server and overwrite them after each release',

      'Version control deployment manifests and record immutable release artifacts',

      'Use manual shell commands without recording the exact parameters used',

      'Reuse mutable tags so historical deployments always point to the newest build'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-40',

    categoryId: 'devops',

    text: 'A cloud application stores backups in the same account and region as production. What is the main resilience concern?',

    options: [

      'Backups stored nearby always have higher latency than backups stored elsewhere',

      'Separate accounts prevent backups from being restored by authorized operators',

      'A regional or account-level failure could affect both production and backups',

      'Cross-region backups are useful only when application servers use containers'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-41',

    categoryId: 'devops',

    text: 'A deployment needs to update ten services, but only two changed. What pipeline design avoids unnecessary work?',

    options: [

      'Rebuild every service for every commit regardless of what changed',

      'Skip testing unchanged services even when they share affected dependencies',

      'Deploy all services together because independent releases create more build time',

      'Detect changed components and run targeted builds and tests where dependencies permit'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-42',

    categoryId: 'devops',

    text: 'A containerized service must run reliably across laptops, CI, and production. Which practice provides the strongest consistency?',

    options: [

      'Use the same container build definition and pinned dependency versions across environments',

      'Install different dependency versions in each environment to match local needs',

      'Let production download latest packages during startup without version constraints',

      'Keep container builds optional so developers can choose different runtime environments'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-43',

    categoryId: 'devops',

    text: 'A Kubernetes application has five replicas, but one node contains all of them. What improves fault tolerance?',

    options: [

      'Increase the replica count while keeping every replica on the same node',

      'Use topology spreading or anti-affinity to distribute replicas across nodes',

      'Store pod logs on the node and assume they provide workload redundancy',

      'Disable scheduling constraints so Kubernetes can place replicas anywhere'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-44',

    categoryId: 'devops',

    text: 'Your organization wants to verify that container images come from trusted build processes. What practice helps?',

    options: [

      'Rename images with trusted-looking tags before pushing them to the registry',

      'Store images in public registries because public visibility guarantees authenticity',

      'Sign images and verify signatures before allowing trusted deployments',

      'Skip provenance checks when images were produced by an internal developer'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-45',

    categoryId: 'devops',

    text: 'A Kubernetes cluster needs to run a workload only on nodes with a specific capability. What can enforce placement?',

    options: [

      'Use ConfigMaps to label application source code for workload placement',

      'Use PersistentVolumes to label application source code for workload placement',

      'Use container registries to label application source code for workload placement',

      'Use node labels with selectors or affinity rules for workload placement'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-46',

    categoryId: 'devops',

    text: 'A monitoring system reports that requests are failing, but application logs lack enough context to trace individual requests. What should you add?',

    options: [

      'Distributed tracing and correlation identifiers across service boundaries',

      'More CPU allocation so logs automatically contain request relationships',

      'Shorter log retention so recent entries become easier to inspect',

      'A larger container registry because traces are stored as container images'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-47',

    categoryId: 'devops',

    text: 'A deployment passes tests but gradually increases error rates after release. Which release method reduces risk?',

    options: [

      'Use a full immediate rollout because passing tests guarantee production behavior',

      'Use progressive delivery with automated health checks and rollback thresholds',

      'Disable monitoring during deployment to avoid false alarms from new traffic',

      'Increase deployment frequency until errors become statistically insignificant'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-48',

    categoryId: 'devops',

    text: 'Your infrastructure is created by scripts that depend on each engineer local machine. What problem does this create?',

    options: [

      'Faster recovery because every engineer can use different infrastructure versions',

      'Better security because infrastructure definitions remain outside version control',

      'Environment-specific behavior and poor reproducibility across operators',

      'Automatic scaling because local scripts can directly control production capacity'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-49',

    categoryId: 'devops',

    text: 'A CI job downloads packages from an untrusted mirror. What control improves software supply-chain security?',

    options: [

      'Allow any mirror because package managers automatically verify every package',

      'Disable dependency checks because CI jobs run in isolated environments',

      'Download packages directly during production startup to reduce build complexity',

      'Use trusted registries, dependency verification, and controlled package sources'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-50',

    categoryId: 'devops',

    text: 'A service should continue operating when one application instance becomes unhealthy. What architecture helps?',

    options: [

      'Use multiple replicas behind health-aware load balancing',

      'Use one larger instance with no health checks or failover mechanism',

      'Store all traffic state inside one container temporary filesystem',

      'Route every request to the newest instance regardless of health status'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-51',

    categoryId: 'devops',

    text: 'A cloud provider manages the physical servers, but your team exposes a storage bucket publicly by mistake. Who generally owns the configuration mistake?',

    options: [

      'The provider, because every customer configuration decision is managed by the provider',

      'The customer, because secure configuration of the managed resource remains their responsibility',

      'The hardware vendor, because storage buckets ultimately run on physical machines',

      'The network carrier, because public access always originates from network routing'

    ],

    correctOptionIndex: 1,

  },

  {

    id: 'devops-52',

    categoryId: 'devops',

    text: 'A release pipeline should stop automatically when container vulnerabilities exceed the organization policy threshold. What is the best control?',

    options: [

      'Scan images only after production deployment and accept all findings initially',

      'Run vulnerability scans manually once per quarter outside the release pipeline',

      'Integrate container scanning into CI and enforce severity-based deployment gates',

      'Allow developers to override every critical finding without recording a reason'

    ],

    correctOptionIndex: 2,

  },

  {

    id: 'devops-53',

    categoryId: 'devops',

    text: 'Your Kubernetes cluster has unused capacity at night but heavy workloads during business hours. Which approach can improve efficiency?',

    options: [

      'Keep every node running at maximum size throughout the entire day',

      'Disable workload autoscaling and ask operators to add nodes manually',

      'Increase container image sizes so idle capacity is consumed more efficiently',

      'Combine horizontal scaling with appropriate cluster autoscaling policies'

    ],

    correctOptionIndex: 3,

  },

  {

    id: 'devops-54',

    categoryId: 'devops',

    text: 'A team wants to recover an entire environment after a major infrastructure failure. What capability is most important?',

    options: [

      'Maintain tested backups, infrastructure definitions, and a documented recovery procedure',

      'Keep screenshots of production dashboards and rebuild resources manually later',

      'Store only application source code because infrastructure can always be recreated',

      'Rely on the cloud provider default settings without testing restoration procedures'

    ],

    correctOptionIndex: 0,

  },

  {

    id: 'devops-55',

    categoryId: 'devops',

    text: 'A company wants developers to merge code frequently while keeping the main branch releasable. Which practice best supports this?',

    options: [

      'Batch months of changes together and run the full test suite before merging',

      'Allow direct production changes and synchronize source control after releases',

      'Merge unfinished features without safeguards and rely on production monitoring',

      'Use small changes, automated checks, and frequent integration into the main branch'

    ],

    correctOptionIndex: 3,

  },

],
  oop: [
    {
  id: 'oop-1',
  categoryId: 'oop',
  text: 'A payment system supports CreditCard, PayPal, and UPI payments. Each payment type implements its own processPayment() method. Your code should process any payment without checking which payment type it receives. Which OOP principle best solves this problem?',
  options: [
    'Encapsulation',
    'Inheritance',
    'Polymorphism',
    'Composition'
  ],
  correctOptionIndex: 2,
},
  ]
};

export const getQuestionsForCategory = (categoryId: string): Question[] => {
  return QUESTIONS[categoryId] || [];
};
