/**
 * utility functions for common operations
 */

"use strict";

const utils = {
    /**
     * Find and return a Canvas element given an ID
     * @param {string} id
     */
    getCanvas(id) {
        const canvas = document.getElementById(id);
        if (!canvas) {
            alert(`Cannot find the canvas with id ${id} on this page.`);
            return null;
        }
        return canvas;
    },

    /**
     * Given the canvas, return the webGL 2 context.
     * @param {} canvas
     * @returns
     */
    getWebGLContext(canvas) {
        // Get the WebGL2 context
        const gl = canvas.getContext("webgl2");
        if (gl) {
            return gl;
        } else {
            alert(`Could not initialise WebGL2.`);
        }
    },

    loadJSON(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        reject(`HTTP error! status: ${response.status}`);
                    } else {
                        return response.json();
                    }
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    },

    
};
