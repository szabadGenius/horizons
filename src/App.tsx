/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("Button clicked!");
        // Your click handling logic here
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <Button
                 // Changes style to secondary
                onClick={handleClick} // Adds click handler
            >
                Click Me
            </Button>
        </>
    );
}

export default App
 */

// src/App.tsx
import { BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
// import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
// import { Button } from '@/components/ui/button';
// import Home from './pages/Home';
// import TodoList from './pages/TodoList';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
              {/* <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <Button variant="ghost">Home</Button>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/todos">
                      <Button variant="ghost">Todos</Button>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}
              <ThemeToggle />
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-6">
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/todos" element={<TodoList />} /> */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;