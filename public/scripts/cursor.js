function startCursor() {
    const cursor = document.querySelector('.cursor');
    const elements = document.querySelectorAll('h1, h2, p');
    const excludeElements = document.querySelectorAll('input, button')

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`
        cursor.style.top = `${e.pageY}px`
    })

    for (let element of elements) {
        handleHoverClass(element, cursor, "cursor-grow", false);
    }

    for (let excludeElement of excludeElements) {
        handleHoverClass(excludeElement, cursor, "invisible", true)
    }
}

function handleHoverClass(hoverElement, elementOrFunction, classOrFunction, instantTransition) {
    if (typeof elementOrFunction == 'function' && typeof classOrFunction == 'function') {
        applyFunctions(hoverElement, elementOrFunction, classOrFunction);
    } else if (elementOrFunction instanceof Element && typeof classOrFunction == 'string') {
        applyRemoveClasses(hoverElement, elementOrFunction, classOrFunction);
    } else {
        console.error("wrong parameter type");
    }

    function applyRemoveClasses(element, elementToStyle, className) {
        element.addEventListener('mouseover', () => {
            elementOrFunction.style.transition = instantTransition ? '0s' : null
            elementToStyle.classList.add(className)
        })
        element.addEventListener('mouseleave', () => {
            elementToStyle.classList.remove(className)
        })
    }

    function applyFunctions(element, overFunction, leaveFunction) {
        element.addEventListener('mouseover', overFunction)
        element.addEventListener('mouseleave', leaveFunction)
    }
}
