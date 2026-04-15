# Lingua-learn
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title>LinguaLearn - Learn Foreign Languages</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <!-- Navigation -->
        <nav class="navbar">
            <div class="container">
                <div class="navbar-content">
                    <div class="navbar-brand">
                        <h1 class="navbar-title">🌍 LinguaLearn</h1>
                    </div>
                    <div class="navbar-menu">
                        <button class="nav-link active" onclick="app.navigateTo('home')">Home</button>
                        <button class="nav-link" onclick="app.navigateTo('languages')">Languages</button>
                        <button class="nav-link" onclick="app.navigateTo('progress')">Progress</button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main id="main-content" class="main-content">
            <!-- Home Page -->
            <section id="page-home" class="page active">
                <div class="hero">
                    <div class="container">
                        <div class="hero-content">
                            <div class="hero-text">
                                <h2 class="hero-title">Learn Languages the Fun Way</h2>
                                <p class="hero-subtitle">Master vocabulary, ace quizzes, and unlock achievements. Start your language journey today!</p>
                                <button class="btn btn-primary" onclick="app.navigateTo('languages')">Start Learning →</button>
                            </div>
                            <div class="hero-emoji">🎓</div>
                        </div>
                    </div>
                </div>

                <!-- Features Section -->
                <section class="features">
                    <div class="container">
                        <h3 class="section-title">Why LinguaLearn?</h3>
                        <div class="grid-3">
                            <div class="feature-card">
                                <div class="feature-icon">📚</div>
                                <h4>Interactive Lessons</h4>
                                <p>Learn through engaging flashcards and real-world examples</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🎯</div>
                                <h4>Instant Quizzes</h4>
                                <p>Test your knowledge with immediate feedback and explanations</p>
                            </div>
                            <div class="feature-card">
                                <div class="feature-icon">🏆</div>
                                <h4>Earn Achievements</h4>
                                <p>Unlock badges and track your progress with XP and streaks</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Languages Preview -->
                <section class="languages-preview">
                    <div class="container">
                        <h3 class="section-title">Available Languages</h3>
                        <div class="grid-3">
                            <div class="language-preview-card" onclick="app.selectLanguage('spanish')">
                                <div class="language-flag">🇪🇸</div>
                                <h4>Spanish</h4>
                                <p>500M+ speakers</p>
                                <button class="btn btn-small">Learn →</button>
                            </div>
                            <div class="language-preview-card" onclick="app.selectLanguage('french')">
                                <div class="language-flag">🇫🇷</div>
                                <h4>French</h4>
                                <p>280M+ speakers</p>
                                <button class="btn btn-small">Learn →</button>
                            </div>
                            <div class="language-preview-card" onclick="app.selectLanguage('japanese')">
                                <div class="language-flag">🇯🇵</div>
                                <h4>Japanese</h4>
                                <p>125M+ speakers</p>
                                <button class="btn btn-small">Learn →</button>
                            </div>
                            <div class="language-preview-card" onclick="app.selectLanguage('german')">
                                <div class="language-flag">🇩🇪</div>
                                <h4>German</h4>
                                <p>130M+ speakers</p>
                                <button class="btn btn-small">Learn →</button>
                            </div>
                            <div class="language-preview-card" onclick="app.selectLanguage('arabic')">
                                <div class="language-flag">🇸🇦</div>
                                <h4>Arabic</h4>
                                <p>422M+ speakers</p>
                                <button class="btn btn-small">Learn →</button>
                            </div>
                            <div class="language-preview-card" onclick="app.selectLanguage('chinese')">
                                <div class="language-flag">🇨🇳</div>
                                <h4>Chinese</h4>
                                <p>1B+ speakers</p>
                                <button class="btn btn-small">Learn →</button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- How It Works -->
                <section class="how-it-works">
                    <div class="container">
                        <h3 class="section-title">How It Works</h3>
                        <div class="steps">
                            <div class="step">
                                <div class="step-number">1</div>
                                <h4>Choose a Language</h4>
                                <p>Select from 6 languages and pick your starting level</p>
                            </div>
                            <div class="step">
                                <div class="step-number">2</div>
                                <h4>Learn Vocabulary</h4>
                                <p>Master words and phrases with interactive flashcards</p>
                            </div>
                            <div class="step">
                                <div class="step-number">3</div>
                                <h4>Take Quizzes</h4>
                                <p>Test your knowledge and earn XP for correct answers</p>
                            </div>
                            <div class="step">
                                <div class="step-number">4</div>
                                <h4>Track Progress</h4>
                                <p>Watch your stats grow and unlock achievements</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CTA Section -->
                <section class="cta-section">
                    <div class="container">
                        <div class="cta-content">
                            <h3>Ready to Start Learning?</h3>
                            <p>Join thousands of language learners worldwide</p>
                            <button class="btn btn-primary btn-large" onclick="app.navigateTo('languages')">Get Started Now →</button>
                        </div>
                    </div>
                </section>
            </section>

            <!-- Languages Page -->
            <section id="page-languages" class="page">
                <div class="container">
                    <h2 class="page-title">Choose Your Language</h2>
                    <div class="grid-2">
                        <div id="language-cards-container"></div>
                    </div>
                </div>
            </section>

            <!-- Lessons Page -->
            <section id="page-lessons" class="page">
                <div class="container">
                    <button class="btn btn-back" onclick="app.navigateTo('languages')">← Back to Languages</button>
                    <div id="lesson-header"></div>
                    <div id="lesson-content"></div>
                </div>
            </section>

            <!-- Quiz Page -->
            <section id="page-quiz" class="page">
                <div class="container">
                    <button class="btn btn-back" onclick="app.navigateTo('languages')">← Back to Languages</button>
                    <div id="quiz-content"></div>
                </div>
            </section>

            <!-- Progress Page -->
            <section id="page-progress" class="page">
                <div class="container">
                    <h2 class="page-title">Your Progress</h2>
                    <div id="progress-content"></div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <p>&copy; 2024 LinguaLearn. Learn languages, explore cultures.</p>
                    <div class="footer-links">
                        <a href="#" onclick="alert('Privacy Policy')">Privacy</a>
                        <a href="#" onclick="alert('Terms of Service')">Terms</a>
                        <a href="#" onclick="alert('Contact: hello@lingualearn.com')">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script src="data.js"></script>
    <script src="app.js"></script>
    /* LinguaLearn - Neo-Brutalist Language Learning Website */
/* Design System: Bold borders, hard shadows, saturated colors */

