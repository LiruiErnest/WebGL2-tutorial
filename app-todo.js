const chapters = {
    basicChapters: [
        {
            Title: "Canvas and WebGL Context",
            Intro: "A simple program that opens a webgl canvas and initialize webgl graphics context.",
            ThumbnailLink: "./public/images/thumbnails/1-canvas.png",
            DemoLink: "./ch01-open-canvas.html",
            CodeLink: "",
        },
        {
            Title: "Simple square",
            Intro: "Draw a square composed of two triangles using Array Buffer Object (VBO) in a default color (red).",
            ThumbnailLink: "./public/images/thumbnails/2-simple-square.png",
            DemoLink: "./ch02-simple-square.html",
            CodeLink: "",
        },
        {
            Title: "WebGL drawing modes",
            Intro: "In addition to triangles, WebGL supports various other drawing modes. This demo explains the drawing modes supported by WebGL.",
            ThumbnailLink: "./public/images/thumbnails/3-drawing-modes.png",
            DemoLink: "./ch03-rendering-modes.html",
            CodeLink: "",
        },
        {
            Title: "Colored square",
            Intro: "Add an additional color VBO to the shader. Notice how fragment colors are interpolated from the triangle vertices.",
            ThumbnailLink: "./public/images/thumbnails/4-color-square.png",
            DemoLink: "./ch04-color-square.html",
            CodeLink: "",
        },
        {
            Title: "Color-interleaved square",
            Intro: "Set an interleaved position/color into a single VBO; and then assign the positions/colors to two different attribute arrays.",
            ThumbnailLink: "./public/images/thumbnails/5-color-interleaved.png",
            DemoLink: "./ch05-color-interleaved.html",
            CodeLink: "",
        },
        {
            Title: "Drawing objects with different shaders",
            Intro: "This program demonstrates how to render multiple objects using different shaders. Notice how to switch shaders. This program also motivates the usage of VAO.",
            ThumbnailLink: "./public/images/thumbnails/6-multiple-shaders.png",
            DemoLink: "./ch06-multiple-shaders.html",
            CodeLink: "",
        },
        {
            Title: "Simple square using VAO (Vertex array object)",
            Intro: "This program demonstrates how to use Vertex Array Objects (VAOs) in WebGL 2, thereby optimizing the code structure and accelerating program rendering.",
            ThumbnailLink: "./public/images/thumbnails/2-simple-square.png",
            DemoLink: "./ch07-simple-square-VAO.html",
            CodeLink: "",
        },
        {
            Title: "Simple square using IBO (Index buffer object)",
            Intro: "Show you how to draw triangles using an element array VBO to index triangle vertices.",
            ThumbnailLink: "./public/images/thumbnails/8-simple-square-IBO.png",
            DemoLink: "./ch08-simple-square-IBO.html",
            CodeLink: "",
        },
        {
            Title: "Interactive square",
            Intro: "Rendering a square and allow using 'w', 's', 'a', 'd' to move the square",
            ThumbnailLink: "./public/images/thumbnails/9-interactive-square.png",
            DemoLink: "./ch09-interactive-square.html",
            CodeLink: "",
        },
    ],
    transformationChapters: [
        {
            Title: "Viewport",
            Intro: "Display the same 2 triangles over 9 different viewports; allow change background color",
            ThumbnailLink: "./public/images/thumbnails/10-viewport.png",
            DemoLink: "./ch10-viewport.html",
            CodeLink: "",
        },
        {
            Title: "Simple transform",
            Intro: "Simple transformation of 2D triangles using glm (left mouse click and drag to rotate)",
            ThumbnailLink: "./public/images/thumbnails/11-simple-transform-rotation.png",
            DemoLink: "./ch11-simple-transform-rotation.html",
            CodeLink: "",
        },
        // {
        //     Title: "Simple transform (translation)",
        //     Intro: "",
        //     ThumbnailLink: "",
        //     DemoLink: "",
        //     CodeLink: "",
        // },
        // {
        //     Title: "Simple transform (scaling)",
        //     Intro: "",
        //     ThumbnailLink: "",
        //     DemoLink: "",
        //     CodeLink: "",
        // },
        {
            Title: "Multi-objects transform",
            Intro: "Demonstrate how to apply different transformations to different objects.",
            ThumbnailLink: "./public/images/thumbnails/12-multi-obj-transform.png",
            DemoLink: "./ch12-multi-obj-transform.html",
            CodeLink: "",
        },
        {
            Title: "Hierarchical transform",
            Intro: "Demonstrate how hierarchical transformation can be constructed for three square.",
            ThumbnailLink: "./public/images/thumbnails/13-hierarchical-transform.png",
            DemoLink: "./ch13-hierarchical-transform.html",
            CodeLink: "",
        },
        {
            Title: "3D cube",
            Intro: "The first 3D cube drawing program where you will learn how to set up a camera and needed transformation matrices",
            ThumbnailLink: "./public/images/thumbnails/14-3D-cube.png",
            DemoLink: "./ch14-3D-cube.html",
            CodeLink: "",
        },
        // {
        //     Title: "8-transform-ortho2D",
        //     Intro: "",
        //     ThumbnailLink: "",
        //     DemoLink: "",
        //     CodeLink: "",
        // },
        // {
        //     Title: "Animation",
        //     Intro: "",
        //     ThumbnailLink: "./public/images/thumbnails/14-3D-cube.png",
        //     DemoLink: "./ch15-animation.html",
        //     CodeLink: "",
        // }, 
    ],
    lightsChapters: [
        {
            Title: "Phong lighting with Goraud-shading",
            Intro: "Demonstrate how to implement the Phong reflection model using Goraud-shading.",
            ThumbnailLink: "./public/images/thumbnails/16-goraud-shading.png",
            DemoLink: "./ch16-goraud-shading.html",
            CodeLink: "",
        },
        {
            Title: "Phong lighting with Phong-shading",
            Intro: "Demonstrate how to implement the Phong reflection model using Phong-shading.",
            ThumbnailLink: "./public/images/thumbnails/17-phong-shading.png",
            DemoLink: "./ch17-phong-shading.html",
            CodeLink: "",
        }
    ],
    textureChapters: [
        {
            Title: "Simple Texture",
            Intro: "This shows you how to perform 2D texture mapping. make sure you have downloaded the file earth.png. Also, you need to disable the browser restriction of reading local files (browser specific).",
            ThumbnailLink: "./public/images/thumbnails/18-simple-texture.png",
            DemoLink: "./ch18-simple-texture.html",
            CodeLink: "",
        },
        {
            Title: "Texture Teapot",
            Intro: "A texture mapped Utah teapot in Json format.",
            ThumbnailLink: "./public/images/thumbnails/19-texture-teapot.png",
            DemoLink: "./ch19-texture-teapot.html",
            CodeLink: "",
        },
        {
            Title: "Cubemap",
            Intro: "A simple cubemap example.",
            ThumbnailLink: "./public/images/thumbnails/20-cubemap.png",
            DemoLink: "./ch20-cubemap.html",
            CodeLink: "",
        },
        {
            Title: "Environment map",
            Intro: "Environment cube map example.",
            ThumbnailLink: "./public/images/thumbnails/21-environment-map.png",
            DemoLink: "./ch21-environment-map.html",
            CodeLink: "",
        },
        
    ],
    advancedChapters: [
        {
            Title: "Loading JSON Models",
            Intro: "A 3D rendering of Utah teapot in Json format.",
            ThumbnailLink: "./public/images/thumbnails/22-load-json-model.png",
            DemoLink: "./ch22-load-json-model.html",
            CodeLink: "",
        },
        {
            Title: "Render to a texture (using FBO)",
            Intro: "A frame buffer object example",
            ThumbnailLink: "./public/images/thumbnails/23-FBO.png",
            DemoLink: "./ch23-teapot-FBO.html",
            CodeLink: "",
        },
        
        
    ],
};

