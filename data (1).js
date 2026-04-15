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
};