/* ==================== CSS Variables ==================== */
:root {
    /* Colors */
    --color-primary: #FFD93D;
    --color-secondary: #06D6A0;
    --color-accent: #A855F7;
    --color-success: #06D6A0;
    --color-danger: #FF6B6B;
    --color-black: #111;
    --color-white: #FFFBF0;
    --color-gray: #888;
    --color-gray-light: #F5F5F5;
    --color-gray-border: #DDD;

    /* Typography */
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'DM Sans', sans-serif;
    --font-mono: 'Space Mono', monospace;

    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;

    /* Border & Shadow */
    --border-width: 2.5px;
    --border-radius: 0.65rem;
    --shadow-sm: 3px 3px 0 var(--color-black);
    --shadow-md: 6px 6px 0 var(--color-black);
    --shadow-lg: 8px 8px 0 var(--color-black);

    /* Transitions */
    --transition-fast: 0.1s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.6s ease;
}

/* ==================== Reset & Base Styles ==================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-body);
    background-color: var(--color-white);
    color: var(--color-black);
    line-height: 1.6;
    overflow-x: hidden;
}

/* ==================== Container ==================== */
.container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--spacing-sm);
}

@media (min-width: 640px) {
    .container {
        padding: 0 var(--spacing-md);
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 0 var(--spacing-lg);
    }
}

/* ==================== Grid System ==================== */
.grid-1, .grid-2, .grid-3, .grid-6 {
    display: grid;
    gap: var(--spacing-md);
    margin: var(--spacing-lg) 0;
}

.grid-1 { grid-template-columns: 1fr; }

.grid-2 {
    grid-template-columns: 1fr;
}

.grid-3 {
    grid-template-columns: 1fr;
}

.grid-6 {
    grid-template-columns: 1fr;
}

@media (min-width: 640px) {
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-3 { grid-template-columns: repeat(2, 1fr); }
    .grid-6 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-6 { grid-template-columns: repeat(3, 1fr); }
}

/* ==================== Typography ==================== */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 800;
    line-height: 1.2;
}

h1 { font-size: 3rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 2rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
    font-size: 1rem;
    margin-bottom: var(--spacing-sm);
}

small {
    font-size: 0.9rem;
}

/* ==================== Buttons ==================== */
.btn {
    font-family: var(--font-display);
    font-weight: 700;
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-sm) var(--spacing-md);
    background-color: var(--color-white);
    color: var(--color-black);
    cursor: pointer;
    transition: all var(--transition-fast);
    box-shadow: var(--shadow-sm);
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
}

.btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-md);
}

.btn:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 var(--color-black);
}

.btn-primary {
    background-color: var(--color-primary);
    color: var(--color-black);
}

.btn-secondary {
    background-color: var(--color-secondary);
    color: var(--color-white);
}

.btn-accent {
    background-color: var(--color-accent);
    color: var(--color-white);
}

.btn-small {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.8rem;
}

.btn-large {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: 1.1rem;
}

.btn-back {
    background-color: var(--color-gray-light);
    margin-bottom: var(--spacing-lg);
}

/* ==================== Navigation ==================== */
.navbar {
    border-bottom: var(--border-width) solid var(--color-black);
    background-color: var(--color-white);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 4px 0 var(--color-black);
}

.navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md) 0;
}

.navbar-brand h1 {
    font-size: 1.8rem;
    margin: 0;
}

.navbar-menu {
    display: flex;
    gap: var(--spacing-md);
}

.nav-link {
    font-family: var(--font-display);
    font-weight: 700;
    border: none;
    background-color: transparent;
    color: var(--color-black);
    cursor: pointer;
    font-size: 1rem;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-bottom: 3px solid transparent;
    transition: all var(--transition-normal);
}

.nav-link:hover {
    border-bottom-color: var(--color-primary);
}

.nav-link.active {
    border-bottom-color: var(--color-primary);
    color: var(--color-primary);
}

/* ==================== Hero Section ==================== */
.hero {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    padding: var(--spacing-2xl) 0;
    margin-bottom: var(--spacing-2xl);
    border-bottom: var(--border-width) solid var(--color-black);
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    align-items: center;
}

@media (min-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr 1fr;
    }
}

.hero-text h2 {
    margin-bottom: var(--spacing-md);
    color: var(--color-black);
}

.hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-lg);
    color: var(--color-black);
}

.hero-emoji {
    font-size: 6rem;
    text-align: center;
}

/* ==================== Cards ==================== */
.brutalist-card {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
}

.brutalist-card:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--shadow-lg);
}

/* ==================== Feature Cards ==================== */
.feature-card {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: all var(--transition-normal);
}

.feature-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-lg);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
}

.feature-card h4 {
    margin-bottom: var(--spacing-sm);
}

/* ==================== Language Cards ==================== */
.language-card {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    cursor: pointer;
    transition: all var(--transition-normal);
    text-align: center;
}

.language-card:hover {
    transform: translate(-3px, -3px);
    box-shadow: var(--shadow-lg);
}

.language-card.selected {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-black);
}

.language-flag {
    font-size: 4rem;
    margin-bottom: var(--spacing-md);
}

.language-name {
    margin-bottom: var(--spacing-sm);
}

.language-native {
    font-size: 0.9rem;
    color: var(--color-gray);
    margin-bottom: var(--spacing-md);
}

.language-description {
    font-size: 0.95rem;
    margin-bottom: var(--spacing-md);
}

.language-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
    margin-top: var(--spacing-md);
}

.language-stat {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-sm);
    background-color: var(--color-gray-light);
}

.language-stat-value {
    font-family: var(--font-mono);
    font-size: 1.2rem;
    font-weight: 700;
}

.language-stat-label {
    font-size: 0.8rem;
    color: var(--color-gray);
}

/* ==================== Language Preview Cards ==================== */
.language-preview-card {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    text-align: center;
    cursor: pointer;
    transition: all var(--transition-normal);
}

.language-preview-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-lg);
}

.language-preview-card .language-flag {
    font-size: 3rem;
}

/* ==================== Lesson Card ==================== */
.lesson-card {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    cursor: pointer;
    transition: all var(--transition-normal);
}

.lesson-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-lg);
}

.lesson-icon {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-md);
}

.lesson-title {
    margin-bottom: var(--spacing-sm);
}

.lesson-description {
    font-size: 0.9rem;
    color: var(--color-gray);
    margin-bottom: var(--spacing-md);
}

.lesson-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
}

.lesson-duration {
    background-color: var(--color-primary);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--color-black);
}

.lesson-xp {
    background-color: var(--color-success);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius);
    border: var(--border-width) solid var(--color-black);
    color: var(--color-white);
}

