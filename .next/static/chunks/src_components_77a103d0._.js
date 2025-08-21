(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "How to submit",
        path: "/HowToSubmit"
    },
    {
        name: "About",
        path: "/about"
    }
];
const Header = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center h-16 sm:h-20 px-5 sm:px-16 lg:px-28 shadow-md bg-black bg-opacity-90 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/pics/logo.png",
                    alt: "Logo",
                    width: 481,
                    height: 639,
                    className: "w-auto h-9 sm:h-12"
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:hidden cursor-pointer z-20",
                onClick: toggleMenu,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/pics/hamburgerMenu.png",
                    alt: "Menu",
                    width: 31,
                    height: 40
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden sm:flex gap-5",
                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.path,
                        className: `transition-colors m-2.5 ${pathname === link.path ? "text-[#2EFF6C]" : "text-[#A9A9B3] hover:text-[#7E848F] "}`,
                        children: link.name
                    }, link.path, false, {
                        fileName: "[project]/src/components/header.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden pb-2 absolute top-16 right-0 w-full bg-black bg-opacity-95 shadow-md z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.path,
                            className: `transition-colors px-5 py-3 ${pathname === link.path ? "text-[#2EFF6C]" : "text-[#A9A9B3] hover:text-[#7E848F] "}`,
                            onClick: ()=>setIsMenuOpen(false),
                            children: link.name
                        }, link.path, false, {
                            fileName: "[project]/src/components/header.tsx",
                            lineNumber: 67,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/header.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_s(Header, "d/L2GqF9l44rBl7/rgBWSc2ljcI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AnimatedBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const AnimatedBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "AnimatedBackground.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["AnimatedBackground.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Matrix characters - including binary, hex, and hacker symbols
            const matrix = "01アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
            const matrixArray = matrix.split("");
            const fontSize = 14;
            const columns = Math.floor(canvas.width / fontSize);
            // Array to store the y position of each drop
            const drops = [];
            // Initialize drops
            for(let x = 0; x < columns; x++){
                drops[x] = Math.random() * -100;
            }
            // Animation function
            const draw = {
                "AnimatedBackground.useEffect.draw": ()=>{
                    // Dark background with transparency for trail effect
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.font = fontSize + 'px "Courier New", monospace';
                    // Loop over drops
                    for(let i = 0; i < drops.length; i++){
                        // Random character
                        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                        // Create gradient effect - brighter at the front of the drop
                        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - 100, 0, drops[i] * fontSize);
                        gradient.addColorStop(0, 'rgba(0, 255, 0, 0.1)');
                        gradient.addColorStop(0.8, 'rgba(0, 255, 0, 0.8)');
                        gradient.addColorStop(1, 'rgba(0, 255, 0, 1)');
                        ctx.fillStyle = gradient;
                        // Add some randomness to character brightness
                        if (Math.random() > 0.98) {
                            ctx.fillStyle = '#ffffff'; // Occasional white character
                        }
                        // Draw the character
                        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                        // Send the drop back to the top randomly after it has crossed the screen
                        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                            drops[i] = Math.random() * -100;
                        }
                        // Increment Y coordinate with slight randomness
                        drops[i] += 0.5 + Math.random() * 0.5;
                    }
                }
            }["AnimatedBackground.useEffect.draw"];
            // Floating particles for additional effect
            const particles = [];
            const drawParticles = {
                "AnimatedBackground.useEffect.drawParticles": ()=>{
                    // Add new particles occasionally
                    if (Math.random() > 0.995) {
                        particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            vx: (Math.random() - 0.5) * 0.5,
                            vy: (Math.random() - 0.5) * 0.5,
                            life: 100
                        });
                    }
                    // Draw and update particles
                    particles.forEach({
                        "AnimatedBackground.useEffect.drawParticles": (particle, index)=>{
                            ctx.fillStyle = `rgba(0, 255, 0, ${particle.life / 100 * 0.3})`;
                            ctx.fillRect(particle.x, particle.y, 1, 1);
                            particle.x += particle.vx;
                            particle.y += particle.vy;
                            particle.life--;
                            if (particle.life <= 0) {
                                particles.splice(index, 1);
                            }
                        }
                    }["AnimatedBackground.useEffect.drawParticles"]);
                }
            }["AnimatedBackground.useEffect.drawParticles"];
            // Combined animation
            const animate = {
                "AnimatedBackground.useEffect.animate": ()=>{
                    draw();
                    drawParticles();
                }
            }["AnimatedBackground.useEffect.animate"];
            // Start animation
            const interval = setInterval(animate, 50);
            return ({
                "AnimatedBackground.useEffect": ()=>{
                    clearInterval(interval);
                    window.removeEventListener('resize', resizeCanvas);
                }
            })["AnimatedBackground.useEffect"];
        }
    }["AnimatedBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]",
        style: {
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 20, 0, 0.9) 50%, rgba(0, 0, 0, 0.95) 100%)',
            opacity: 0.3
        }
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedBackground.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
};
_s(AnimatedBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = AnimatedBackground;
const __TURBOPACK__default__export__ = AnimatedBackground;
var _c;
__turbopack_context__.k.register(_c, "AnimatedBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HackerGridBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const HackerGridBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HackerGridBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "HackerGridBackground.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["HackerGridBackground.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Grid properties
            const gridSize = 50;
            let time = 0;
            // Binary code rain
            const binaryChars = [
                '0',
                '1'
            ];
            const columns = Math.floor(canvas.width / 10);
            const drops = [];
            for(let i = 0; i < columns; i++){
                drops[i] = Math.random() * -100;
            }
            const draw = {
                "HackerGridBackground.useEffect.draw": ()=>{
                    // Clear canvas with dark background
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Draw animated grid
                    ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';
                    ctx.lineWidth = 1;
                    // Vertical lines
                    for(let x = 0; x < canvas.width; x += gridSize){
                        const offset = Math.sin(time * 0.001 + x * 0.01) * 5;
                        ctx.beginPath();
                        ctx.moveTo(x + offset, 0);
                        ctx.lineTo(x + offset, canvas.height);
                        ctx.stroke();
                    }
                    // Horizontal lines
                    for(let y = 0; y < canvas.height; y += gridSize){
                        const offset = Math.cos(time * 0.001 + y * 0.01) * 5;
                        ctx.beginPath();
                        ctx.moveTo(0, y + offset);
                        ctx.lineTo(canvas.width, y + offset);
                        ctx.stroke();
                    }
                    // Binary rain
                    ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
                    ctx.font = '12px monospace';
                    for(let i = 0; i < drops.length; i++){
                        const char = binaryChars[Math.floor(Math.random() * 2)];
                        ctx.fillText(char, i * 10, drops[i]);
                        if (drops[i] > canvas.height && Math.random() > 0.975) {
                            drops[i] = 0;
                        }
                        drops[i] += 0.5;
                    }
                    // Glitch effect lines
                    if (Math.random() > 0.98) {
                        const y = Math.random() * canvas.height;
                        const height = 2 + Math.random() * 3;
                        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
                        ctx.fillRect(0, y, canvas.width, height);
                    }
                    time++;
                }
            }["HackerGridBackground.useEffect.draw"];
            const interval = setInterval(draw, 16); // ~60fps
            return ({
                "HackerGridBackground.useEffect": ()=>{
                    clearInterval(interval);
                    window.removeEventListener('resize', resizeCanvas);
                }
            })["HackerGridBackground.useEffect"];
        }
    }["HackerGridBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]",
        style: {
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 40, 0, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%)',
            opacity: 0.4
        }
    }, void 0, false, {
        fileName: "[project]/src/components/HackerGridBackground.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
};
_s(HackerGridBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = HackerGridBackground;
const __TURBOPACK__default__export__ = HackerGridBackground;
var _c;
__turbopack_context__.k.register(_c, "HackerGridBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/CircuitBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const CircuitBackground = ()=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircuitBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            const resizeCanvas = {
                "CircuitBackground.useEffect.resizeCanvas": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["CircuitBackground.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Circuit nodes
            const nodes = [];
            const nodeCount = 50;
            // Initialize nodes
            for(let i = 0; i < nodeCount; i++){
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    connections: [],
                    pulse: Math.random() * Math.PI * 2
                });
            }
            // Create connections between nearby nodes
            nodes.forEach({
                "CircuitBackground.useEffect": (node, i)=>{
                    nodes.forEach({
                        "CircuitBackground.useEffect": (otherNode, j)=>{
                            if (i !== j) {
                                const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2));
                                if (distance < 150 && node.connections.length < 3) {
                                    node.connections.push(j);
                                }
                            }
                        }
                    }["CircuitBackground.useEffect"]);
                }
            }["CircuitBackground.useEffect"]);
            let time = 0;
            const draw = {
                "CircuitBackground.useEffect.draw": ()=>{
                    // Clear canvas
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    time += 0.02;
                    // Draw connections
                    ctx.lineWidth = 1;
                    nodes.forEach({
                        "CircuitBackground.useEffect.draw": (node)=>{
                            node.connections.forEach({
                                "CircuitBackground.useEffect.draw": (connectionIndex)=>{
                                    const connectedNode = nodes[connectionIndex];
                                    const pulseIntensity = (Math.sin(time + node.pulse) + 1) / 2;
                                    const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y);
                                    gradient.addColorStop(0, `rgba(0, 255, 255, ${pulseIntensity * 0.3})`);
                                    gradient.addColorStop(0.5, `rgba(0, 255, 0, ${pulseIntensity * 0.6})`);
                                    gradient.addColorStop(1, `rgba(0, 255, 255, ${pulseIntensity * 0.3})`);
                                    ctx.strokeStyle = gradient;
                                    ctx.beginPath();
                                    ctx.moveTo(node.x, node.y);
                                    ctx.lineTo(connectedNode.x, connectedNode.y);
                                    ctx.stroke();
                                }
                            }["CircuitBackground.useEffect.draw"]);
                        }
                    }["CircuitBackground.useEffect.draw"]);
                    // Draw nodes
                    nodes.forEach({
                        "CircuitBackground.useEffect.draw": (node)=>{
                            const pulseSize = 2 + Math.sin(time + node.pulse) * 1;
                            const pulseAlpha = (Math.sin(time + node.pulse) + 1) / 2;
                            // Outer glow
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, pulseSize * 2, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(0, 255, 255, ${pulseAlpha * 0.2})`;
                            ctx.fill();
                            // Inner core
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(0, 255, 0, ${0.8 + pulseAlpha * 0.2})`;
                            ctx.fill();
                        }
                    }["CircuitBackground.useEffect.draw"]);
                    // Data packets moving along connections
                    if (Math.random() > 0.95) {
                        nodes.forEach({
                            "CircuitBackground.useEffect.draw": (node)=>{
                                if (node.connections.length > 0) {
                                    const randomConnection = node.connections[Math.floor(Math.random() * node.connections.length)];
                                    const targetNode = nodes[randomConnection];
                                    // Draw moving packet
                                    const progress = time * 2 % 1;
                                    const packetX = node.x + (targetNode.x - node.x) * progress;
                                    const packetY = node.y + (targetNode.y - node.y) * progress;
                                    ctx.beginPath();
                                    ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
                                    ctx.fillStyle = `rgba(255, 255, 0, ${1 - progress})`;
                                    ctx.fill();
                                }
                            }
                        }["CircuitBackground.useEffect.draw"]);
                    }
                }
            }["CircuitBackground.useEffect.draw"];
            const interval = setInterval(draw, 16);
            return ({
                "CircuitBackground.useEffect": ()=>{
                    clearInterval(interval);
                    window.removeEventListener('resize', resizeCanvas);
                }
            })["CircuitBackground.useEffect"];
        }
    }["CircuitBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]",
        style: {
            background: 'linear-gradient(45deg, rgba(0, 0, 20, 0.9) 0%, rgba(0, 20, 0, 0.8) 50%, rgba(0, 0, 20, 0.9) 100%)',
            opacity: 0.6
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CircuitBackground.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
};
_s(CircuitBackground, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CircuitBackground;
const __TURBOPACK__default__export__ = CircuitBackground;
var _c;
__turbopack_context__.k.register(_c, "CircuitBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/BackgroundSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HackerGridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HackerGridBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CircuitBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CircuitBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const BackgroundSwitcher = ()=>{
    _s();
    const [backgroundType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('matrix'); // Default to matrix
    const renderBackground = ()=>{
        switch(backgroundType){
            case 'matrix':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/BackgroundSwitcher.tsx",
                    lineNumber: 16,
                    columnNumber: 16
                }, this);
            case 'grid':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HackerGridBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/BackgroundSwitcher.tsx",
                    lineNumber: 18,
                    columnNumber: 16
                }, this);
            case 'circuit':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CircuitBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/BackgroundSwitcher.tsx",
                    lineNumber: 20,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/BackgroundSwitcher.tsx",
                    lineNumber: 22,
                    columnNumber: 16
                }, this);
        }
    };
    return renderBackground();
};
_s(BackgroundSwitcher, "gQI+Hkox2BeZwlqbUKbPy+JMDdk=");
_c = BackgroundSwitcher;
const __TURBOPACK__default__export__ = BackgroundSwitcher;
var _c;
__turbopack_context__.k.register(_c, "BackgroundSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_77a103d0._.js.map