const init = () => {
    ["container-basics", "container-transformation", "container-lights", "container-texture", "container-advanced"].forEach((container) => {
        let chapterName;
        switch (container) {
            case "container-basics": {
                chapterName = "basicChapters";
                break;
            }
            case "container-transformation": {
                chapterName = "transformationChapters";
                break;
            }
            case "container-lights": {
                chapterName = "lightsChapters";
                break;
            }
            case "container-texture": {
                chapterName = "textureChapters";
                break;
            }
            case "container-advanced": {
                chapterName = "advancedChapters";
                break;
            }
        }

        chapters[chapterName].forEach((cell) => {
            let demoDiv = document.createElement("div");
            demoDiv.className = "col-md-4";
            demoDiv.innerHTML = `
                <div class="card">
                    <div class="img-box">
                        <a href="${cell.DemoLink}" target="_blank">
                            <img class="demo-img" src="${cell.ThumbnailLink}" alt="...">
                        </a>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${cell.Title}</h5>
                        <p class="card-text">${cell.Intro}</p>
                        <a href="${cell.DemoLink}" target="_blank" class="btn btn-outline-secondary btn-sm">Demo</a>
                    </div>
                </div>
                
            `;
            document.getElementById(container).appendChild(demoDiv);
        });
    });
};

window.onload = init;


