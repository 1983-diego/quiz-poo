import { questions } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { Ui } from './models/UI.js'

/**
 * 
 * @param {Quiz} quiz 
 * @param {Ui} ui 
 */
const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score)
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice)
            renderPage(quiz, ui)
        })
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }
}

function main() {
    const quiz = new Quiz(questions)
    const ui = new Ui()

    renderPage(quiz, ui)
}

main()