/* ==================== Flashcard ==================== */
.flashcard-container {
    perspective: 1000px;
    margin: var(--spacing-lg) 0;
}

.flashcard {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-2xl);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    cursor: pointer;
    transition: transform var(--transition-slow);
    transform-style: preserve-3d;
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.flashcard.flipped {
    transform: rotateY(180deg);
}

.flashcard-front,
.flashcard-back {
    backface-visibility: hidden;
}

.flashcard-back {
    transform: rotateY(180deg);
}

.flashcard-word {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: var(--spacing-md);
}

.flashcard-pronunciation {
    font-family: var(--font-mono);
    font-size: 1.2rem;
    color: var(--color-gray);
    margin-bottom: var(--spacing-md);
}

.flashcard-translation {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: var(--spacing-md);
}

.flashcard-example {
    font-size: 0.95rem;
    color: var(--color-gray);
    font-style: italic;
}

.flashcard-hint {
    font-size: 0.85rem;
    color: var(--color-gray);
    margin-top: var(--spacing-md);
}

/* ==================== Quiz ==================== */
.quiz-container {
    margin: var(--spacing-lg) 0;
}

.quiz-progress {
    margin-bottom: var(--spacing-lg);
}

.quiz-progress-bar {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    height: 1.5rem;
    background-color: var(--color-gray-light);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
}

.quiz-progress-fill {
    background-color: var(--color-success);
    height: 100%;
    transition: width var(--transition-normal);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-white);
}

.quiz-question {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-lg);
}

.quiz-question-text {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
}

.quiz-options {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
}

@media (min-width: 640px) {
    .quiz-options {
        grid-template-columns: repeat(2, 1fr);
    }
}

.quiz-option {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    background-color: var(--color-white);
    cursor: pointer;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-sm);
    font-family: var(--font-body);
    font-size: 1rem;
    text-align: left;
}

.quiz-option:hover:not(.disabled) {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-md);
}

.quiz-option.selected {
    background-color: var(--color-primary);
    color: var(--color-black);
}

.quiz-option.correct {
    background-color: var(--color-success);
    color: var(--color-white);
    border-color: var(--color-success);
}

.quiz-option.incorrect {
    background-color: var(--color-danger);
    color: var(--color-white);
    border-color: var(--color-danger);
}

.quiz-option.disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.quiz-feedback {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-gray-light);
    box-shadow: var(--shadow-sm);
    margin-top: var(--spacing-lg);
}

.quiz-feedback.correct {
    background-color: #E8F8F5;
    border-color: var(--color-success);
}

.quiz-feedback.incorrect {
    background-color: #FFE8E8;
    border-color: var(--color-danger);
}

.quiz-feedback-title {
    font-family: var(--font-display);
    font-weight: 800;
    margin-bottom: var(--spacing-sm);
}

.quiz-feedback-text {
    font-size: 0.95rem;
}

/* ==================== Progress Page ==================== */
.progress-stats {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-2xl);
}

@media (min-width: 640px) {
    .progress-stats {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .progress-stats {
        grid-template-columns: repeat(4, 1fr);
    }
}

.stat-card {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    text-align: center;
}

.stat-value {
    font-family: var(--font-mono);
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
}

.stat-label {
    font-family: var(--font-display);
    font-size: 0.9rem;
    color: var(--color-gray);
}

.achievements {
    margin-top: var(--spacing-2xl);
}

.achievements-title {
    margin-bottom: var(--spacing-lg);
}

.achievement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: var(--spacing-md);
}

.achievement {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    background-color: var(--color-white);
    box-shadow: var(--shadow-sm);
    text-align: center;
    transition: all var(--transition-normal);
}

.achievement:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--shadow-md);
}

.achievement.locked {
    opacity: 0.5;
    background-color: var(--color-gray-light);
}

.achievement-icon {
    font-size: 2rem;
    margin-bottom: var(--spacing-sm);
}

.achievement-name {
    font-family: var(--font-display);
    font-size: 0.8rem;
    font-weight: 700;
}

.language-progress {
    margin-top: var(--spacing-lg);
}

.language-progress-item {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
    background-color: var(--color-white);
    box-shadow: var(--shadow-sm);
    margin-bottom: var(--spacing-md);
}

.language-progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-md);
}

.language-progress-name {
    font-family: var(--font-display);
    font-weight: 700;
}

.language-progress-stats {
    font-family: var(--font-mono);
    font-size: 0.9rem;
}

.language-progress-bar {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    height: 1rem;
    background-color: var(--color-gray-light);
    overflow: hidden;
}

.language-progress-fill {
    background-color: var(--color-secondary);
    height: 100%;
    transition: width var(--transition-normal);
}

/* ==================== Sections ==================== */
.section-title {
    margin-bottom: var(--spacing-lg);
    text-align: center;
    font-size: 2rem;
}

.page-title {
    margin-bottom: var(--spacing-lg);
    padding-top: var(--spacing-lg);
}

.features {
    padding: var(--spacing-2xl) 0;
    background-color: var(--color-gray-light);
    border-top: var(--border-width) solid var(--color-black);
    border-bottom: var(--border-width) solid var(--color-black);
}

.languages-preview {
    padding: var(--spacing-2xl) 0;
}

.how-it-works {
    padding: var(--spacing-2xl) 0;
    background-color: var(--color-gray-light);
    border-top: var(--border-width) solid var(--color-black);
    border-bottom: var(--border-width) solid var(--color-black);
}

.steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
}

@media (min-width: 640px) {
    .steps {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .steps {
        grid-template-columns: repeat(4, 1fr);
    }
}

.step {
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    background-color: var(--color-white);
    box-shadow: var(--shadow-md);
    text-align: center;
}

.step-number {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border: var(--border-width) solid var(--color-black);
    border-radius: 50%;
    background-color: var(--color-primary);
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-md);
}

.cta-section {
    padding: var(--spacing-2xl) 0;
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
    border-top: var(--border-width) solid var(--color-black);
    border-bottom: var(--border-width) solid var(--color-black);
}

.cta-content {
    text-align: center;
    color: var(--color-black);
}

.cta-content h3 {
    margin-bottom: var(--spacing-md);
}

.cta-content p {
    margin-bottom: var(--spacing-lg);
    font-size: 1.1rem;
}

/* ==================== Pages ==================== */
.page {
    display: none;
    padding: var(--spacing-xl) 0;
    min-height: calc(100vh - 200px);
}

