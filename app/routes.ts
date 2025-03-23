import { type RouteConfig, index } from "@react-router/dev/routes";


// Automatically register routes based on folder structure
export default [
    index("routes/welcome.tsx"), // Registers Welcome.tsx as the entry page 
    index("routes/home.tsx"), // Registers Home.tsx as the default page 
   ] satisfies RouteConfig;