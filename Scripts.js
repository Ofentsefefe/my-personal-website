document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.querySelector('.typing');
    const textToType = 'student of Information Systems'; // The text you want to appear

    let index = 0;
    function typeText() {
        if (index < textToType.length) {
            typingElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 100); // Adjust typing speed here (100ms)
        }
    }

    typeText(); // Start the typing effect
});
function showProjectInfo(projectId) {
    const projectInfo = document.getElementById(projectId);

    // Toggle visibility
    if (projectInfo.classList.contains('hidden')) {
        projectInfo.classList.remove('hidden');
    } else {
        projectInfo.classList.add('hidden');
    }
}
function showProjectInfo(projectId) {
    const projectInfo = document.getElementById(projectId);

    // Check if the project info is hidden or visible and toggle the display
    if (projectInfo.classList.contains('hidden')) {
        projectInfo.classList.remove('hidden');
        projectInfo.style.display = 'block'; // Show content
    } else {
        projectInfo.classList.add('hidden');
        projectInfo.style.display = 'none'; // Hide content
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const sentences = [
        "an aspiring software developer.",
        "a system analyst.",
        "a project manager.",
        "a creative problem solver.",
        "a lifelong learner."
    ];

    const dynamicTextElement = document.getElementById("dynamic-text");
    let sentenceIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenSentences = 1500;

    function typeSentence() {
        const currentSentence = sentences[sentenceIndex];

        if (isDeleting) {
            charIndex--;
            dynamicTextElement.textContent = currentSentence.substring(0, charIndex);
        } else {
            charIndex++;
            dynamicTextElement.textContent = currentSentence.substring(0, charIndex);
        }

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentSentence.length) {
            speed = delayBetweenSentences;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
        }

        setTimeout(typeSentence, speed);
    }

    typeSentence();
});
