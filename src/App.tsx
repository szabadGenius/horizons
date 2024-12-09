// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
// import { ThemeToggle } from '@/components/theme-toggle';
import ToDoList from "./pages/todo-list";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Home from "./pages/home";
// import { ToDoSidebar } from "./components/todo-sidebar";

function App() {
    return (
        <ThemeProvider defaultTheme="dark">
            <Router>
                {/* <div className="flex h-screen bg-background"> */}
                <SidebarProvider>
                    <AppSidebar />
                    {/* <ToDoSidebar /> */}

                    {/* Content Area */}
                    <main className="flex-1 p-6 overflow-auto">
                        <SidebarTrigger />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/todos" element={<ToDoList />} />
                            <Route
                                path="*"
                                element={<div>404 Not Found</div>}
                            />
                        </Routes>
                    </main>
                </SidebarProvider>
                {/* </div> */}
            </Router>
        </ThemeProvider>
    );
}

export default App;
