// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeToggle } from '@/components/theme-toggle';
import ToDoList from './pages/todo-list';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Button } from './components/ui/button';
import Home from './pages/home';

function App() {
  return (
      <ThemeProvider defaultTheme="dark">
          <Router>
              <div className="flex h-screen bg-background">
                  <header className="border-r">
                      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                          <NavigationMenu>
                              <NavigationMenuList>
                                  {/* <NavigationMenuItem>
                                <Link to="/">
                                  <Button variant="ghost">Home</Button>
                                </Link>
                              </NavigationMenuItem> */}
                                  <NavigationMenuItem>
                                      <Link to="/todos">
                                          <Button variant="ghost">Todos</Button>
                                      </Link>
                                  </NavigationMenuItem>
                              </NavigationMenuList>
                          </NavigationMenu>
                          <ThemeToggle />
                      </div>
                  </header>

                  {/* <main className="max-w-7xl mx-auto px-4 py-6">
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/todos" element={<ToDoList />} />
                          <Route path="*" element={<div>404 Not Found</div>} />
                      </Routes>
                  </main> */}
                  {/* Content Area */}
                  <main className="flex-1 p-6 overflow-auto">
                      <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/todos" element={<ToDoList />} />

                          <Route path="*" element={<div>404 Not Found</div>} />
                      </Routes>
                  </main>
              </div>
          </Router>
      </ThemeProvider>
  );
}

export default App;