const SEGMENTED_CONTROL_BASE_SELECTOR = ".ios13-segmented-control";
const SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR =
    ".ios13-segmented-control .option input";
const SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR =
    ".ios13-segmented-control .selection";

    document.addEventListener("DOMContentLoaded", setup);

function setup() {
    forEachElement(SEGMENTED_CONTROL_BASE_SELECTOR, (elem) => {
        elem.addEventListener("change", updatePillPosition);
    });
    window.addEventListener("resize", updatePillPosition); // Prevent pill from detaching from element when window resized. Becuase this is rare I haven't bothered with throttling the event
}

function updatePillPosition() {
    forEachElement(
        SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR,
        (elem, index) => {
            if (elem.checked) moveBackgroundPillToElement(elem, index);
        }
    );
}

function moveBackgroundPillToElement(elem, index) {
    console.log(elem.offsetWidth * index);
    document.querySelector(
        SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR
    ).style.transform = "translateX(" + elem.offsetWidth * index + "px)";
}

function forEachElement(className, fn) {
    Array.from(document.querySelectorAll(className)).forEach(fn);
}