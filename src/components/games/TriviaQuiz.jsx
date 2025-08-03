import { useState } from 'react'
import Confetti from '../Confetti'

function TriviaQuiz({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const questions = [
    {
      question: "What's our favorite thing to do together?",
      options: [
        "Watch movies and eat popcorn",
        "Go shopping",
        "Take silly selfies",
        "All of the above!"
      ],
      correct: 3,
      explanation: "We love doing everything together! But especially taking silly selfies! 😄"
    },
    {
      question: "What's the most important thing about being sisters?",
      options: [
        "Sharing clothes",
        "Having each other's backs",
        "Fighting over the remote",
        "Eating the last cookie"
      ],
      correct: 1,
      explanation: "We always have each other's backs, no matter what! 💪"
    },
    {
      question: "What's our secret sister code?",
      options: [
        "Pinkie promise",
        "Sister hug",
        "Secret handshake",
        "All of the above!"
      ],
      correct: 3,
      explanation: "We have so many special ways to show our love! 💕"
    },
    {
      question: "What's the best part about having a sister?",
      options: [
        "Built-in best friend",
        "Someone to share secrets with",
        "Unconditional love",
        "All of the above!"
      ],
      correct: 3,
      explanation: "You're my built-in best friend, secret keeper, and source of unconditional love! 💖"
    },
    {
      question: "What's our favorite memory together?",
      options: [
        "That time we laughed until we cried",
        "Our first sleepover",
        "The day we became sisters",
        "Every single moment!"
      ],
      correct: 3,
      explanation: "Every moment with you is my favorite memory! ✨"
    }
  ]

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 2000)
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return "Perfect! You know everything about us! 💕"
    if (percentage >= 80) return "Amazing! You really know your sister! ✨"
    if (percentage >= 60) return "Great job! You know us pretty well! 😊"
    return "Good try! We'll make more memories together! 💝"
  }

  if (showResult) {
    return (
      <div className="text-center space-y-8">
        <div className="card max-w-2xl mx-auto">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-3xl font-handwriting text-gray-800 mb-4">
            Quiz Complete!
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            You got {score} out of {questions.length} questions correct!
          </p>
          <p className="text-lg text-gray-700 mb-6">
            {getScoreMessage()}
          </p>
          <div className="space-y-3">
            <button onClick={handleRestart} className="btn-primary">
              Play Again! 🎯
            </button>
            <button onClick={onBack} className="btn-secondary">
              Back to Games
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="text-center space-y-8">
      {/* Progress */}
      <div className="card max-w-md mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-sm text-gray-600">Score: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-pink-200 to-rose-200 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="card max-w-2xl mx-auto">
        <h2 className="text-2xl font-handwriting text-gray-800 mb-6">
          {currentQ.question}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                selectedAnswer === index
                  ? index === currentQ.correct
                    ? 'bg-green-100 border-2 border-green-500 text-green-800'
                    : 'bg-red-100 border-2 border-red-500 text-red-800'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              } ${selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {selectedAnswer !== null && (
          <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
            <p className="text-gray-700 italic">
              💝 {currentQ.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {selectedAnswer !== null && (
          <button
            onClick={handleNextQuestion}
            className="btn-primary mt-6"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>

      {showConfetti && <Confetti />}
    </div>
  )
}

export default TriviaQuiz 