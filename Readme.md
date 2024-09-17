# The Base code of React 🚀

NPM is known as package manager and it does not have any full form like 'node package manager'.

Our React project is based on several external packages which are located in Node Modules are manages by 'NPM'.

'BUNDLERS' ignites our app, they bind all the files and make our app production ready. There are many type of bundlers like webpack, vite, parscal. We are using parscal.

There are 2 type of dependencies
  - Normal dependencies (npm install ....)
  - Dev dependencies (npm install -D ....) (used for development of app)

'package.json' keeps the track of what version of packages are installed and can be edited.
'package-lock.json' keeps the trach the dependencies are installed correctly in all environments and it can not be edited. 

'Node_modules' is like a database that contain all the data of dependencies. 

If we have 'package.json' and 'package-lock.json' we can re create all our 'node_modules'.

'NPM' is used for installing a package, while 'NPX' is used for executing a package.

# PARCEL:
- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization 
- Minification
- Bundling
- Compress
- Code splitting
- Consistent Hashing
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS 
- Tree Shaking  - remove unnecessary files
    
React.createElelemnt creates a object , When the object is rendered to DOM it becomes a html createElelemnt
 [React.createElelemnt => Object => HTML Element]

 JSX not means HTML into JavaScript OR JavaScript into HTML. JSX have HTML or XML like syntax.

'BABEL' takes the code and convert it into the code in which JavaScript Browsers understands.

 BABEL coverts all the JSX code into React.createElelemnt creates a object , When the object is rendered to DOM it becomes a html createElelemnt
 [JSX code => React.createElelemnt => Object => HTML Element]

 Elements in React are plain JSX Code.
 Components in React are used to return the Element inside our React Code. 

 Component composition is to merge a component into another component.

 JSX sanitizes our data coming from an external source like ans external API and prevent our code from crosss site scripting attacks.

 Props are just argument to a function(React component).

 There are two type of Export/Import:

 - Default export/import: (Cannot export more than 1 component or element from a file)
   - export default <Component>;
   - import <Component> from "<pathName>"

 - Named export/import: (Used when we have to export more than 2 component or element from a file)
   - export const <Component>;
   - import {<Component>} from "<pathName>"

# React Hooks
 (Normal JavaScript utility Function) 

 ## 1.UseState()  "Gives us a variable with super powers"
    - Whenever State variable updates, react triggers a reconciliation cycle(re-renders the component).
    - It is used to create Local State variables inside our Functional Components.
    - They are meant to be created inside the function at the higher level.
    - They should not be created inside conditions or loops.

 ## 2.UseEffect() "Runs after UI is rendered" 
    - If there is no dependency array => UseEffect is called on every render.
    - If dependency array is empty [] => UseEffect is called on initial render(just once).
    - If dependency array is [btnNameReact] => UseEffect is called everytime btnNameReact is updated.


# LifeCycle Methods
 ## Note: 
  - Never Compare **class lifecycle methods** with **useEffect**, it is reffered as a bad practice.
  - There is no **Lifecycle methods** in modern function based React.

 ## 1.Mounting

  ### Example 1:
    How Mounting takes place in a class Component.

      - Parent constructor called                    (_Reconciliation OR Render Phase_)
      - Parent render called                         (_Reconciliation OR Render Phase_)
      - Parent componentDidMount called              (_DOM Manipulation OR Commit Phase_)
      
  ### Example 2:
    How Mounting takes place in a parent class Component having child component.

      - Parent constructor called                    (_Reconciliation OR Render Phase_)
      - Parent render called                         (_Reconciliation OR Render Phase_)

        - Child constructor called                   (_Reconciliation OR Render Phase_)
        - Child render called                        (_Reconciliation OR Render Phase_)
        - First child componentDidMout called        (_DOM Manipulation OR Commit Phase_)

      - Parent componentDidMount called              (_DOM Manipulation OR Commit Phase_)

  ### Example 3:
    How Mounting takes place in a parent class Component having two child component (first class, second class).

      - Parent constructor called                    (_Reconciliation OR Render Phase_)
      - Parent render called                         (_Reconciliation OR Render Phase_)

        - First child constructor called             (_Reconciliation OR Render Phase_)             
        - First child render called                  (_Reconciliation OR Render Phase_)

        - Second child constructor called            (_Reconciliation OR Render Phase_)
        - Second child render called                 (_Reconciliation OR Render Phase_)

        - First child componentDidMout called        (_DOM Manipulation OR Commit Phase_)
        - Second child componentDidMount called      (_DOM Manipulation OR Commit Phase_)

      - Parent componentDidMount called              (_DOM Manipulation OR Commit Phase_)

      React optimises the App by applying all the componentDidMount in a one Go or In Single Batch thats why they are executed or called at last.


 # 2.Updating

  ### Example:
   Suppose we have a Class based Component and after the completition of ***Mounting***. We are updating the data by an API call in ***componentDidUpdate*** and using ***setState***, When the ***setState***  occurs. Then again the data will re-render with new data and after the **ComponentDidUpdate** is called.

    - Constructor Called
    - Rendering Takes place
    - componentDidMount called (this.setState called)
    - Re rendering takes place with update data.
    - componentDidUpdate taked place

 # 3.Unmounting
   - In Unmounting, if the component is removed from the screen such as we swithc between the pages, then the componentWillUnmount is called just before the unmounting of component from the DOM.
   - ComponentWillUnmount is used to remove the resources which are in action from the DOM (setTimeout, eventListeners etc).