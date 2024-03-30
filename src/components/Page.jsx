export default function Page({ children }) { // standard way to pass properties, using children, which means an element that'll go inside another element, in this case, the Components element inside the Page element  at Router.jsx
    return <div style={{ display: 'block' }}>{children}</div> // display block so the div element is actually executed on screen, to avoid problems
} 

// this might seem useless but it might be needed to make a global ...treatment..., so instead of making it inside of router.jsx, we can leave it focused on routing... every page we make moving forward will be inside of this div