.page.active {
    display: block;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ==================== Footer ==================== */
.footer {
    border-top: var(--border-width) solid var(--color-black);
    background-color: var(--color-gray-light);
    padding: var(--spacing-lg) 0;
    margin-top: var(--spacing-2xl);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-lg);
}

.footer-links {
    display: flex;
    gap: var(--spacing-lg);
}

.footer-links a {
    color: var(--color-black);
    text-decoration: none;
    font-family: var(--font-display);
    font-weight: 700;
    border-bottom: 2px solid transparent;
    transition: border-color var(--transition-normal);
}

.footer-links a:hover {
    border-bottom-color: var(--color-primary);
}

/* ==================== Badges & Labels ==================== */
.badge {
    display: inline-block;
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    padding: var(--spacing-xs) var(--spacing-sm);
    background-color: var(--color-primary);
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
}

.badge-success {
    background-color: var(--color-success);
    color: var(--color-white);
}

.badge-danger {
    background-color: var(--color-danger);
    color: var(--color-white);
}

.badge-accent {
    background-color: var(--color-accent);
    color: var(--color-white);
}

/* ==================== Language-Specific Styling ==================== */
.language-hero-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border: var(--border-width) solid var(--color-black);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    margin-bottom: var(--spacing-lg);
}

@media (min-width: 1024px) {
    .language-hero-image {
        height: 400px;
    }
}

/* ==================== Responsive ==================== */
@media (max-width: 640px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.8rem; }
    h3 { font-size: 1.5rem; }
    
    .navbar-menu {
        gap: var(--spacing-sm);
    }
    
    .nav-link {
        font-size: 0.9rem;
        padding: var(--spacing-xs) var(--spacing-xs);
    }
    
    .hero-emoji {
        font-size: 4rem;
    }
    
    .flashcard {
        min-height: 200px;
        padding: var(--spacing-lg);
    }
    
    .flashcard-word {
        font-size: 1.8rem;
    }
    
    .flashcard-translation {
        font-size: 1.5rem;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
}

/* ==================== Animations ==================== */
@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
}

.bounce-in {
    animation: bounce-in 0.3s ease;
}

.shake {
    animation: shake 0.3s ease;
}

/* ==================== Utility Classes ==================== */
.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.text-gray {
    color: var(--color-gray);
}

.mt-lg {
    margin-top: var(--spacing-lg);
}

.mb-lg {
    margin-bottom: var(--spacing-lg);
}

.p-lg {
    padding: var(--spacing-lg);
}

.hidden {
    display: none !important;
}
</body>
// LinguaLearn - Language Data with Images
// Complete curriculum data with language-specific hero images

const LANGUAGES = [
    {
        id: 'spanish',
        name: 'Spanish',
        nativeName: 'Español',
        flag: '🇪🇸',
        color: '#FF6B6B',
        bgColor: '#FFF0F0',
        difficulty: 'Beginner',
        speakers: '500M+',
        description: 'One of the most spoken languages in the world. Perfect for beginners!',
        heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663558911150/aKjpqYifgXY653KGPXhUeh/spanish-hero-KH8tVQLuz925p6Z9E9Tifi.webp'
    },
    {
        id: 'french',
        name: 'French',
        nativeName: 'Français',
        flag: '🇫🇷',
        color: '#A855F7',
        bgColor: '#F5F0FF',
        difficulty: 'Intermediate',
        speakers: '280M+',
        description: 'The language of love and diplomacy. Romantic and elegant.',
        heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663558911150/aKjpqYifgXY653KGPXhUeh/french-hero-AAC9kW4oMcuy8HDpawF3Gc.webp'
    },
    {
        id: 'japanese',
        name: 'Japanese',
        nativeName: '日本語',
        flag: '🇯🇵',
        color: '#FF6B6B',
        bgColor: '#FFF0F0',
        difficulty: 'Advanced',
        speakers: '125M+',
        description: 'A fascinating language with three writing systems. Challenge yourself!',
        heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663558911150/aKjpqYifgXY653KGPXhUeh/japanese-hero-SXLaQYq9BjaNVc4ssxHc3f.webp'
    },
    {
        id: 'german',
        name: 'German',
        nativeName: 'Deutsch',
        flag: '🇩🇪',
        color: '#FFD93D',
        bgColor: '#FFF9E6',
        difficulty: 'Intermediate',
        speakers: '130M+',
        description: 'Precise and logical. Great for business and technology.',
        heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663558911150/aKjpqYifgXY653KGPXhUeh/german-hero-9bCdM2SqFUo9UMUjCcuXpD.webp'
    },
    {
        id: 'arabic',
        name: 'Arabic',
        nativeName: 'العربية',
        flag: '🇸🇦',
        color: '#06D6A0',
        bgColor: '#E8FFF8',
        difficulty: 'Advanced',
        speakers: '422M+',
        description: 'Rich language with deep cultural roots. Spoken across the Middle East.',
        heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663558911150/aKjpqYifgXY653KGPXhUeh/arabic-hero-jRiqnN9vHZbq6z4RTQ6RDv.webp'
    },
    {
        id: 'chinese',
        name: 'Chinese',
        nativeName: '中文',
        flag: '🇨🇳',
        color: '#FFD93D',
        bgColor: '#FFF9E6',
        difficulty: 'Advanced',
        speakers: '1B+',
        description: 'Most spoken language in the world. Ancient and modern at once.',
        heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663558911150/aKjpqYifgXY653KGPXhUeh/chinese-hero-jnFcxmrLK8NWKFFXxYqJwh.webp'
    }
];

