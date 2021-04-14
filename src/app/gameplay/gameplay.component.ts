import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceProvider } from 'src/providers/data-service/data-service';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.scss']
})
export class GameplayComponent implements OnInit {
  @Input() userData: any;
  @Input() mode: string;
  @Input() category: any;

  gameplayQuestionsShuffled = [];
  modeDisplayable: string;
  questionNumber = 1;
  gameplayQuestionsAnswered = [];
  submittedAnswer: number = undefined;
  isCorrect = undefined;
  questionsCorrect = 0;
  questionsIncorrect = 0;
  hasSubmitted = undefined;
  gameplayFinished = false;
  lengthOfTime: Subscription;
  correctAnswer = undefined;
  timeInSecondsToComplete: number = undefined;;

  constructor(public dataService: DataServiceProvider, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.mode == 'practice') {
      this.modeDisplayable = 'Practicing';
    } else {
      this.modeDisplayable = 'Evaluating';
    }

    this.createGameplayArray(this.category);
  }

  createGameplayArray(categoryNumber) {
    let gameplayQuestions = [];
    for(let i = 1; i < 12+1; i++) {
      // add values 1-12 to the array
      gameplayQuestions.push(i);
    }

    // shuffle the values so they're not in order
    this.gameplayQuestionsShuffled = this.shuffle(gameplayQuestions);
    this.startTimer();
  }

  shuffle(gamePlayQuestions) {
    // shuffle algorithm found via Stackoverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = gamePlayQuestions.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = gamePlayQuestions[currentIndex];
      gamePlayQuestions[currentIndex] = gamePlayQuestions[randomIndex];
      gamePlayQuestions[randomIndex] = temporaryValue;
    }
  
    return gamePlayQuestions;
  }

  startTimer() {
    this.lengthOfTime = timer(1000, 2000).subscribe(t => {
      // each tick 't' goes every second and will overwrite the data in timeInSecondsToComplete
      console.log('tick ' + t);
      this.timeInSecondsToComplete = t;
    });
  }

  getNextDisplayQuestion() {
    return this.category + " x " + this.getQuestion() + " = ";
  }

  getQuestion() {
    if (this.gameplayQuestionsShuffled.length > 0) {
      // we have questions in the array that still need to be displayed to the user.
      // the first digit in each question will be the category that was selected.
      return this.gameplayQuestionsShuffled[0];
    }
  }

  popOffQuestionAnswered() {
    if (this.gameplayQuestionsShuffled.length > 1) {
      return this.gameplayQuestionsShuffled.shift();
    } else {
      // question number has already been incremented.  decrement it so it's accurate
      this.questionNumber = this.questionNumber - 1;
      this.finish();
    }
  }

  submit() {
    // the user has just answered a question - verify their answer is correct or not
    // - and change out the button text
    var currentQuestion = this.getQuestion();

    // TODO undefined and/or invalid value checking
    this.correctAnswer = this.category * currentQuestion;
    if (this.correctAnswer == this.submittedAnswer)  {
      this.isCorrect = true;
      this.questionsCorrect = this.questionsCorrect + 1;
    } else {
      this.isCorrect = false;
      this.questionsIncorrect = this.questionsIncorrect + 1;
    }

    this.hasSubmitted = true;

    var questionData = this.category + " x " + currentQuestion + " = " + this.submittedAnswer; 
    this.gameplayQuestionsAnswered.push(questionData);
  }

  next() {
    // increment question number for UI
    // pop first off of this.gameplayQuestionsShuffled
    this.popOffQuestionAnswered();
    this.submittedAnswer = undefined;
    this.hasSubmitted = undefined;
    this.isCorrect = undefined;
    this.questionNumber = this.questionNumber + 1;
  }

  finish() {
    // we always start a timer in the background.  unsubscribe so the timer stops.
    // if in practice mode, make the data undefined in the JSON body.  For evaluation mode, it will be populated and sent.
    this.lengthOfTime.unsubscribe();
    if (this.mode == 'practice') {
      this.timeInSecondsToComplete = undefined;
    }

    let requestBody = {
      userId: this.userData._id,
      problemsAndAnswers: this.gameplayQuestionsAnswered,
      mode: this.mode,
      category: this.category,
      date: new Date().toString(),
      questionsAttempted: 12,
      questionsCorrect: this.questionsCorrect,
      lengthOfTime: this.timeInSecondsToComplete
    };

    this.snackBar.open('Saving...', '', {
      duration: 2000,
      panelClass: ['success']
    });
    this.dataService.doSubmitGameplay(requestBody);

    this.gameplayFinished = true;
  }

}
