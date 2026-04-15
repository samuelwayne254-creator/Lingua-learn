// LinguaLearn - Language Learning App
// Complete application logic with image handling

const app = {
    // State
    currentLanguage: null,
    currentLesson: null,
    currentQuiz: null,
    currentFlashcardIndex: 0,
    quizAnswers: [],
    userProgress: {
        totalXP: 0,
        streak: 0,
        lastActivityDate: null,
        completedLessons: [],
        quizScores: {},
        achievements: []
    },

    // Initialize app
    init() {
        this.loadProgress();
        this.setupEventListeners();
        this.renderHome();
    },

    // ==================== Navigation ====================
    navigateTo(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        // Show selected page
        const pageElement = document.getElementById(`page-${page}`);
        if (pageElement) {
            pageElement.classList.add('active');
            window.scrollTo(0, 0);
        }

        // Render page content
        switch(page) {
            case 'home':
                this.renderHome();
                break;
            case 'languages':
                this.renderLanguages();
                break;
            case 'progress':
                this.renderProgress();
                break;
        }
    },

    // ==================== Home Page ====================
    renderHome() {
        // Home page is static, just update nav
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector('.nav-link').classList.add('active');
    },

    // ==================== Languages Page ====================
    renderLanguages() {
        const container = document.getElementById('language-cards-container');
        container.innerHTML = '';

        LANGUAGES.forEach(lang => {
            const card = document.createElement('div');
            card.className = 'language-card';
            card.innerHTML = `
                <div class="language-flag">${lang.flag}</div>
                <h3 class="language-name">${lang.name}</h3>
                <p class="language-native">${lang.nativeName}</p>
                <p class="language-description">${lang.description}</p>
                <div class="language-stats">
                    <div class="language-stat">
                        <div class="language-stat-value">${lang.speakers}</div>
                        <div class="language-stat-label">speakers</div>
                    </div>
                    <div class="language-stat">
                        <div class="language-stat-value">${lang.difficulty}</div>
                        <div class="language-stat-label">level</div>
                    </div>
                </div>
                <div style="margin-top: 1.5rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                    <button class="btn btn-secondary" onclick="app.selectLesson('${lang.id}')">📚 Lessons</button>
                    <button class="btn btn-accent" onclick="app.selectQuiz('${lang.id}')">🎯 Quiz</button>
                </div>
            `;
            container.appendChild(card);
        });

        // Update nav
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.nav-link')[1].classList.add('active');
    },

    // ==================== Lesson Selection ====================
    selectLanguage(langId) {
        this.currentLanguage = langId;
        this.selectLesson(langId);
    },

    selectLesson(langId) {
        this.currentLanguage = langId;
        const lang = LANGUAGES.find(l => l.id === langId);
        const lessons = LESSONS[langId] || [];

        const header = document.getElementById('lesson-header');
        const content = document.getElementById('lesson-content');

        header.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                <div style="font-size: 3rem;">${lang.flag}</div>
                <div>
                    <h2>${lang.name} - Lessons</h2>
                    <p style="color: #888;">${lang.description}</p>
                </div>
            </div>
            <div style="border: 2.5px solid #111; border-radius: 0.65rem; padding: 1.5rem; background: url('${lang.heroImage}') center/cover; min-height: 300px; display: flex; align-items: flex-end; box-shadow: 6px 6px 0 #111;">
                <div style="background: rgba(255, 251, 240, 0.95); padding: 1rem; border-radius: 0.65rem; border: 2.5px solid #111; width: 100%;">
                    <h3 style="margin-bottom: 0.5rem;">Learn ${lang.name}</h3>
                    <p>Master vocabulary, phrases, and cultural insights</p>
                </div>
            </div>
        `;

        content.innerHTML = `
            <div class="grid-3" style="margin-top: 2rem;">
                ${lessons.map((lesson, idx) => `
                    <div class="lesson-card" onclick="app.openLesson('${langId}', ${idx})">
                        <div class="lesson-icon">${lesson.icon}</div>
                        <h4 class="lesson-title">${lesson.title}</h4>
                        <p class="lesson-description">${lesson.description}</p>
                        <div class="lesson-meta">
                            <span class="lesson-duration">⏱️ ${lesson.duration} min</span>
                            <span class="lesson-xp">⭐ ${lesson.xp} XP</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        this.navigateTo('lessons');
    },

    // ==================== Open Lesson ====================
    openLesson(langId, lessonIdx) {
        this.currentLanguage = langId;
        this.currentLesson = lessonIdx;
        this.currentFlashcardIndex = 0;

        const lessons = LESSONS[langId];
        const lesson = lessons[lessonIdx];
        const lang = LANGUAGES.find(l => l.id === langId);

        const content = document.getElementById('lesson-content');
        content.innerHTML = `
            <div style="margin-top: 2rem;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    <div style="font-size: 2rem;">${lesson.icon}</div>
                    <div>
                        <h3>${lesson.title}</h3>
                        <p style="color: #888;">${lesson.description}</p>
                    </div>
                </div>

                <div style="margin-bottom: 2rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>Vocabulary Progress</span>
                        <span id="vocab-progress">0 / ${lesson.vocabulary.length}</span>
                    </div>
                    <div class="quiz-progress-bar">
                        <div class="quiz-progress-fill" id="vocab-progress-bar" style="width: 0%"></div>
                    </div>
                </div>

                <div id="flashcard-container"></div>

                <div style="display: flex; gap: 1rem; margin-top: 2rem; justify-content: center;">
                    <button class="btn btn-secondary" onclick="app.previousFlashcard()">← Previous</button>
                    <button class="btn btn-primary" onclick="app.nextFlashcard()">Next →</button>
                </div>

                <button class="btn btn-accent" style="width: 100%; margin-top: 2rem;" onclick="app.selectQuiz('${langId}')">Take Quiz 🎯</button>
            </div>
        `;

        this.renderFlashcard();
    },

    // ==================== Flashcard Logic ====================
    renderFlashcard() {
        const lesson = LESSONS[this.currentLanguage][this.currentLesson];
        const vocab = lesson.vocabulary[this.currentFlashcardIndex];
        const container = document.getElementById('flashcard-container');

        const progress = this.currentFlashcardIndex + 1;
        document.getElementById('vocab-progress').textContent = `${progress} / ${lesson.vocabulary.length}`;
        document.getElementById('vocab-progress-bar').style.width = `${(progress / lesson.vocabulary.length) * 100}%`;

        container.innerHTML = `
            <div class="flashcard" id="flashcard" onclick="app.toggleFlashcard()">
                <div class="flashcard-front">
                    <div class="flashcard-word">${vocab.word}</div>
                    <div class="flashcard-pronunciation">${vocab.pronunciation}</div>
                    <div class="flashcard-hint">Click to reveal translation</div>
                </div>
                <div class="flashcard-back">
                    <div class="flashcard-translation">${vocab.translation}</div>
                    <div class="flashcard-example">"${vocab.example}"</div>
                </div>
            </div>
        `;
    },

    toggleFlashcard() {
        const card = document.getElementById('flashcard');
        card.classList.toggle('flipped');
    },

    nextFlashcard() {
        const lesson = LESSONS[this.currentLanguage][this.currentLesson];
        if (this.currentFlashcardIndex < lesson.vocabulary.length - 1) {
            this.currentFlashcardIndex++;
            this.renderFlashcard();
        }
    },

    previousFlashcard() {
        if (this.currentFlashcardIndex > 0) {
            this.currentFlashcardIndex--;
            this.renderFlashcard();
        }
    },

    // ==================== Quiz Logic ====================
    selectQuiz(langId) {
        this.currentLanguage = langId;
        this.currentQuiz = 0;
        this.quizAnswers = [];

        const lang = LANGUAGES.find(l => l.id === langId);
        const questions = QUIZ_QUESTIONS[langId] || [];

        const content = document.getElementById('quiz-content');
        content.innerHTML = `
            <div style="margin-top: 2rem;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    <div style="font-size: 2rem;">🎯</div>
                    <div>
                        <h3>${lang.name} - Quiz</h3>
                        <p style="color: #888;">Test your knowledge and earn XP</p>
                    </div>
                </div>

                <div id="quiz-container"></div>
            </div>
        `;

        this.renderQuizQuestion();
    },

    renderQuizQuestion() {
        const questions = QUIZ_QUESTIONS[this.currentLanguage];
        const question = questions[this.currentQuiz];
        const container = document.getElementById('quiz-container');

        const progress = this.currentQuiz + 1;
        const totalQuestions = questions.length;

        container.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span>Question ${progress} of ${totalQuestions}</span>
                        <span id="quiz-score">Score: 0 XP</span>
                    </div>
                    <div class="quiz-progress-bar">
                        <div class="quiz-progress-fill" style="width: ${(progress / totalQuestions) * 100}%"></div>
                    </div>
                </div>

                <div class="quiz-question">
                    <div class="quiz-question-text">${question.question}</div>
                    <div class="quiz-options" id="quiz-options"></div>
                </div>

                <div id="quiz-feedback-container"></div>
            </div>
        `;

        const optionsContainer = document.getElementById('quiz-options');
        question.options.forEach((option, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = option;
            btn.onclick = () => this.answerQuiz(idx, question.correct);
            optionsContainer.appendChild(btn);
        });

        this.updateQuizScore();
    },

    answerQuiz(selectedIdx, correctIdx) {
        const questions = QUIZ_QUESTIONS[this.currentLanguage];
        const question = questions[this.currentQuiz];
        const feedbackContainer = document.getElementById('quiz-feedback-container');
        const optionsContainer = document.getElementById('quiz-options');

        // Disable all options
        document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.add('disabled'));

        // Mark selected and correct answers
        const options = document.querySelectorAll('.quiz-option');
        options[selectedIdx].classList.add(selectedIdx === correctIdx ? 'correct' : 'incorrect');
        if (selectedIdx !== correctIdx) {
            options[correctIdx].classList.add('correct');
        }

        // Record answer
        this.quizAnswers.push({
            question: question.question,
            selected: question.options[selectedIdx],
            correct: question.options[correctIdx],
            isCorrect: selectedIdx === correctIdx
        });

        // Show feedback
        const isCorrect = selectedIdx === correctIdx;
        feedbackContainer.innerHTML = `
            <div class="quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="quiz-feedback-title">${isCorrect ? '✅ Correct!' : '❌ Incorrect'}</div>
                <div class="quiz-feedback-text">${question.explanation}</div>
            </div>
        `;

        // Add XP if correct
        if (isCorrect) {
            this.userProgress.totalXP += 10;
        }

        // Show next button
        setTimeout(() => {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'btn btn-primary';
            nextBtn.style.width = '100%';
            nextBtn.style.marginTop = '1.5rem';
            
            if (this.currentQuiz < questions.length - 1) {
                nextBtn.textContent = 'Next Question →';
                nextBtn.onclick = () => {
                    this.currentQuiz++;
                    this.renderQuizQuestion();
                };
            } else {
                nextBtn.textContent = 'Finish Quiz 🎉';
                nextBtn.onclick = () => this.finishQuiz();
            }
            
            feedbackContainer.appendChild(nextBtn);
        }, 500);
    },

    finishQuiz() {
        const correctAnswers = this.quizAnswers.filter(a => a.isCorrect).length;
        const totalQuestions = this.quizAnswers.length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);

        this.userProgress.quizScores[this.currentLanguage] = {
            score: percentage,
            correct: correctAnswers,
            total: totalQuestions,
            date: new Date().toLocaleDateString()
        };

        this.updateStreak();
        this.checkAchievements();
        this.saveProgress();

        const container = document.getElementById('quiz-container');
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; border: 2.5px solid #111; border-radius: 0.65rem; background-color: #E8F8F5; box-shadow: 6px 6px 0 #111;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                <h3 style="margin-bottom: 1rem;">Quiz Complete!</h3>
                <div style="font-family: 'Space Mono', monospace; font-size: 2rem; font-weight: 800; color: #06D6A0; margin-bottom: 1rem;">
                    ${correctAnswers} / ${totalQuestions} Correct
                </div>
                <div style="font-size: 1.5rem; margin-bottom: 2rem;">
                    Score: ${percentage}%
                </div>
                <div style="font-size: 1.2rem; margin-bottom: 2rem; color: #06D6A0;">
                    +${correctAnswers * 10} XP Earned! 🌟
                </div>
                <button class="btn btn-primary" onclick="app.navigateTo('languages')" style="width: 100%;">Back to Languages</button>
            </div>
        `;
    },

    updateQuizScore() {
        const correctAnswers = this.quizAnswers.filter(a => a.isCorrect).length;
        document.getElementById('quiz-score').textContent = `Score: ${correctAnswers * 10} XP`;
    },

    // ==================== Progress Tracking ====================
    updateStreak() {
        const today = new Date().toLocaleDateString();
        const lastDate = this.userProgress.lastActivityDate;

        if (lastDate !== today) {
            const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();
            if (lastDate === yesterday) {
                this.userProgress.streak++;
            } else {
                this.userProgress.streak = 1;
            }
            this.userProgress.lastActivityDate = today;
        }
    },

    checkAchievements() {
        const achievements = [
            { id: 'first-quiz', name: 'First Quiz', icon: '🎯', condition: () => Object.keys(this.userProgress.quizScores).length >= 1 },
            { id: 'on-fire', name: 'On Fire', icon: '🔥', condition: () => this.userProgress.streak >= 3 },
            { id: 'high-scorer', name: 'High Scorer', icon: '⭐', condition: () => this.userProgress.totalXP >= 100 },
            { id: 'polyglot', name: 'Polyglot', icon: '🌍', condition: () => Object.keys(this.userProgress.quizScores).length >= 3 },
            { id: 'perfect', name: 'Perfect', icon: '💯', condition: () => Object.values(this.userProgress.quizScores).some(q => q.score === 100) },
            { id: 'xp-master', name: 'XP Master', icon: '👑', condition: () => this.userProgress.totalXP >= 500 },
            { id: 'bookworm', name: 'Bookworm', icon: '📚', condition: () => this.userProgress.completedLessons.length >= 5 },
            { id: 'explorer', name: 'Explorer', icon: '🗺️', condition: () => this.userProgress.completedLessons.length >= 10 }
        ];

        achievements.forEach(ach => {
            if (ach.condition() && !this.userProgress.achievements.includes(ach.id)) {
                this.userProgress.achievements.push(ach.id);
            }
        });
    },

    // ==================== Progress Page ====================
    renderProgress() {
        const container = document.getElementById('progress-content');

        const achievements = [
            { id: 'first-quiz', name: 'First Quiz', icon: '🎯' },
            { id: 'on-fire', name: 'On Fire', icon: '🔥' },
            { id: 'high-scorer', name: 'High Scorer', icon: '⭐' },
            { id: 'polyglot', name: 'Polyglot', icon: '🌍' },
            { id: 'perfect', name: 'Perfect', icon: '💯' },
            { id: 'xp-master', name: 'XP Master', icon: '👑' },
            { id: 'bookworm', name: 'Bookworm', icon: '📚' },
            { id: 'explorer', name: 'Explorer', icon: '🗺️' }
        ];

        let languageProgressHTML = '';
        LANGUAGES.forEach(lang => {
            const score = this.userProgress.quizScores[lang.id];
            const percentage = score ? score.score : 0;
            languageProgressHTML += `
                <div class="language-progress-item">
                    <div class="language-progress-header">
                        <span class="language-progress-name">${lang.flag} ${lang.name}</span>
                        <span class="language-progress-stats">${percentage}%</span>
                    </div>
                    <div class="language-progress-bar">
                        <div class="language-progress-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="progress-stats">
                <div class="stat-card">
                    <div class="stat-value">${this.userProgress.totalXP}</div>
                    <div class="stat-label">Total XP</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${this.userProgress.streak}</div>
                    <div class="stat-label">Day Streak</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${Object.keys(this.userProgress.quizScores).length}</div>
                    <div class="stat-label">Quizzes Taken</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${this.userProgress.achievements.length}</div>
                    <div class="stat-label">Achievements</div>
                </div>
            </div>

            <div class="achievements">
                <h3 class="achievements-title">Achievements Unlocked</h3>
                <div class="achievement-grid">
                    ${achievements.map(ach => `
                        <div class="achievement ${this.userProgress.achievements.includes(ach.id) ? '' : 'locked'}">
                            <div class="achievement-icon">${ach.icon}</div>
                            <div class="achievement-name">${ach.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="language-progress">
                <h3 style="margin-bottom: 1.5rem;">Language Progress</h3>
                ${languageProgressHTML}
            </div>
        `;

        // Update nav
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.nav-link')[2].classList.add('active');
    },

    // ==================== Storage ====================
    saveProgress() {
        localStorage.setItem('lingualearn-progress', JSON.stringify(this.userProgress));
    },

    loadProgress() {
        const saved = localStorage.getItem('lingualearn-progress');
        if (saved) {
            this.userProgress = JSON.parse(saved);
        }
    },

    // ==================== Event Listeners ====================
    setupEventListeners() {
        // Add any global event listeners here
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