const LESSONS = {
    spanish: [
        {
            id: 'spanish-1',
            icon: '👋',
            title: 'Greetings',
            description: 'Learn basic Spanish greetings and polite phrases',
            duration: '10',
            xp: '50',
            vocabulary: [
                { word: 'Hola', pronunciation: 'OH-lah', translation: 'Hello', example: 'Hola, ¿cómo estás?' },
                { word: 'Adiós', pronunciation: 'ah-dee-OHS', translation: 'Goodbye', example: 'Adiós, hasta luego!' },
                { word: 'Buenos días', pronunciation: 'BWEH-nos DEE-ahs', translation: 'Good morning', example: 'Buenos días, ¿cómo estás?' },
                { word: 'Buenas noches', pronunciation: 'BWEH-nahs NOH-ches', translation: 'Good night', example: 'Buenas noches, que duermas bien.' },
                { word: 'Por favor', pronunciation: 'por fah-VOR', translation: 'Please', example: 'Un café, por favor.' },
                { word: 'Gracias', pronunciation: 'GRAH-see-ahs', translation: 'Thank you', example: 'Gracias por tu ayuda.' }
            ]
        },
        {
            id: 'spanish-2',
            icon: '🍽️',
            title: 'Food & Dining',
            description: 'Order food and talk about meals in Spanish',
            duration: '12',
            xp: '60',
            vocabulary: [
                { word: 'Agua', pronunciation: 'AH-gwah', translation: 'Water', example: 'Un vaso de agua, por favor.' },
                { word: 'Pan', pronunciation: 'pahn', translation: 'Bread', example: 'El pan está delicioso.' },
                { word: 'Carne', pronunciation: 'KAR-neh', translation: 'Meat', example: 'Prefiero la carne roja.' },
                { word: 'Verduras', pronunciation: 'ver-DOO-rahs', translation: 'Vegetables', example: 'Las verduras son saludables.' },
                { word: 'Fruta', pronunciation: 'FROO-tah', translation: 'Fruit', example: 'Me encanta la fruta fresca.' },
                { word: 'Postre', pronunciation: 'POHS-treh', translation: 'Dessert', example: 'De postre quiero helado.' }
            ]
        },
        {
            id: 'spanish-3',
            icon: '🏠',
            title: 'Home & Family',
            description: 'Describe your home and family members',
            duration: '11',
            xp: '55',
            vocabulary: [
                { word: 'Casa', pronunciation: 'KAH-sah', translation: 'House', example: 'Mi casa es grande.' },
                { word: 'Familia', pronunciation: 'fah-MEE-lee-ah', translation: 'Family', example: 'Mi familia es muy unida.' },
                { word: 'Madre', pronunciation: 'MAH-dreh', translation: 'Mother', example: 'Mi madre es doctora.' },
                { word: 'Padre', pronunciation: 'PAH-dreh', translation: 'Father', example: 'Mi padre trabaja en una oficina.' },
                { word: 'Hermano', pronunciation: 'ehr-MAH-no', translation: 'Brother', example: 'Mi hermano es ingeniero.' },
                { word: 'Hermana', pronunciation: 'ehr-MAH-nah', translation: 'Sister', example: 'Mi hermana estudia medicina.' }
            ]
        }
    ],
    french: [
        {
            id: 'french-1',
            icon: '👋',
            title: 'Greetings',
            description: 'Learn French greetings and introductions',
            duration: '10',
            xp: '50',
            vocabulary: [
                { word: 'Bonjour', pronunciation: 'bon-ZHOOR', translation: 'Hello', example: 'Bonjour, comment allez-vous?' },
                { word: 'Au revoir', pronunciation: 'oh ruh-VWAHR', translation: 'Goodbye', example: 'Au revoir, à bientôt!' },
                { word: 'Bonsoir', pronunciation: 'bon-SWAHR', translation: 'Good evening', example: 'Bonsoir, comment ça va?' },
                { word: 'S\'il vous plaît', pronunciation: 'see voo PLEH', translation: 'Please', example: 'Un café, s\'il vous plaît.' },
                { word: 'Merci', pronunciation: 'mehr-SEE', translation: 'Thank you', example: 'Merci beaucoup!' },
                { word: 'De rien', pronunciation: 'duh ree-YAN', translation: 'You\'re welcome', example: 'De rien, c\'est un plaisir!' }
            ]
        },
        {
            id: 'french-2',
            icon: '🍷',
            title: 'Food & Wine',
            description: 'Explore French cuisine and dining',
            duration: '13',
            xp: '65',
            vocabulary: [
                { word: 'Vin', pronunciation: 'van', translation: 'Wine', example: 'Un verre de vin rouge, s\'il vous plaît.' },
                { word: 'Fromage', pronunciation: 'fro-MAHZH', translation: 'Cheese', example: 'Le fromage français est excellent.' },
                { word: 'Beurre', pronunciation: 'BUR', translation: 'Butter', example: 'Du pain avec du beurre.' },
                { word: 'Œuf', pronunciation: 'UF', translation: 'Egg', example: 'Je veux un œuf au plat.' },
                { word: 'Soupe', pronunciation: 'SOOP', translation: 'Soup', example: 'La soupe à l\'oignon est délicieuse.' },
                { word: 'Gâteau', pronunciation: 'gah-TOH', translation: 'Cake', example: 'Un morceau de gâteau, s\'il vous plaît.' }
            ]
        },
        {
            id: 'french-3',
            icon: '🗼',
            title: 'Travel & Places',
            description: 'Talk about traveling and locations',
            duration: '12',
            xp: '60',
            vocabulary: [
                { word: 'Hôtel', pronunciation: 'oh-TEL', translation: 'Hotel', example: 'Où est le meilleur hôtel?' },
                { word: 'Gare', pronunciation: 'GAR', translation: 'Train station', example: 'La gare est près d\'ici.' },
                { word: 'Musée', pronunciation: 'mew-ZAY', translation: 'Museum', example: 'Allons au musée ce weekend.' },
                { word: 'Rue', pronunciation: 'ROO', translation: 'Street', example: 'Quelle est cette rue?' },
                { word: 'Pont', pronunciation: 'PON', translation: 'Bridge', example: 'Le pont est très beau.' },
                { word: 'Plage', pronunciation: 'PLAHZH', translation: 'Beach', example: 'J\'aime aller à la plage.' }
            ]
        }
    ],
    japanese: [
        {
            id: 'japanese-1',
            icon: '👋',
            title: 'Greetings',
            description: 'Learn basic Japanese greetings',
            duration: '12',
            xp: '60',
            vocabulary: [
                { word: 'こんにちは', pronunciation: 'Konnichiwa', translation: 'Hello', example: 'こんにちは、元気ですか？' },
                { word: 'さようなら', pronunciation: 'Sayounara', translation: 'Goodbye', example: 'さようなら、また明日！' },
                { word: 'おはよう', pronunciation: 'Ohayou', translation: 'Good morning', example: 'おはようございます。' },
                { word: 'おやすみなさい', pronunciation: 'Oyasuminasai', translation: 'Good night', example: 'おやすみなさい、良い夢を。' },
                { word: 'ありがとう', pronunciation: 'Arigatou', translation: 'Thank you', example: 'ありがとうございます。' },
                { word: 'どうぞ', pronunciation: 'Douzo', translation: 'Please', example: 'どうぞ、召し上がってください。' }
            ]
        },
        {
            id: 'japanese-2',
            icon: '🍜',
            title: 'Food & Drinks',
            description: 'Learn about Japanese cuisine',
            duration: '13',
            xp: '65',
            vocabulary: [
                { word: 'すし', pronunciation: 'Sushi', translation: 'Sushi', example: 'すしが好きです。' },
                { word: 'ラーメン', pronunciation: 'Ramen', translation: 'Ramen', example: 'ラーメンを食べたいです。' },
                { word: 'てんぷら', pronunciation: 'Tenpura', translation: 'Tempura', example: 'てんぷらはおいしいです。' },
                { word: 'みそ汁', pronunciation: 'Misoshiru', translation: 'Miso soup', example: 'みそ汁を飲みます。' },
                { word: 'お茶', pronunciation: 'Ocha', translation: 'Tea', example: 'お茶をください。' },
                { word: 'ご飯', pronunciation: 'Gohan', translation: 'Rice', example: 'ご飯をいただきます。' }
            ]
        },
        {
            id: 'japanese-3',
            icon: '🏯',
            title: 'Culture & Places',
            description: 'Explore Japanese culture and landmarks',
            duration: '14',
            xp: '70',
            vocabulary: [
                { word: 'お寺', pronunciation: 'Otera', translation: 'Temple', example: 'お寺に行きました。' },
                { word: '神社', pronunciation: 'Jinja', translation: 'Shrine', example: '神社でお参りします。' },
                { word: '庭園', pronunciation: 'Teien', translation: 'Garden', example: '美しい庭園です。' },
                { word: '城', pronunciation: 'Shiro', translation: 'Castle', example: '古い城を見ました。' },
                { word: '桜', pronunciation: 'Sakura', translation: 'Cherry blossom', example: '桜が咲いています。' },
                { word: '祭り', pronunciation: 'Matsuri', translation: 'Festival', example: '夏祭りに行きます。' }
            ]
        }
    ],
    german: [
        {
            id: 'german-1',
            icon: '👋',
            title: 'Greetings',
            description: 'Learn German greetings and politeness',
            duration: '10',
            xp: '50',
            vocabulary: [
                { word: 'Hallo', pronunciation: 'HAH-lo', translation: 'Hello', example: 'Hallo, wie geht es dir?' },
                { word: 'Auf Wiedersehen', pronunciation: 'owf VEE-der-zay-en', translation: 'Goodbye', example: 'Auf Wiedersehen, bis bald!' },
                { word: 'Guten Morgen', pronunciation: 'GOO-ten MOR-gen', translation: 'Good morning', example: 'Guten Morgen, wie geht es?' },
                { word: 'Guten Abend', pronunciation: 'GOO-ten AH-bent', translation: 'Good evening', example: 'Guten Abend, schön dich zu sehen.' },
                { word: 'Bitte', pronunciation: 'BIT-te', translation: 'Please', example: 'Ein Kaffee, bitte.' },
                { word: 'Danke', pronunciation: 'DAHN-ke', translation: 'Thank you', example: 'Danke schön!' }
            ]
        },
        {
            id: 'german-2',
            icon: '🍺',
            title: 'Food & Beverages',
            description: 'Explore German food culture',
            duration: '12',
            xp: '60',
            vocabulary: [
                { word: 'Brot', pronunciation: 'BROHT', translation: 'Bread', example: 'Das Brot ist frisch.' },
                { word: 'Wurst', pronunciation: 'VOORST', translation: 'Sausage', example: 'Deutsche Wurst ist berühmt.' },
                { word: 'Bier', pronunciation: 'BEER', translation: 'Beer', example: 'Ein Bier, bitte.' },
                { word: 'Käse', pronunciation: 'KAY-ze', translation: 'Cheese', example: 'Der Käse schmeckt gut.' },
                { word: 'Kartoffel', pronunciation: 'kar-TOF-fel', translation: 'Potato', example: 'Kartoffeln sind lecker.' },
                { word: 'Schnitzel', pronunciation: 'SHNIT-zel', translation: 'Schnitzel', example: 'Wiener Schnitzel ist köstlich.' }
            ]
        },
        {
            id: 'german-3',
            icon: '🏔️',
            title: 'Nature & Travel',
            description: 'Discuss nature and travel in German',
            duration: '11',
            xp: '55',
            vocabulary: [
                { word: 'Berg', pronunciation: 'BEHRK', translation: 'Mountain', example: 'Die Berge sind schön.' },
                { word: 'Wald', pronunciation: 'VAHLT', translation: 'Forest', example: 'Der Wald ist grün.' },
                { word: 'See', pronunciation: 'ZAY', translation: 'Lake', example: 'Der See ist klar.' },
                { word: 'Fluss', pronunciation: 'FLOOS', translation: 'River', example: 'Der Fluss fließt schnell.' },
                { word: 'Strand', pronunciation: 'SHTRAHNT', translation: 'Beach', example: 'Der Strand ist wunderschön.' },
                { word: 'Himmel', pronunciation: 'HIM-mel', translation: 'Sky', example: 'Der Himmel ist blau.' }
            ]
        }
    ],
    arabic: [
        {
            id: 'arabic-1',
            icon: '👋',
            title: 'Greetings',
            description: 'Learn Arabic greetings and basic phrases',
            duration: '12',
            xp: '60',
            vocabulary: [
                { word: 'السلام عليكم', pronunciation: 'As-salamu alaikum', translation: 'Hello (peace be upon you)', example: 'السلام عليكم، كيف حالك؟' },
                { word: 'وعليكم السلام', pronunciation: 'Wa alaikum as-salam', translation: 'And upon you be peace', example: 'وعليكم السلام ورحمة الله.' },
                { word: 'صباح الخير', pronunciation: 'Sabah al-khair', translation: 'Good morning', example: 'صباح الخير، كيف أنت؟' },
                { word: 'مساء الخير', pronunciation: 'Masaa al-khair', translation: 'Good evening', example: 'مساء الخير، كيف حالك؟' },
                { word: 'من فضلك', pronunciation: 'Min fadlak', translation: 'Please', example: 'قهوة من فضلك.' },
                { word: 'شكراً', pronunciation: 'Shukran', translation: 'Thank you', example: 'شكراً جزيلاً على مساعدتك.' }
            ]
        },
        {
            id: 'arabic-2',
            icon: '🍽️',
            title: 'Food & Dining',
            description: 'Learn about Arabic cuisine',
            duration: '13',
            xp: '65',
            vocabulary: [
                { word: 'خبز', pronunciation: 'Khubz', translation: 'Bread', example: 'الخبز طازج جداً.' },
                { word: 'حمص', pronunciation: 'Hummus', translation: 'Hummus', example: 'الحمص لذيذ.' },
                { word: 'فلافل', pronunciation: 'Falafel', translation: 'Falafel', example: 'الفلافل شهية.' },
                { word: 'شاي', pronunciation: 'Chai', translation: 'Tea', example: 'كوب شاي من فضلك.' },
                { word: 'قهوة', pronunciation: 'Qahwah', translation: 'Coffee', example: 'قهوة سوداء بدون سكر.' },
                { word: 'تمر', pronunciation: 'Tamr', translation: 'Date', example: 'التمر حلو ولذيذ.' }
            ]
        },
        {
            id: 'arabic-3',
            icon: '🕌',
            title: 'Culture & Religion',
            description: 'Explore Islamic culture and traditions',
            duration: '14',
            xp: '70',
            vocabulary: [
                { word: 'مسجد', pronunciation: 'Masjid', translation: 'Mosque', example: 'المسجد جميل جداً.' },
                { word: 'القرآن', pronunciation: 'Al-Quran', translation: 'Quran', example: 'أقرأ القرآن كل يوم.' },
                { word: 'صلاة', pronunciation: 'Salah', translation: 'Prayer', example: 'وقت الصلاة الآن.' },
                { word: 'رمضان', pronunciation: 'Ramadan', translation: 'Ramadan', example: 'رمضان شهر مبارك.' },
                { word: 'عيد', pronunciation: 'Eid', translation: 'Festival/Holiday', example: 'عيد الفطر قريب.' },
                { word: 'حج', pronunciation: 'Hajj', translation: 'Pilgrimage', example: 'الحج فريضة إسلامية.' }
            ]
        }
    ],
    chinese: [
        {
            id: 'chinese-1',
            icon: '👋',
            title: 'Greetings',
            description: 'Learn basic Chinese greetings',
            duration: '12',
            xp: '60',
            vocabulary: [
                { word: '你好', pronunciation: 'Nǐ hǎo', translation: 'Hello', example: '你好，你好吗？' },
                { word: '再见', pronunciation: 'Zàijiàn', translation: 'Goodbye', example: '再见，明天见！' },
                { word: '早上好', pronunciation: 'Zǎoshang hǎo', translation: 'Good morning', example: '早上好，你睡得好吗？' },
                { word: '晚安', pronunciation: 'Wǎn\'ān', translation: 'Good night', example: '晚安，睡个好觉。' },
                { word: '请', pronunciation: 'Qǐng', translation: 'Please', example: '请给我一杯茶。' },
                { word: '谢谢', pronunciation: 'Xièxie', translation: 'Thank you', example: '谢谢你的帮助。' }
            ]
        },
        {
            id: 'chinese-2',
            icon: '🍜',
            title: 'Food & Dining',
            description: 'Explore Chinese cuisine',
            duration: '13',
            xp: '65',
            vocabulary: [
                { word: '米饭', pronunciation: 'Mǐfàn', translation: 'Rice', example: '我喜欢吃米饭。' },
                { word: '面条', pronunciation: 'Miàntiáo', translation: 'Noodles', example: '面条很好吃。' },
                { word: '饺子', pronunciation: 'Jiǎozi', translation: 'Dumplings', example: '我喜欢吃饺子。' },
                { word: '茶', pronunciation: 'Chá', translation: 'Tea', example: '请给我一杯茶。' },
                { word: '酒', pronunciation: 'Jiǔ', translation: 'Alcohol/Wine', example: '干杯！' },
                { word: '汤', pronunciation: 'Tāng', translation: 'Soup', example: '这个汤很好喝。' }
            ]
        },
        {
            id: 'chinese-3',
            icon: '🏯',
            title: 'Culture & History',
            description: 'Learn about Chinese culture and history',
            duration: '14',
            xp: '70',
            vocabulary: [
                { word: '长城', pronunciation: 'Chángchéng', translation: 'Great Wall', example: '长城很壮观。' },
                { word: '故宫', pronunciation: 'Gùgōng', translation: 'Forbidden City', example: '故宫是中国的宝藏。' },
                { word: '文化', pronunciation: 'Wénhuà', translation: 'Culture', example: '中国文化很丰富。' },
                { word: '历史', pronunciation: 'Lìshǐ', translation: 'History', example: '中国历史很悠久。' },
                { word: '艺术', pronunciation: 'Yìshù', translation: 'Art', example: '中国艺术很美。' },
                { word: '传统', pronunciation: 'Chuántǒng', translation: 'Tradition', example: '中国传统很重要。' }
            ]
        }
    ]
};

