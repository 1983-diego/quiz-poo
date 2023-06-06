export class Ui {
    constructor() {

    }

    /**
     * 
     * @param {string} text 
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question')
        questionTitle.innerText = text
    }

    /**
     * 
     * @param {string[]} choices 
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = ''

        for (let i = 0; i < choices.length; i++) {
           const button = document.createElement('button')
           button.innerText = choices[i]
           button.className = 'button'
           button.addEventListener('click', () => callback(choices[i]))

           choicesContainer.append(button)
        }
    }

/**
 * 
 * @param {number} score 
 */
    showScores(score) {
        const quizEndHTML = `
        <h1>Result</h1>
        <h2>Your score: ${score}</h2>
        `

        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML
    }

    /**
     * 
     * @param {number} currentIndex 
     * @param {number} total 
     */
    showProgress(currentIndex, total) {
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
}