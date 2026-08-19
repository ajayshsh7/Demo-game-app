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
      text: 'Which of the following hooks should be used for side effects in React?',
      options: ['useState', 'useEffect', 'useMemo', 'useCallback'],
      correctOptionIndex: 1,
    },
      {
    id: 'fe-2',
    categoryId: 'frontend',
    text: 'A large project has 30 pages and each page contains slightly different global button styles. What approach would best improve long-term maintainability?',
    options: [
      'Create a shared button system with reusable styles and variants',
      'Copy the button CSS into every page',
      'Put all styles into one extremely large component file',
      'Use inline styles everywhere'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-3',
    categoryId: 'frontend',
    text: 'An e-commerce homepage uses several JavaScript-driven animations that run continuously while the user scrolls. The page feels laggy on mobile. What should you investigate first?',
    options: [
      'Increase the animation duration to several seconds',
      'Add more React state updates during scrolling',
      'Replace every animation with a database request',
      'Check whether animations trigger expensive layout/paint work and prefer CSS transforms/opacity'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-4',
    categoryId: 'frontend',
    text: 'A React list contains 1,000 products. Every time the user types into a search box, all product components appear to re-render. What is the most appropriate first optimization?',
    options: [
      'Remove React state completely',
      'Filter the data efficiently and avoid unnecessary component re-renders',
      'Convert every product into an image',
      'Store every product in a separate browser tab'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-5',
    categoryId: 'frontend',
    text: 'A component receives an object prop created inline on every parent render. A memoized child still re-renders. Why?',
    options: [
      'React automatically deep-compares all objects',
      'The object gets a new reference on every render',
      'React.memo does not work with objects',
      'Objects cannot be passed as props'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-6',
    categoryId: 'frontend',
    text: 'A developer uses `useEffect` to calculate `totalPrice` from existing state on every render. What would usually be a better approach?',
    options: [
      'Use another useEffect to calculate the value twice',
      'Use useRef for every calculated value',
      'Calculate the derived value directly during rendering or with useMemo when expensive',
      'Store the total in localStorage'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-7',
    categoryId: 'frontend',
    text: 'A search input sends an API request on every keystroke and causes unnecessary network traffic. What is the best solution?',
    options: [
      'Use setInterval for every character',
      'Disable the input',
      'Debounce the search request',
      'Send two requests per keystroke'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-8',
    categoryId: 'frontend',
    text: 'A user clicks "Submit" twice quickly and two orders are created. Which frontend improvement would help prevent this situation?',
    options: [
      'Clear the entire application state',
      'Disable the submit action while the request is pending',
      'Add more CSS animations',
      'Increase the button font size'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-9',
    categoryId: 'frontend',
    text: 'A React component fetches data inside useEffect. The user navigates away before the request finishes. Why might cancellation be useful?',
    options: [
      'It increases API response size',
      'It converts REST into GraphQL',
      'It makes CSS load faster',
      'It prevents unnecessary work and avoids updating an unneeded component'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-10',
    categoryId: 'frontend',
    text: 'A dashboard has several components that all need the logged-in users information. What is usually cleaner than passing the user through many unrelated components?',
    options: [
      'Use appropriate shared state such as Context or a state-management solution',
      'Store the user in a CSS variable',
      'Duplicate the user data in every component',
      'Create a separate HTML page for each component'
    ],
    correctOptionIndex: 0,
  },

  {
    id: 'fe-11',
    categoryId: 'frontend',
    text: 'A React list uses the array index as the key. Items can be inserted or removed from the middle of the list. What problem can occur?',
    options: [
      'CSS will stop working',
      'React will automatically convert the list to a table',
      'React may associate component state with the wrong item',
      'The browser will delete the entire DOM'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-12',
    categoryId: 'frontend',
    text: 'A component has deeply nested conditional rendering that is becoming difficult to understand. What would improve maintainability?',
    options: [
      'Duplicate the component several times',
      'Break the UI into smaller meaningful components and simplify state/conditions',
      'Move the conditions into CSS animations',
      'Put all conditions into one giant ternary'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-13',
    categoryId: 'frontend',
    text: 'A React component stores `isLoggedIn` and also stores `user` separately, even though `isLoggedIn` can be determined from `user`. What problem can this create?',
    options: [
      'State objects cannot contain strings',
      'The application may have conflicting sources of truth',
      'The browser will automatically refresh',
      'React cannot store booleans'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-14',
    categoryId: 'frontend',
    text: 'A component needs to remember a DOM element but changing that reference should not trigger a re-render. Which hook fits this requirement?',
    options: [
      'useMemo',
      'useRef',
      'useEffect',
      'useState'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-15',
    categoryId: 'frontend',
    text: 'A developer adds `useCallback` to every function in an application hoping to make everything faster. What is the main issue with this approach?',
    options: [
      'useCallback prevents functions from executing',
      'useCallback only works in CSS',
      'Memoization has its own cost and is useful mainly when referential stability matters',
      'useCallback always makes applications slower'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-16',
    categoryId: 'frontend',
    text: 'A form contains email, password, and confirm-password fields. The submit button should remain disabled until all fields are valid. Where should validation logic primarily live?',
    options: [
      'In reusable validation logic that can be evaluated from the form state',
      'Only in the browser title',
      'Only inside CSS',
      'Inside an SVG'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-17',
    categoryId: 'frontend',
    text: 'A form reloads the page whenever the user clicks Submit in a React application. What is likely missing?',
    options: [
      'React.memo()',
      'window.reload()',
      'event.preventDefault()',
      'useMemo()'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-18',
    categoryId: 'frontend',
    text: 'A form displays an error message only after the user has interacted with the field. What state is useful for this behavior?',
    options: [
      'Only a loading state',
      'A CSS animation state',
      'A touched/visited state',
      'Only a theme state'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-19',
    categoryId: 'frontend',
    text: 'A login form stores the password in React state and logs the entire state object while debugging. What is the main concern?',
    options: [
      'State objects cannot contain strings',
      'Password fields require SVG',
      'Passwords may accidentally appear in logs or debugging tools',
      'React cannot handle password inputs'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-20',
    categoryId: 'frontend',
    text: 'A form has 15 fields and validation becomes difficult to maintain because every input has separate validation code. What is the better approach?',
    options: [
      'Use CSS selectors as the only validation mechanism',
      'Centralize and reuse validation rules',
      'Validate only the first field',
      'Remove validation'
    ],
    correctOptionIndex: 1,
  },

  {
    id: 'fe-21',
    categoryId: 'frontend',
    text: 'A page has a navigation link styled as a `<div>` with an onClick handler. Keyboard users cannot easily activate it. What is the better solution?',
    options: [
      'Add an SVG behind the div',
      'Use a semantic `<a>` or `<button>` depending on the action',
      'Make the div larger',
      'Add more box-shadow'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-22',
    categoryId: 'frontend',
    text: 'A form field has a placeholder saying "Enter email" but no visible label. What is the main accessibility concern?',
    options: [
      'The field may lack a persistent accessible name/label',
      'CSS cannot style placeholders',
      'Placeholders cannot contain text',
      'Email inputs cannot have placeholders'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-23',
    categoryId: 'frontend',
    text: 'A modal opens when a user clicks a button. For accessibility, what should happen to keyboard focus?',
    options: [
      'Focus should move to the footer',
      'Focus should be removed from the document',
      'Focus should generally move into the modal and be managed appropriately',
      'Focus should always move to the browser address bar'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-24',
    categoryId: 'frontend',
    text: 'A decorative SVG icon is announced by a screen reader and makes the page confusing. What should you consider?',
    options: [
      'Add more animation',
      'Hide decorative SVGs from assistive technology when appropriate',
      'Make every SVG interactive',
      'Replace the SVG with JavaScript'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-25',
    categoryId: 'frontend',
    text: 'An image contains important information, but its alt attribute is empty. What should be done?',
    options: [
      'Replace the image with an animation',
      'Provide meaningful alternative text describing the important information',
      'Keep alt empty because all images should have empty alt',
      'Put the description only in CSS'
    ],
    correctOptionIndex: 1,
  },

  {
    id: 'fe-26',
    categoryId: 'frontend',
    text: 'A CSS animation changes width from 100px to 500px every frame and causes visible jank. Which properties are generally safer for smooth animations?',
    options: [
      'margin and padding',
      'transform and opacity',
      'width and height',
      'top and left only'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-27',
    categoryId: 'frontend',
    text: 'A card should smoothly move 100px to the right when hovered. Which approach is generally preferable for performance?',
    options: [
      'Use transform: translateX()',
      'Change the DOM structure every frame',
      'Use JavaScript to modify the HTML text',
      'Change margin-left repeatedly'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-28',
    categoryId: 'frontend',
    text: 'A page contains a scroll animation that runs JavaScript on every scroll event and becomes sluggish. What is a good first improvement?',
    options: [
      'Disable browser scrolling',
      'Use CSS where possible and throttle/requestAnimationFrame expensive JavaScript work',
      'Increase the number of DOM nodes',
      'Run even more code on every scroll event'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-29',
    categoryId: 'frontend',
    text: 'A website uses large JavaScript animations for a simple fade-in effect. What is usually the better choice?',
    options: [
      'Use React state every frame',
      'Use CSS transitions/animations when they are sufficient',
      'Use a WebSocket for the fade',
      'Create a new DOM node every frame'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-30',
    categoryId: 'frontend',
    text: 'A user has enabled reduced motion in their operating system. How should a frontend application respond?',
    options: [
      'Force all animations to run',
      'Ignore the setting',
      'Respect prefers-reduced-motion and reduce or disable non-essential motion',
      'Increase animation speed'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-31',
    categoryId: 'frontend',
    text: 'You use Motion to animate a list when items are added and removed. Which capability is particularly useful for making removed items animate out?',
    options: [
      'useId',
      'AnimatePresence',
      'dangerouslySetInnerHTML',
      'localStorage'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-32',
    categoryId: 'frontend',
    text: 'A Motion animation should start only after a component enters the viewport. Which concept is most appropriate?',
    options: [
      'Form serialization',
      'CSS specificity',
      'Viewport-based animation triggering',
      'Database indexing'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-33',
    categoryId: 'frontend',
    text: 'A developer creates a spring animation with extremely high stiffness and low damping. What visual result is most likely?',
    options: [
      'The element becomes completely static',
      'The element may oscillate or feel overly bouncy',
      'The element becomes inaccessible',
      'The browser disables JavaScript'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-34',
    categoryId: 'frontend',
    text: 'A page uses dozens of complex Motion animations simultaneously and performance drops on low-end devices. What is the best design decision?',
    options: [
      'Reduce unnecessary animations and prioritize lightweight transform/opacity animations',
      'Add more React state',
      'Increase the number of animated elements',
      'Animate everything more aggressively'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-35',
    categoryId: 'frontend',
    text: 'A button changes its width during a hover animation, causing nearby content to jump. What would prevent most of this layout shift?',
    options: [
      'Force a page reload',
      'Use a larger font',
      'Animate transform/scale or reserve the required layout space',
      'Add more margins dynamically'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-36',
    categoryId: 'frontend',
    text: 'A dashboard is responsive on desktop but overflows horizontally on mobile because a child has a fixed width of 900px. What should you investigate?',
    options: [
      'Add more JavaScript',
      'Use responsive sizing constraints such as max-width and flexible layouts',
      'Remove all CSS',
      'Increase the fixed width to 1200px'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-37',
    categoryId: 'frontend',
    text: 'A CSS rule `.card p` unexpectedly overrides a component-specific paragraph style. What should you investigate first?',
    options: [
      'TypeScript generics',
      'CSS specificity and source order',
      'SVG viewBox',
      'React state'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-38',
    categoryId: 'frontend',
    text: 'A project has repeated CSS values such as the same spacing, radius, and brand colors in dozens of files. What would make the design system easier to maintain?',
    options: [
      'Move all values into JavaScript strings',
      'Use CSS custom properties/design tokens',
      'Remove responsive styles',
      'Duplicate the values more consistently'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-39',
    categoryId: 'frontend',
    text: 'Two elements overlap unexpectedly because one has a higher z-index but still appears behind another. What should you investigate?',
    options: [
      'Stacking contexts and positioning',
      'TypeScript generics',
      'Form validation',
      'React hooks'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-40',
    categoryId: 'frontend',
    text: 'A CSS layout uses many absolute positions and breaks whenever text becomes longer. What layout strategy would usually be more resilient?',
    options: [
      'Hardcode every text width',
      'Use JavaScript to calculate every position',
      'Use more absolute positioning',
      'Use Flexbox/Grid for structural layout'
    ],
    correctOptionIndex: 3,
  },

  {
    id: 'fe-41',
    categoryId: 'frontend',
    text: 'A button contains only a hamburger SVG icon and has no accessible name. What should you add?',
    options: [
      'A database ID',
      'An accessible label such as aria-label or visible text',
      'More CSS animation',
      'A larger SVG'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-42',
    categoryId: 'frontend',
    text: 'An SVG logo looks blurry when displayed at different sizes because it was converted into a low-resolution PNG. What advantage would an SVG provide?',
    options: [
      'It stores database records',
      'It automatically improves JavaScript performance',
      'It scales without the same pixelation associated with raster images',
      'It eliminates CSS'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-43',
    categoryId: 'frontend',
    text: 'An SVG illustration contains dozens of unnecessary path elements and significantly increases DOM complexity. What could improve performance?',
    options: [
      'Convert every path into React state',
      'Optimize/simplify the SVG',
      'Animate every path continuously',
      'Add more paths'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-44',
    categoryId: 'frontend',
    text: 'You want to change the color of an SVG icon using CSS, but the SVG uses hardcoded `fill="#000"`. What could make it easier to theme?',
    options: [
      'Remove the SVG viewBox',
      'Use currentColor or CSS-compatible fill values',
      'Use useEffect to change every pixel',
      'Convert it to SQL'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-45',
    categoryId: 'frontend',
    text: 'An SVG is purely decorative and should not receive keyboard focus. What should you consider?',
    options: [
      'Making every path clickable',
      'Adding tabindex="0"',
      'Appropriate accessibility attributes such as aria-hidden when applicable',
      'Adding a form action'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-46',
    categoryId: 'frontend',
    text: 'A TypeScript function accepts either a string ID or a number ID. What is the most appropriate type?',
    options: [
      'unknown[]',
      'string | number',
      'any',
      'never'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-47',
    categoryId: 'frontend',
    text: 'A React component receives a `variant` prop that should only be `"primary"` or `"secondary"`. How can TypeScript help prevent invalid values?',
    options: [
      'Use boolean only',
      'Remove the prop type',
      'Use a literal union type',
      'Use any'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-48',
    categoryId: 'frontend',
    text: 'A API response is typed as `any`, and a developer accesses `response.user.profile.name` without checking whether those properties exist. What is the main disadvantage?',
    options: [
      'TypeScript provides less protection against invalid property access',
      'React stops rendering',
      'The browser will automatically cache the API',
      'The API becomes faster'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-49',
    categoryId: 'frontend',
    text: 'You receive data from an external API and do not fully trust its runtime shape. Which TypeScript type is safer than `any` before validation?',
    options: [
      'object[] only',
      'never',
      'unknown',
      'void'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-50',
    categoryId: 'frontend',
    text: 'A component prop should be optional and have a default value when omitted. Which TypeScript design expresses this correctly?',
    options: [
      'Use undefined as the entire component type',
      'Make every property required',
      'Make the property optional and provide a default during destructuring',
      'Use never for the property'
    ],
    correctOptionIndex: 2,
  },

  {
    id: 'fe-51',
    categoryId: 'frontend',
    text: 'A JavaScript loop modifies an array while iterating over it, causing some elements to be skipped. What is a safer approach?',
    options: [
      'Convert the array into an object',
      'Add random delays',
      'Always use a while(true) loop',
      'Carefully avoid mutating the array during iteration or create a new filtered array'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-52',
    categoryId: 'frontend',
    text: 'A developer compares two objects with `===` and expects it to check whether their contents are identical. What actually happens?',
    options: [
      'Objects are converted to JSON automatically',
      'Objects are compared by reference',
      'Objects are compared alphabetically',
      'Objects are deeply compared automatically'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-53',
    categoryId: 'frontend',
    text: 'A function unexpectedly uses an older value of state inside an asynchronous callback. What concept should the developer investigate?',
    options: [
      'Closures and stale state',
      'SVG paths',
      'HTML semantics',
      'CSS inheritance'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-54',
    categoryId: 'frontend',
    text: 'A developer uses `map()` to transform an array but forgets to return anything from the callback. What will the resulting array contain?',
    options: [
      'A Promise for each element',
      'The original array only',
      'Undefined values for each processed element',
      'The transformed values automatically'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-55',
    categoryId: 'frontend',
    text: 'A UI performs an expensive calculation after every keystroke even though the result is only needed when the user stops typing. What JavaScript technique can help?',
    options: [
      'Deep cloning every frame',
      'Debouncing',
      'Infinite loops',
      'Recursion'
    ],
    correctOptionIndex: 1,
  },

  {
    id: 'fe-56',
    categoryId: 'frontend',
    text: 'A page contains a huge image below the fold that is slowing initial loading. What could improve loading performance?',
    options: [
      'Load it multiple times',
      'Block the main thread until it loads',
      'Lazy-load the image when appropriate',
      'Convert it into a larger PNG'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-57',
    categoryId: 'frontend',
    text: 'A React page loads a large chart library even though only one rarely visited route uses it. What optimization could help?',
    options: [
      'Move the library into CSS',
      'Import the library twice',
      'Code splitting/lazy loading the library',
      'Disable React'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-58',
    categoryId: 'frontend',
    text: 'A web page has a large amount of JavaScript and the first interaction feels delayed. Which browser metric/concept is especially relevant?',
    options: [
      'Database normalization',
      'SVG viewBox size only',
      'Main-thread work and interaction responsiveness',
      'CSS color contrast only'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-59',
    categoryId: 'frontend',
    text: 'A component performs a heavy calculation during every render even when its inputs have not changed. What React feature could help when the calculation is genuinely expensive?',
    options: [
      'useState with random values',
      'useMemo',
      'useEffect without dependencies',
      'useRef for every calculation'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-60',
    categoryId: 'frontend',
    text: 'A page renders 10,000 rows and becomes slow because all rows exist in the DOM simultaneously. What technique is appropriate?',
    options: [
      'Run setState for every row every second',
      'Virtualization/windowing',
      'Use larger font sizes',
      'Add more rows'
    ],
    correctOptionIndex: 1,
  },

  {
    id: 'fe-61',
    categoryId: 'frontend',
    text: 'A developer uses `innerHTML` with user-provided content to render comments. What security problem should they consider?',
    options: [
      'React key collisions',
      'Potential XSS vulnerabilities',
      'SVG scaling',
      'CSS specificity'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-62',
    categoryId: 'frontend',
    text: 'A user submits a form while offline. Which frontend architecture provides a better user experience than simply showing a network error?',
    options: [
      'Disable all buttons permanently',
      'Delete the form',
      'Detect offline state and provide appropriate retry/queue behavior where the application supports it',
      'Reload the page continuously'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-63',
    categoryId: 'frontend',
    text: 'A button works with a mouse but not when users press Enter or Space with the keyboard. What is the likely issue?',
    options: [
      'The API is too fast',
      'The interaction may not be implemented using an appropriate semantic control',
      'The SVG is too large',
      'The CSS color is incorrect'
    ],
    correctOptionIndex: 1,
  },
  {
    id: 'fe-64',
    categoryId: 'frontend',
    text: 'A page displays a loading spinner for every tiny piece of data, causing the interface to constantly flicker. What is a better UX strategy?',
    options: [
      'Add more animations to every component',
      'Make the spinner larger',
      'Reload the entire page for every request',
      'Use appropriate loading states such as skeletons or stable placeholders and avoid unnecessary flickering'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-65',
    categoryId: 'frontend',
    text: 'A React app fetches the same data in five different components, causing duplicate network requests. What architectural improvement would help?',
    options: [
      'Store the API response in CSS',
      'Centralize/cache the server state using an appropriate data-fetching strategy',
      'Disable all components',
      'Make five more requests'
    ],
    correctOptionIndex: 1,
  },

  {
    id: 'fe-66',
    categoryId: 'frontend',
    text: 'A navigation menu opens with an animation, but users can click links while the menu is visually disappearing. What should be considered?',
    options: [
      'Remove semantic HTML',
      'Increase the animation speed randomly',
      'Coordinate animation state and interaction state so unavailable elements are not accidentally interactive',
      'Add more z-index values'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-67',
    categoryId: 'frontend',
    text: 'A page has a sticky header that covers anchor-linked content when users jump to a section. What CSS technique can help?',
    options: [
      'Add position: absolute to the body',
      'Increase z-index to 999999',
      'Disable scrolling',
      'scroll-margin-top or an appropriate scroll offset strategy'
    ],
    correctOptionIndex: 3,
  },
  {
    id: 'fe-68',
    categoryId: 'frontend',
    text: 'A component needs to fetch data whenever its `userId` changes. What should be included in the useEffect dependency list?',
    options: [
      'The entire DOM',
      'Nothing',
      'userId',
      'Only setState'
    ],
    correctOptionIndex: 2,
  },
  {
    id: 'fe-69',
    categoryId: 'frontend',
    text: 'A CSS animation works perfectly on desktop but causes discomfort for some users. What is the most responsible implementation?',
    options: [
      'Respect user motion preferences and provide reduced-motion behavior',
      'Replace it with a JavaScript interval',
      'Force the animation because consistency is more important',
      'Increase animation speed'
    ],
    correctOptionIndex: 0,
  },
  {
    id: 'fe-70',
    categoryId: 'frontend',
    text: 'You are building a large frontend application where developers repeatedly solve the same problems for buttons, forms, modals, typography, spacing, and animations. What architecture would provide the greatest long-term benefit?',
    options: [
      'Allow every page to define completely different UI conventions',
      'Put every component into one giant file',
      'A reusable component/design system with shared tokens, patterns, accessibility rules, and documented usage',
      'Copy and paste components whenever needed'
    ],
    correctOptionIndex: 2,
  },
  ],
  backend: [
    {
      id: 'be-1',
      categoryId: 'backend',
      text: 'What is the primary purpose of a reverse proxy like Nginx?',
      options: [
        'To compile backend code', 
        'To directly serve database queries', 
        'To distribute incoming traffic and serve static files', 
        'To write log files to the client'
      ],
      correctOptionIndex: 2,
    },
    {
  id: 'be-2',
  categoryId: 'backend',
  text: 'A Node.js API occasionally crashes because an unexpected error is thrown inside an asynchronous operation. What should you implement to handle such failures more reliably?',
  options: [
    'Global error-handling middleware and proper async error propagation',
    'More frontend validation',
    'More CSS rules',
    'Client-side localStorage'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-3',
  categoryId: 'backend',
  text: 'Your API is receiving requests from many clients, and one endpoint is being abused by a single user. What would best protect the server?',
  options: [
    'Rate limiting',
    'Increasing JSON response size',
    'Removing authentication',
    'Using more HTML pages'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-4',
  categoryId: 'backend',
  text: 'A Node.js application needs to read a large file and send it to the client without consuming a huge amount of memory. Which approach is most appropriate?',
  options: [
    'Load the entire file into memory first',
    'Use Node.js streams',
    'Convert the file into JSON',
    'Store it inside a cookie'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-5',
  categoryId: 'backend',
  text: 'Your Node.js server has database credentials directly written inside the source code. What is the biggest problem with this approach?',
  options: [
    'It makes JavaScript execute slower',
    'It exposes sensitive credentials and makes environment-specific configuration difficult',
    'It prevents HTTP requests',
    'It increases CSS bundle size'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-6',
  categoryId: 'backend',
  text: 'An API endpoint takes several seconds because it performs multiple independent database requests sequentially. What could improve the response time?',
  options: [
    'Execute independent operations concurrently where safe',
    'Add more HTML elements',
    'Disable HTTP methods',
    'Store passwords in the URL'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-7',
  categoryId: 'backend',
  text: 'Your Node.js application becomes difficult to maintain because routes contain authentication, validation, database queries, and business logic all together. What would be a better design?',
  options: [
    'Put everything into one route file',
    'Separate controllers, services, middleware, and data-access logic',
    'Move everything into CSS',
    'Duplicate each route for every user'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-8',
  categoryId: 'backend',
  text: 'A backend receives malformed JSON from a client and currently crashes instead of returning a useful response. What should the backend do?',
  options: [
    'Return an appropriate 4xx response through centralized error handling',
    'Restart the user’s browser',
    'Ignore every request',
    'Return HTTP 500 for every possible error'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-9',
  categoryId: 'backend',
  text: 'Your Node.js API performs a long-running email-generation task. Users do not need the result immediately. What architecture would reduce the API response time?',
  options: [
    'Process the task synchronously during every request',
    'Put the task into a background job queue',
    'Send the task through CSS',
    'Increase the password length'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-10',
  categoryId: 'backend',
  text: 'Your Node.js server needs to handle CPU-intensive work while utilizing multiple CPU cores. What could help scale the application?',
  options: [
    'Node.js clustering or multiple application instances',
    'More browser tabs',
    'Larger cookies',
    'More HTML files'
  ],
  correctOptionIndex: 0,
},

{
  id: 'be-11',
  categoryId: 'backend',
  text: 'A frontend needs to retrieve a user’s profile without modifying anything on the server. Which HTTP method is most appropriate?',
  options: [
    'POST',
    'PATCH',
    'GET',
    'DELETE'
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
    '400 Bad Request',
    '301 Moved Permanently'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-13',
  categoryId: 'backend',
  text: 'Your API successfully creates a new resource after receiving a POST request. Which status code best communicates this?',
  options: [
    '201 Created',
    '204 No Content',
    '401 Unauthorized',
    '404 Not Found'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-14',
  categoryId: 'backend',
  text: 'A user requests a resource that does not exist. Which HTTP response should normally be returned?',
  options: [
    '200',
    '201',
    '404',
    '500'
  ],
  correctOptionIndex: 2,
},
{
  id: 'be-15',
  categoryId: 'backend',
  text: 'Your API allows users to update only one field of a profile without replacing the entire resource. Which HTTP method is most appropriate?',
  options: [
    'GET',
    'PATCH',
    'DELETE',
    'OPTIONS'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-16',
  categoryId: 'backend',
  text: 'An authenticated user attempts to access an admin-only endpoint but does not have the required permission. What response best represents this situation?',
  options: [
    '201 Created',
    '403 Forbidden',
    '404 Not Found',
    '301 Redirect'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-17',
  categoryId: 'backend',
  text: 'Your REST API has an endpoint `/users/123/orders`. What does this URL most naturally represent?',
  options: [
    'Orders associated with user 123',
    'A CSS file for user 123',
    'A database server named orders',
    'A WebSocket connection'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-18',
  categoryId: 'backend',
  text: 'Your API returns different error formats from different endpoints, making frontend error handling difficult. What would improve the design?',
  options: [
    'Use a consistent API error-response structure',
    'Remove all error messages',
    'Return HTML from every endpoint',
    'Return random status codes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-19',
  categoryId: 'backend',
  text: 'A client repeatedly sends the same GET request for data that rarely changes. What HTTP mechanism can help reduce unnecessary network requests?',
  options: [
    'HTTP caching headers',
    'POST requests',
    'Password hashing',
    'WebSockets for every request'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-20',
  categoryId: 'backend',
  text: 'Your API returns 100,000 records from a database to a mobile client, causing slow responses. What is the better solution?',
  options: [
    'Return all records every time',
    'Implement pagination',
    'Convert the response to HTML',
    'Disable authentication'
  ],
  correctOptionIndex: 1,
},

{
  id: 'be-21',
  categoryId: 'backend',
  text: 'After login, your server needs a way to recognize the user across subsequent API requests. What is a common solution?',
  options: [
    'Authentication tokens',
    'CSS classes',
    'HTML comments',
    'Random query parameters'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-22',
  categoryId: 'backend',
  text: 'Your application stores user passwords as plain text. What is the biggest problem?',
  options: [
    'Passwords become difficult to display',
    'A database breach could expose users’ actual passwords',
    'Login becomes too fast',
    'REST APIs stop working'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-23',
  categoryId: 'backend',
  text: 'What should a backend use to protect stored passwords?',
  options: [
    'Encryption with a reversible key only',
    'A strong password hashing algorithm with a salt',
    'Base64 encoding',
    'Plain text storage'
  ],
  correctOptionIndex: 1,
},
{
  id: 'be-24',
  categoryId: 'backend',
  text: 'Your JWT contains user information and is sent with API requests. What problem does the token primarily solve?',
  options: [
    'It allows the server to identify and authenticate the requester',
    'It automatically encrypts the database',
    'It replaces the frontend',
    'It improves CSS rendering'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-25',
  categoryId: 'backend',
  text: 'A user logs out, but an already-issued JWT remains valid until it expires. What is one common strategy for handling token invalidation?',
  options: [
    'Use short-lived access tokens with refresh-token management or token revocation',
    'Store the token permanently in the browser',
    'Increase token size',
    'Remove HTTPS'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-26',
  categoryId: 'backend',
  text: 'Your application allows an authenticated normal user to call an admin endpoint by manually changing the URL. What is missing?',
  options: [
    'Authorization checks',
    'CSS validation',
    'HTML routing',
    'Image optimization'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-27',
  categoryId: 'backend',
  text: 'An attacker attempts to inject malicious SQL through a login form. Which backend practice helps prevent this?',
  options: [
    'Parameterized queries or a properly configured ORM',
    'Increasing the input field size',
    'Storing SQL in cookies',
    'Removing database indexes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-28',
  categoryId: 'backend',
  text: 'Your API sends authentication credentials over plain HTTP. What is the major risk?',
  options: [
    'Credentials can potentially be intercepted during transmission',
    'The API becomes RESTful',
    'Database queries become faster',
    'JSON becomes invalid'
  ],
  correctOptionIndex: 0,
},

{
  id: 'be-29',
  categoryId: 'backend',
  text: 'Your product API repeatedly queries the database for the same popular product. What problem can Redis caching help solve?',
  options: [
    'It can reduce repeated database queries and improve response time',
    'It permanently replaces the database',
    'It automatically fixes frontend bugs',
    'It removes authentication requirements'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-30',
  categoryId: 'backend',
  text: 'A cached product price is changed in the database, but users continue receiving the old price from Redis. What problem is occurring?',
  options: [
    'Cache invalidation or stale cache data',
    'SQL injection',
    'DNS failure',
    'WebSocket failure'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-31',
  categoryId: 'backend',
  text: 'You want cached data to automatically disappear after a certain period. Which Redis feature is useful?',
  options: [
    'TTL/expiration',
    'Foreign keys',
    'JSX',
    'HTTP redirects'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-32',
  categoryId: 'backend',
  text: 'Your website receives a huge number of requests for a public leaderboard that changes every few minutes. Why might Redis be a good choice?',
  options: [
    'Frequently requested data can be served from memory instead of querying the database every time',
    'Redis converts REST APIs into GraphQL',
    'Redis replaces HTTPS',
    'Redis renders React components'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-33',
  categoryId: 'backend',
  text: 'Your application stores user session information in Redis because several backend servers need access to the same sessions. What problem does this solve?',
  options: [
    'Shared session state across multiple application instances',
    'Frontend component reuse',
    'Database schema design',
    'CSS responsiveness'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-34',
  categoryId: 'backend',
  text: 'Your Redis cache goes down and your application immediately fails even though the primary database is still available. What architectural improvement would make the system more resilient?',
  options: [
    'Treat the cache as an optimization and fall back to the database when appropriate',
    'Remove the database',
    'Store all database data only in Redis',
    'Disable error handling'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-35',
  categoryId: 'backend',
  text: 'You need to prevent multiple users from simultaneously processing the same resource in a distributed application. Which Redis capability could help?',
  options: [
    'Distributed locking',
    'CSS variables',
    'HTML forms',
    'HTTP redirects'
  ],
  correctOptionIndex: 0,
},

{
  id: 'be-36',
  categoryId: 'backend',
  text: 'A mobile application needs only a user’s name and profile image, but a REST endpoint returns 30 additional fields. What problem could GraphQL solve?',
  options: [
    'Allow the client to request only the fields it needs',
    'Automatically encrypt the database',
    'Replace authentication',
    'Eliminate all backend logic'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-37',
  categoryId: 'backend',
  text: 'Your frontend needs data from users, posts, and comments, requiring several REST requests. What GraphQL capability can reduce this problem?',
  options: [
    'A single query can request related data through the GraphQL schema',
    'GraphQL removes databases',
    'GraphQL converts HTTP into TCP',
    'GraphQL eliminates authorization'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-38',
  categoryId: 'backend',
  text: 'A GraphQL API allows clients to request extremely deeply nested relationships, causing expensive database operations. What should the backend consider?',
  options: [
    'Query depth/complexity limits and efficient data fetching',
    'Removing the schema',
    'Disabling all queries',
    'Returning HTML instead'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-39',
  categoryId: 'backend',
  text: 'A GraphQL resolver fetches a user’s posts individually for 1,000 users, resulting in hundreds of database queries. Which problem is this commonly associated with?',
  options: [
    'N+1 query problem',
    'DNS poisoning',
    'CSS cascade problem',
    'JWT expiration'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-40',
  categoryId: 'backend',
  text: 'A GraphQL API needs to expose a new optional field without breaking existing clients. What is generally the safest approach?',
  options: [
    'Add the field while keeping existing fields available',
    'Delete the existing field immediately',
    'Change every existing field’s type',
    'Require every client to upgrade immediately'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-41',
  categoryId: 'backend',
  text: 'Your GraphQL API allows a user to query another user’s private information. What should be added to the resolver logic?',
  options: [
    'Authorization checks',
    'CSS middleware',
    'Browser routing',
    'Image compression'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-42',
  categoryId: 'backend',
  text: 'Your application has many different clients that need different representations of the same data. Why might GraphQL be useful?',
  options: [
    'Clients can define the shape of the data they need',
    'It removes the need for backend validation',
    'It automatically creates database indexes',
    'It eliminates network communication'
  ],
  correctOptionIndex: 0,
},

{
  id: 'be-43',
  categoryId: 'backend',
  text: 'You are building a chat application where messages should appear immediately without repeatedly polling the server. Which technology is most suitable?',
  options: [
    'WebSockets',
    'FTP',
    'CSS',
    'SQL'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-44',
  categoryId: 'backend',
  text: 'A stock dashboard needs to receive price updates from the server as soon as they occur. Why would WebSockets be useful?',
  options: [
    'They maintain a persistent connection that allows real-time server-to-client communication',
    'They require the client to refresh the page',
    'They only work for static files',
    'They replace the database'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-45',
  categoryId: 'backend',
  text: 'Your WebSocket server has thousands of connected users and one server instance becomes overloaded. What could help scale it?',
  options: [
    'Multiple WebSocket servers with shared state/message distribution',
    'Add more HTML elements',
    'Disable persistent connections',
    'Store messages only in browser variables'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-46',
  categoryId: 'backend',
  text: 'Multiple WebSocket servers are running, and a message received by server A needs to reach users connected to server B. What can help distribute the message?',
  options: [
    'Redis Pub/Sub or another message broker',
    'CSS Grid',
    'LocalStorage only',
    'HTML forms'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-47',
  categoryId: 'backend',
  text: 'A user’s internet connection temporarily drops while using a WebSocket application. What should the client typically do?',
  options: [
    'Detect disconnection and attempt reconnection with appropriate backoff',
    'Delete the entire database',
    'Restart the backend manually',
    'Permanently disable WebSockets'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-48',
  categoryId: 'backend',
  text: 'A WebSocket connection remains open for a very long time and the server needs to determine whether the client is still reachable. What mechanism can help?',
  options: [
    'Ping/pong heartbeat messages',
    'CSS animations',
    'SQL joins',
    'HTTP redirects'
  ],
  correctOptionIndex: 0,
},

{
  id: 'be-49',
  categoryId: 'backend',
  text: 'Your Spring Boot application has database, business logic, and HTTP handling inside the same controller classes. What would improve maintainability?',
  options: [
    'Separate controllers, services, and repositories',
    'Put everything into one controller',
    'Remove dependency injection',
    'Move business logic into HTML'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-50',
  categoryId: 'backend',
  text: 'A Spring Boot controller directly creates database repository objects using new. What Spring feature could improve this design?',
  options: [
    'Dependency injection',
    'CSS modules',
    'Browser caching',
    'GraphQL fragments'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-51',
  categoryId: 'backend',
  text: 'Multiple Spring Boot services need the same configuration values, such as database URLs, without hardcoding them into Java classes. What should you use?',
  options: [
    'Externalized configuration',
    'HTML attributes',
    'CSS variables',
    'URL fragments'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-52',
  categoryId: 'backend',
  text: 'A Spring Boot endpoint throws different exceptions, and each controller handles them differently. What would create more consistent API error responses?',
  options: [
    'Global exception handling using mechanisms such as @ControllerAdvice',
    'Duplicate controllers',
    'More frontend validation',
    'Disable exception handling'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-53',
  categoryId: 'backend',
  text: 'Your Spring Boot application repeatedly creates database connections for every request, causing performance issues. What should you investigate?',
  options: [
    'Database connection pooling',
    'HTML routing',
    'CSS caching',
    'JWT payload size'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-54',
  categoryId: 'backend',
  text: 'Your Spring Boot application receives thousands of requests, and several requests execute the same expensive database query. What could improve performance?',
  options: [
    'Add appropriate caching',
    'Remove database indexes',
    'Disable transactions',
    'Increase JSON indentation'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-55',
  categoryId: 'backend',
  text: 'A Spring Boot service updates multiple database records, and failure halfway through would leave inconsistent data. What should be considered?',
  options: [
    'A database transaction',
    'A CSS transaction',
    'A WebSocket connection',
    'A browser cookie'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-56',
  categoryId: 'backend',
  text: 'Your Spring Boot API exposes an endpoint that should only be accessible to administrators. What should enforce this?',
  options: [
    'Authorization rules/security configuration',
    'URL naming alone',
    'CSS classes',
    'Frontend buttons only'
  ],
  correctOptionIndex: 0,
},

{
  id: 'be-57',
  categoryId: 'backend',
  text: 'Your application works correctly with 100 users but becomes slow with 100,000 users. What should you investigate first?',
  options: [
    'Bottlenecks such as database queries, CPU, memory, network, and application architecture',
    'Change all button colors',
    'Add more frontend animations',
    'Remove logging completely'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-58',
  categoryId: 'backend',
  text: 'A database query becomes increasingly slow as the table grows from thousands to millions of records. What should you investigate?',
  options: [
    'Query execution plans and appropriate indexes',
    'CSS specificity',
    'HTTP method names',
    'JWT formatting'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-59',
  categoryId: 'backend',
  text: 'Two users attempt to purchase the last available product at almost exactly the same time. What backend problem must be handled carefully?',
  options: [
    'Race condition and transactional consistency',
    'CSS inheritance',
    'HTML validation',
    'Browser rendering'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-60',
  categoryId: 'backend',
  text: 'Your API performs multiple database operations that must either all succeed or all fail together. What should you use?',
  options: [
    'A database transaction',
    'Separate browser tabs',
    'Redis TTL only',
    'HTTP caching'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-61',
  categoryId: 'backend',
  text: 'Your backend receives the same request multiple times because the client retries after a network timeout. For operations such as payments, what concept can prevent duplicate processing?',
  options: [
    'Idempotency',
    'CSS inheritance',
    'GraphQL fragments',
    'WebSocket heartbeat'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-62',
  categoryId: 'backend',
  text: 'Your application sends an email whenever an order is placed, but slow email delivery makes the order API slow. What would improve the architecture?',
  options: [
    'Process email sending asynchronously through a queue',
    'Make the user wait for the email',
    'Store the email in CSS',
    'Remove order validation'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-63',
  categoryId: 'backend',
  text: 'Your backend has multiple services that need to communicate asynchronously without waiting for each other to finish. What architecture is suitable?',
  options: [
    'Message queue/event-driven communication',
    'Only synchronous database calls',
    'CSS events',
    'HTML redirects'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-64',
  categoryId: 'backend',
  text: 'Your API is deployed across multiple servers, but users are randomly logged out when requests move between servers. What is a likely problem?',
  options: [
    'Session state is stored locally on individual servers',
    'CSS is not loaded',
    'REST does not support authentication',
    'JSON cannot be used across servers'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-65',
  categoryId: 'backend',
  text: 'Your API is receiving huge amounts of traffic from automated clients. Before scaling the entire infrastructure, what should you consider?',
  options: [
    'Rate limiting, caching, request validation, and traffic analysis',
    'Adding more frontend components',
    'Removing API authentication',
    'Increasing image resolution'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-66',
  categoryId: 'backend',
  text: 'A backend service depends on another service that occasionally becomes unavailable. Requests start hanging and eventually consume all available connections. Which resilience pattern can help?',
  options: [
    'Timeout and circuit breaker',
    'Infinite retries',
    'More database tables',
    'CSS fallback'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-67',
  categoryId: 'backend',
  text: 'Your API is used by several frontend applications, and changing a response field unexpectedly breaks older clients. What should the backend team consider?',
  options: [
    'API versioning and backward-compatible changes',
    'Randomly changing response formats',
    'Removing validation',
    'Disabling HTTP status codes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-68',
  categoryId: 'backend',
  text: 'Your backend logs contain passwords, authentication tokens, and sensitive user information. What should you do?',
  options: [
    'Remove or redact sensitive information from logs',
    'Store even more sensitive information in logs',
    'Make logs publicly accessible',
    'Disable authentication'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-69',
  categoryId: 'backend',
  text: 'Your API becomes difficult to debug because you cannot determine which request caused an error across several backend services. What could improve observability?',
  options: [
    'Correlation/request IDs and centralized structured logging',
    'More CSS comments',
    'Larger JWT payloads',
    'More frontend routes'
  ],
  correctOptionIndex: 0,
},
{
  id: 'be-70',
  categoryId: 'backend',
  text: 'Your application has REST APIs, GraphQL queries, WebSocket connections, Redis caching, and multiple backend services. Users report intermittent slow responses. What would be the most systematic first step?',
  options: [
    'Measure the system using logs, metrics, tracing, and profiling to identify the actual bottleneck',
    'Rewrite the entire backend immediately',
    'Add Redis to every function',
    'Increase the frontend bundle size'
  ],
  correctOptionIndex: 0,
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
    }
  ],
  devops: [
    {
  id: 'devops-1',
  categoryId: 'devops',
  text: 'Your application works correctly on your local machine but fails after deployment because environment variables are missing. What is the best DevOps approach to prevent this problem?',
  options: [
    'Hardcode the environment variables directly into the application',
    'Store configuration securely and inject environment variables through the deployment pipeline',
    'Commit the production environment file to the Git repository',
    'Rebuild the application manually every time it is deployed'
  ],
  correctOptionIndex: 1,
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