const QUIZ_QUESTIONS = {
    spanish: [
        {
            question: '¿Cómo se dice "Hello" en español?',
            options: ['Adiós', 'Hola', 'Gracias', 'Por favor'],
            correct: 1,
            explanation: '"Hola" es la forma correcta de decir "Hello" en español. "Adiós" significa "Goodbye".'
        },
        {
            question: 'Which word means "Thank you"?',
            options: ['Por favor', 'Gracias', 'Hola', 'Adiós'],
            correct: 1,
            explanation: '"Gracias" means "Thank you". "Por favor" means "Please".'
        },
        {
            question: '¿Cuál es la palabra para "Water"?',
            options: ['Vino', 'Agua', 'Pan', 'Carne'],
            correct: 1,
            explanation: '"Agua" means "Water". "Vino" is "Wine", "Pan" is "Bread", and "Carne" is "Meat".'
        },
        {
            question: 'What does "Casa" mean?',
            options: ['Family', 'House', 'Mother', 'Father'],
            correct: 1,
            explanation: '"Casa" means "House". "Familia" means "Family", "Madre" is "Mother", and "Padre" is "Father".'
        },
        {
            question: '¿Cuál es la palabra para "Brother"?',
            options: ['Hermana', 'Padre', 'Hermano', 'Madre'],
            correct: 2,
            explanation: '"Hermano" means "Brother". "Hermana" is "Sister", "Padre" is "Father", and "Madre" is "Mother".'
        }
    ],
    french: [
        {
            question: 'How do you say "Hello" in French?',
            options: ['Au revoir', 'Bonjour', 'Bonsoir', 'Merci'],
            correct: 1,
            explanation: '"Bonjour" means "Hello" or "Good day". "Au revoir" means "Goodbye".'
        },
        {
            question: 'What does "Merci" mean?',
            options: ['Please', 'Goodbye', 'Thank you', 'Hello'],
            correct: 2,
            explanation: '"Merci" means "Thank you". "S\'il vous plaît" means "Please".'
        },
        {
            question: '¿Qué significa "Vin"?',
            options: ['Beer', 'Water', 'Wine', 'Coffee'],
            correct: 2,
            explanation: '"Vin" means "Wine". "Bière" is "Beer", "Eau" is "Water", and "Café" is "Coffee".'
        },
        {
            question: 'Which word means "Cheese"?',
            options: ['Beurre', 'Fromage', 'Œuf', 'Pain'],
            correct: 1,
            explanation: '"Fromage" means "Cheese". "Beurre" is "Butter", "Œuf" is "Egg", and "Pain" is "Bread".'
        },
        {
            question: 'What is the French word for "Hotel"?',
            options: ['Gare', 'Musée', 'Hôtel', 'Plage'],
            correct: 2,
            explanation: '"Hôtel" means "Hotel". "Gare" is "Train station", "Musée" is "Museum", and "Plage" is "Beach".'
        }
    ],
    japanese: [
        {
            question: 'How do you say "Hello" in Japanese?',
            options: ['さようなら', 'おはよう', 'こんにちは', 'ありがとう'],
            correct: 2,
            explanation: '"こんにちは" (Konnichiwa) means "Hello". "さようなら" (Sayounara) means "Goodbye".'
        },
        {
            question: 'What does "ありがとう" mean?',
            options: ['Goodbye', 'Please', 'Thank you', 'Hello'],
            correct: 2,
            explanation: '"ありがとう" (Arigatou) means "Thank you". "どうぞ" (Douzo) means "Please".'
        },
        {
            question: 'Which word means "Sushi"?',
            options: ['ラーメン', 'すし', 'てんぷら', 'ご飯'],
            correct: 1,
            explanation: '"すし" (Sushi) is "Sushi". "ラーメン" (Ramen) is "Ramen", "てんぷら" (Tenpura) is "Tempura".'
        },
        {
            question: 'What is the Japanese word for "Temple"?',
            options: ['神社', 'お寺', '城', '庭園'],
            correct: 1,
            explanation: '"お寺" (Otera) means "Temple". "神社" (Jinja) is "Shrine", "城" (Shiro) is "Castle".'
        },
        {
            question: 'How do you say "Good morning" in Japanese?',
            options: ['おやすみなさい', 'おはよう', 'こんにちは', 'おはようございます'],
            correct: 1,
            explanation: '"おはよう" (Ohayou) or "おはようございます" (Ohayou gozaimasu) means "Good morning".'
        }
    ],
    german: [
        {
            question: 'How do you say "Hello" in German?',
            options: ['Auf Wiedersehen', 'Hallo', 'Guten Morgen', 'Danke'],
            correct: 1,
            explanation: '"Hallo" means "Hello". "Auf Wiedersehen" means "Goodbye".'
        },
        {
            question: 'What does "Danke" mean?',
            options: ['Please', 'Goodbye', 'Thank you', 'Hello'],
            correct: 2,
            explanation: '"Danke" means "Thank you". "Bitte" means "Please".'
        },
        {
            question: 'Which word means "Bread"?',
            options: ['Wurst', 'Käse', 'Brot', 'Bier'],
            correct: 2,
            explanation: '"Brot" means "Bread". "Wurst" is "Sausage", "Käse" is "Cheese", and "Bier" is "Beer".'
        },
        {
            question: 'What is the German word for "Mountain"?',
            options: ['Wald', 'Berg', 'See', 'Fluss'],
            correct: 1,
            explanation: '"Berg" means "Mountain". "Wald" is "Forest", "See" is "Lake", and "Fluss" is "River".'
        },
        {
            question: 'How do you say "Good evening" in German?',
            options: ['Guten Morgen', 'Guten Abend', 'Guten Nacht', 'Auf Wiedersehen'],
            correct: 1,
            explanation: '"Guten Abend" means "Good evening". "Guten Morgen" is "Good morning".'
        }
    ],
    arabic: [
        {
            question: 'How do you greet someone in Arabic?',
            options: ['وداعاً', 'السلام عليكم', 'شكراً', 'من فضلك'],
            correct: 1,
            explanation: '"السلام عليكم" (As-salamu alaikum) is the traditional Arabic greeting meaning "Peace be upon you".'
        },
        {
            question: 'What does "شكراً" mean?',
            options: ['Please', 'Goodbye', 'Thank you', 'Hello'],
            correct: 2,
            explanation: '"شكراً" (Shukran) means "Thank you". "من فضلك" (Min fadlak) means "Please".'
        },
        {
            question: 'Which word means "Bread"?',
            options: ['حمص', 'خبز', 'فلافل', 'تمر'],
            correct: 1,
            explanation: '"خبز" (Khubz) means "Bread". "حمص" (Hummus) is "Hummus", "فلافل" (Falafel) is "Falafel".'
        },
        {
            question: 'What is the Arabic word for "Mosque"?',
            options: ['كنيسة', 'مسجد', 'معبد', 'كاتدرائية'],
            correct: 1,
            explanation: '"مسجد" (Masjid) means "Mosque". It\'s a central place in Islamic culture.'
        },
        {
            question: 'How do you say "Good morning" in Arabic?',
            options: ['مساء الخير', 'صباح الخير', 'تصبح على خير', 'السلام عليكم'],
            correct: 1,
            explanation: '"صباح الخير" (Sabah al-khair) means "Good morning".'
        }
    ],
    chinese: [
        {
            question: 'How do you say "Hello" in Chinese?',
            options: ['再见', '早上好', '你好', '谢谢'],
            correct: 2,
            explanation: '"你好" (Nǐ hǎo) means "Hello". "再见" (Zàijiàn) means "Goodbye".'
        },
        {
            question: 'What does "谢谢" mean?',
            options: ['Please', 'Goodbye', 'Thank you', 'Hello'],
            correct: 2,
            explanation: '"谢谢" (Xièxie) means "Thank you". "请" (Qǐng) means "Please".'
        },
        {
            question: 'Which word means "Rice"?',
            options: ['面条', '米饭', '饺子', '汤'],
            correct: 1,
            explanation: '"米饭" (Mǐfàn) means "Rice". "面条" (Miàntiáo) is "Noodles", "饺子" (Jiǎozi) is "Dumplings".'
        },
        {
            question: 'What is the Chinese word for "Great Wall"?',
            options: ['故宫', '长城', '城市', '城堡'],
            correct: 1,
            explanation: '"长城" (Chángchéng) means "Great Wall", one of the most iconic structures in China.'
        },
        {
            question: 'How do you say "Good morning" in Chinese?',
            options: ['晚安', '早上好', '你好', '再见'],
            correct: 1,
            explanation: '"早上好" (Zǎoshang hǎo) means "Good morning".'
        }
    ]
data (1).js
};
</html>
