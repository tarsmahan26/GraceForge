// GraceForge content model — 12 categories, shared resistance equation, community mock data.
export const VARS = {
  G: { label: 'God-Consciousness', side: 'num', desc: 'Awareness that God is present and watching' },
  S: { label: 'Scripture Readiness', side: 'num', desc: 'Word memorized and on hand for this fight' },
  C: { label: 'Community', side: 'num', desc: 'Someone who knows this battle by name' },
  I: { label: 'Isolation', side: 'den', desc: 'Alone, unseen, unaccountable' },
  T: { label: 'Trigger Exposure', side: 'den', desc: 'Proximity to the occasion of sin' },
  X: { label: 'Accelerant', side: 'den', desc: 'The category-specific fuel' },
};
export const MASTER = {
  formula: 'R = (G + S + C) ÷ (I + T + X)',
  gloss: 'Resistance rises when God-consciousness, Scripture readiness and Community outweigh Isolation, Trigger exposure and the category\u2019s own accelerant.',
  principles: [
    { n: 1, title: 'Isolation is the universal denominator', body: 'Every fall in Scripture happens alone, or in a crowd that is not community. Ending isolation is the first move in every recovery.', ref: 'Ecclesiastes 4:9\u201312' },
    { n: 2, title: 'Worship precedes warfare', body: 'Jehoshaphat put the singers in front of the army. Praise is armor put on before the fight, not a reward after.', ref: '2 Chronicles 20:21' },
    { n: 3, title: 'Sin is a worship disorder before it is a behavior problem', body: 'Behind every category is an idol \u2014 something worshipped in place of God. Name the idol, replace the worship.', ref: 'Romans 1:25' },
    { n: 4, title: 'Scripture is preloaded ammunition', body: 'Jesus answered each temptation with a verse already hidden. Memory work done in peace is what fires under pressure.', ref: 'Psalm 119:11 \u00b7 Matthew 4:1\u201311' },
    { n: 5, title: 'Fight from victory, not for it', body: 'The believer is already dead to sin and alive to God. Resistance is living out a settled verdict, not earning one.', ref: 'Romans 6:11 \u00b7 8:37' },
    { n: 6, title: 'Move one variable', body: 'Do not fix everything. Find the single variable with the most leverage and move it one point this week.', ref: 'Philippians 3:13\u201314' },
  ],
};
export const CATEGORIES = [
  { id: 'pride', name: 'Pride', eq: 'The Nebuchadnezzar Equation', x: 'Self-Sufficiency', idol: 'Self-glory', worship: 'Ascribing every gift to God out loud',
    verse: { ref: 'James 4:6', text: 'God opposes the proud but gives grace to the humble.' },
    prayer: 'Lord, every good thing in me is Yours. I lay my crown down before the throne.', gratitude: 'Name three good things in your life you did not earn.', action: 'Send one message today giving someone else credit you have been keeping.',
    caseStudy: { figure: 'Nebuchadnezzar', ref: 'Daniel 4:28\u201333', outcome: 'fell', scores: { G: 2, S: 1, C: 2, I: 8, T: 9, X: 10 }, narrative: 'Walking on his palace roof he says, "Is not this great Babylon, which I have built by my mighty power?" The word is still in his mouth when the verdict falls. Self-sufficiency at 10 with God-consciousness at 2 is the exact failure profile.' },
    pair: { protagonist: 'Nebuchadnezzar', committing: { title: 'The roof of Babylon', ref: 'Daniel 4:30', scores: { G: 2, S: 1, C: 2, I: 8, T: 9, X: 10 }, note: 'Alone, surveying his own works, no prophet in the room.' }, overcoming: { title: 'Eyes lifted to heaven', ref: 'Daniel 4:34\u201337', scores: { G: 9, S: 6, C: 5, I: 3, T: 4, X: 2 }, note: 'Same man. Same city. "I blessed the Most High." Self-sufficiency collapsed to 2 and R flipped.' } },
    cards: [{ ref: 'Proverbs 16:18', text: 'Pride goes before destruction, and a haughty spirit before a fall.' }, { ref: 'Philippians 2:3', text: 'Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves.' }] },
  { id: 'lust', name: 'Lust', eq: 'The Joseph Equation', x: 'Secrecy', idol: 'Pleasure on demand', worship: 'Offering the body as a living sacrifice',
    verse: { ref: 'Genesis 39:9', text: 'How then can I do this great wickedness and sin against God?' },
    prayer: 'Father, You see me right now. Make Your presence louder than this appetite.', gratitude: 'Thank God for one relationship that is pure and whole.', action: 'Leave the room. Put the device in another room. Text your partner one word: "Fighting."',
    caseStudy: { figure: 'Joseph', ref: 'Genesis 39:6\u201312', outcome: 'resisted', scores: { G: 10, S: 7, C: 3, I: 6, T: 10, X: 2 }, narrative: 'Alone in the house, invited daily, with no one to see. Trigger exposure is maxed. But God-consciousness is at 10 \u2014 "sin against God" is the first thing he says \u2014 and secrecy is near zero because he refuses to treat the moment as hidden.' },
    pair: { protagonist: 'Solomon', overcoming: { title: 'Ask for wisdom, not pleasure', ref: '1 Kings 3:5\u20139', scores: { G: 9, S: 8, C: 6, I: 3, T: 4, X: 2 }, note: 'Offered anything, he asks for a discerning heart.' }, committing: { title: 'Seven hundred wives', ref: '1 Kings 11:1\u20134', scores: { G: 3, S: 4, C: 2, I: 7, T: 10, X: 8 }, note: 'Same king. Appetite normalized, trigger exposure at 10, heart turned away.' } },
    cards: [{ ref: '1 Corinthians 6:19\u201320', text: 'You are not your own, for you were bought with a price. So glorify God in your body.' }, { ref: 'Psalm 119:37', text: 'Turn my eyes from looking at worthless things; and give me life in your ways.' }] },
  { id: 'envy', name: 'Envy', eq: 'The Saul Equation', x: 'Comparison', idol: 'Status', worship: 'Rejoicing with those who rejoice',
    verse: { ref: 'Proverbs 14:30', text: 'A tranquil heart gives life to the flesh, but envy makes the bones rot.' },
    prayer: 'Lord, You have given me exactly what I need for the work You gave me. I bless what You gave them.', gratitude: 'Name the specific gift God gave the person you are envying \u2014 and thank Him for it.', action: 'Send that person a sincere, specific compliment within the hour.',
    caseStudy: { figure: 'Saul', ref: '1 Samuel 18:6\u20139', outcome: 'fell', scores: { G: 3, S: 2, C: 2, I: 7, T: 9, X: 10 }, narrative: 'The women sing "Saul has struck down his thousands, and David his ten thousands." A single comparison. "Saul eyed David from that day on." Comparison at 10 with no one close enough to speak truth.' },
    pair: { protagonist: 'Saul', overcoming: { title: 'No one dies today', ref: '1 Samuel 11:12\u201313', scores: { G: 7, S: 5, C: 7, I: 3, T: 5, X: 3 }, note: 'Fresh from victory he refuses to punish those who scorned him: "Today the LORD has worked salvation."' }, committing: { title: 'Eyeing David', ref: '1 Samuel 18:8\u20139', scores: { G: 3, S: 2, C: 2, I: 7, T: 9, X: 10 }, note: 'Same man, years later. Comparison became the lens he saw everything through.' } },
    cards: [{ ref: 'Galatians 5:26', text: 'Let us not become conceited, provoking one another, envying one another.' }, { ref: '1 Corinthians 12:18', text: 'God arranged the members in the body, each one of them, as he chose.' }] },
  { id: 'anger', name: 'Anger', eq: 'The Moses Equation', x: 'Provocation', idol: 'Control', worship: 'Entrusting judgment to the Judge',
    verse: { ref: 'James 1:19\u201320', text: 'Let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.' },
    prayer: 'God, You are the Judge. I hand You the gavel I have been holding.', gratitude: 'Thank God for one time He was patient with you when He had every right not to be.', action: 'Wait twenty minutes before you respond. Speak the verse out loud first.',
    caseStudy: { figure: 'Moses', ref: 'Numbers 20:10\u201312', outcome: 'fell', scores: { G: 5, S: 8, C: 3, I: 6, T: 10, X: 10 }, narrative: 'Forty years of complaints, Miriam newly buried, and the people grumble again. He strikes the rock instead of speaking to it. Scripture readiness is high \u2014 he wrote the law \u2014 but provocation at 10 overwhelmed a God-consciousness that had slipped to 5.' },
    pair: { protagonist: 'Moses', overcoming: { title: 'Standing in the breach', ref: 'Exodus 32:11\u201314', scores: { G: 10, S: 8, C: 5, I: 2, T: 9, X: 6 }, note: 'The people have just made the calf. Moses is angry \u2014 and channels it into intercession, face to face with God.' }, committing: { title: 'Striking the rock', ref: 'Numbers 20:10\u201312', scores: { G: 5, S: 8, C: 3, I: 6, T: 10, X: 10 }, note: 'Same provocation. God-consciousness down five points and anger goes to the rock instead of to God.' } },
    cards: [{ ref: 'Ephesians 4:26', text: 'Be angry and do not sin; do not let the sun go down on your anger.' }, { ref: 'Proverbs 15:1', text: 'A soft answer turns away wrath, but a harsh word stirs up anger.' }] },
  { id: 'greed', name: 'Greed', eq: 'The Achan Equation', x: 'Scarcity Fear', idol: 'Security in possessions', worship: 'Open-handed giving',
    verse: { ref: 'Hebrews 13:5', text: 'Keep your life free from love of money, and be content with what you have, for he has said, "I will never leave you nor forsake you."' },
    prayer: 'Father, You are my portion. Nothing I hold is holding me up.', gratitude: 'List what you already have that you once prayed for.', action: 'Give something away today that costs you something.',
    caseStudy: { figure: 'Achan', ref: 'Joshua 7:20\u201321', outcome: 'fell', scores: { G: 2, S: 3, C: 2, I: 9, T: 8, X: 8 }, narrative: '"I saw... I coveted... I took... they are hidden in the earth inside my tent." The full sequence of greed, executed in total isolation while the whole camp celebrated.' },
    pair: { protagonist: 'Zacchaeus', committing: { title: 'Chief tax collector, and rich', ref: 'Luke 19:2', scores: { G: 2, S: 3, C: 1, I: 9, T: 9, X: 9 }, note: 'Wealth built on extraction, despised by his own people, alone in a tree.' }, overcoming: { title: 'Half of my goods', ref: 'Luke 19:8', scores: { G: 9, S: 5, C: 8, I: 2, T: 5, X: 1 }, note: 'Jesus enters his house. Community goes from 1 to 8, scarcity fear collapses, and the money flows out.' } },
    cards: [{ ref: '1 Timothy 6:6', text: 'Godliness with contentment is great gain.' }, { ref: 'Matthew 6:21', text: 'For where your treasure is, there your heart will be also.' }] },
  { id: 'appetite', name: 'Gluttony', eq: 'The Esau Equation', x: 'Urgency', idol: 'Comfort by consumption', worship: 'Fasting and feasting at God\u2019s table',
    verse: { ref: '1 Corinthians 10:31', text: 'So, whether you eat or drink, or whatever you do, do all to the glory of God.' },
    prayer: 'Lord, You are the bread of life. Fill the hunger under this hunger.', gratitude: 'Thank God for the last meal that was truly a gift.', action: 'Drink water, wait ten minutes, and pray the verse before deciding.',
    caseStudy: { figure: 'Esau', ref: 'Genesis 25:29\u201334', outcome: 'fell', scores: { G: 1, S: 1, C: 2, I: 7, T: 9, X: 10 }, narrative: '"I am about to die; of what use is a birthright to me?" He is not dying. Urgency at 10 turned a bowl of stew into the price of a covenant.' },
    pair: { protagonist: 'Israel in the wilderness', overcoming: { title: 'Daily manna', ref: 'Exodus 16:4\u201318', scores: { G: 8, S: 6, C: 8, I: 2, T: 5, X: 3 }, note: 'Gathering only what is needed for the day, together, as instructed.' }, committing: { title: 'Craving quail', ref: 'Numbers 11:4\u20136', scores: { G: 2, S: 3, C: 3, I: 5, T: 8, X: 10 }, note: 'Same people, same wilderness. "Oh that we had meat to eat!" Manna became contempt.' } },
    cards: [{ ref: 'Philippians 3:19', text: 'Their god is their belly, and they glory in their shame, with minds set on earthly things.' }, { ref: 'John 6:35', text: 'I am the bread of life; whoever comes to me shall not hunger.' }] },
  { id: 'sloth', name: 'Sloth', eq: 'The Jonah Equation', x: 'Avoidance', idol: 'Ease', worship: 'Diligent work offered to the Lord',
    verse: { ref: 'Colossians 3:23', text: 'Whatever you do, work heartily, as for the Lord and not for men.' },
    prayer: 'Lord, the assignment is Yours and so is the strength. I will get up.', gratitude: 'Thank God for one task He has already carried you through.', action: 'Do the next smallest step of the thing you are avoiding \u2014 right now, for five minutes.',
    caseStudy: { figure: 'Jonah', ref: 'Jonah 1:1\u20133', outcome: 'fell', scores: { G: 3, S: 6, C: 1, I: 9, T: 6, X: 10 }, narrative: 'The word of the LORD comes and Jonah "rose to flee to Tarshish from the presence of the LORD." A prophet with the Word in hand, alone on a boat, going the other direction.' },
    pair: { protagonist: 'Jonah', committing: { title: 'A ship bound for Tarshish', ref: 'Jonah 1:3', scores: { G: 3, S: 6, C: 1, I: 9, T: 6, X: 10 }, note: 'Paid the fare, went below deck, fell asleep.' }, overcoming: { title: 'Arose and went to Nineveh', ref: 'Jonah 3:3', scores: { G: 8, S: 7, C: 4, I: 4, T: 6, X: 3 }, note: 'Same prophet, same assignment. Avoidance broken, he goes "according to the word of the LORD."' } },
    cards: [{ ref: 'Proverbs 6:9\u201311', text: 'How long will you lie there, O sluggard? When will you arise from your sleep?' }, { ref: 'Ephesians 5:15\u201316', text: 'Look carefully then how you walk, not as unwise but as wise, making the best use of the time.' }] },
  { id: 'fear', name: 'Fear', eq: 'The Peter Equation', x: 'Threat Perception', idol: 'Safety and approval', worship: 'The fear of the Lord',
    verse: { ref: 'Isaiah 41:10', text: 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you.' },
    prayer: 'Father, You are bigger than this room. I will fear You and no one else.', gratitude: 'Name one fear from last year that never came true.', action: 'Do the brave thing in the next five minutes, before the fear can regroup.',
    caseStudy: { figure: 'Peter', ref: 'Luke 22:54\u201362', outcome: 'fell', scores: { G: 3, S: 4, C: 1, I: 9, T: 10, X: 10 }, narrative: 'In the courtyard, alone among enemies, the threat feels total. Three denials. Community at 1: he had followed "at a distance."' },
    pair: { protagonist: 'Peter', committing: { title: 'The courtyard', ref: 'Luke 22:54\u201362', scores: { G: 3, S: 4, C: 1, I: 9, T: 10, X: 10 }, note: 'Following at a distance, warming himself by a stranger\u2019s fire.' }, overcoming: { title: 'We cannot but speak', ref: 'Acts 4:19\u201320', scores: { G: 9, S: 9, C: 9, I: 1, T: 9, X: 6 }, note: 'Same threat, same council. But John is beside him and the Spirit is in him. Isolation at 1.' } },
    cards: [{ ref: 'Psalm 56:3\u20134', text: 'When I am afraid, I put my trust in you. In God, whose word I praise, in God I trust; I shall not be afraid.' }, { ref: '2 Timothy 1:7', text: 'God gave us a spirit not of fear but of power and love and self-control.' }] },
  { id: 'deceit', name: 'Deceit', eq: 'The Jacob Equation', x: 'Perceived Gain', idol: 'Image and self-protection', worship: 'Truth-telling as walking in the light',
    verse: { ref: 'Ephesians 4:25', text: 'Having put away falsehood, let each one of you speak the truth with his neighbor, for we are members one of another.' },
    prayer: 'God of truth, I would rather be exposed before You than hidden from You.', gratitude: 'Thank God for one truth someone told you that cost them something.', action: 'Correct the record with one person today. Say the plain thing.',
    caseStudy: { figure: 'Ananias and Sapphira', ref: 'Acts 5:1\u201311', outcome: 'fell', scores: { G: 2, S: 3, C: 4, I: 6, T: 7, X: 10 }, narrative: 'They agree together to keep back part of the price and present it as the whole. Community is present but corrupted \u2014 an agreement to deceive is not community, it is isolation with company.' },
    pair: { protagonist: 'Jacob', committing: { title: '"I am Esau"', ref: 'Genesis 27:18\u201324', scores: { G: 2, S: 3, C: 3, I: 7, T: 9, X: 10 }, note: 'Goatskins on his arms, his mother\u2019s plan in his mouth, a blessing to gain.' }, overcoming: { title: '"What is your name?"', ref: 'Genesis 32:24\u201330', scores: { G: 9, S: 6, C: 5, I: 4, T: 5, X: 3 }, note: 'Alone with God at Jabbok he finally answers truthfully \u2014 "Jacob" \u2014 and is renamed.' } },
    cards: [{ ref: 'Colossians 3:9', text: 'Do not lie to one another, seeing that you have put off the old self with its practices.' }, { ref: 'Proverbs 12:22', text: 'Lying lips are an abomination to the LORD, but those who act faithfully are his delight.' }] },
  { id: 'bitterness', name: 'Bitterness', eq: 'The Absalom Equation', x: 'Vindication Hunger', idol: 'Being proven right', worship: 'Forgiving as one forgiven',
    verse: { ref: 'Ephesians 4:31\u201332', text: 'Let all bitterness and wrath and anger... be put away from you... forgiving one another, as God in Christ forgave you.' },
    prayer: 'Jesus, You forgave me a debt I could never pay. I release this one to You.', gratitude: 'Name one sin of yours God has never brought up again.', action: 'Pray for the person by name, asking God to bless them specifically.',
    caseStudy: { figure: 'Absalom', ref: '2 Samuel 13:22\u201329', outcome: 'fell', scores: { G: 2, S: 2, C: 3, I: 9, T: 8, X: 10 }, narrative: '"Absalom spoke to Amnon neither good nor bad." Two years of silence, then murder. Bitterness is the only sin that gets stronger the longer it is left alone.' },
    pair: { protagonist: 'Esau', committing: { title: 'Hatred nursed', ref: 'Genesis 27:41', scores: { G: 2, S: 2, C: 3, I: 8, T: 8, X: 10 }, note: '"I will kill my brother Jacob." Vindication planned in the heart.' }, overcoming: { title: 'Ran to meet him', ref: 'Genesis 33:4', scores: { G: 6, S: 4, C: 7, I: 3, T: 6, X: 2 }, note: 'Twenty years later, four hundred men behind him, he embraces and weeps instead.' } },
    cards: [{ ref: 'Hebrews 12:15', text: 'See to it... that no "root of bitterness" springs up and causes trouble, and by it many become defiled.' }, { ref: 'Romans 12:19', text: 'Never avenge yourselves, but leave it to the wrath of God.' }] },
  { id: 'despair', name: 'Despair', eq: 'The Elijah Equation', x: 'Exhaustion', idol: 'Control of the outcome', worship: 'Lament that ends in trust',
    verse: { ref: 'Psalm 42:11', text: 'Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.' },
    prayer: 'Lord, I am tired and I do not see the way. You are not tired and You see it.', gratitude: 'Name one thing God did this week that you did not do.', action: 'Eat, sleep, and tell one person exactly how you are \u2014 in that order.',
    caseStudy: { figure: 'Elijah', ref: '1 Kings 19:3\u20134', outcome: 'fell', scores: { G: 5, S: 6, C: 1, I: 10, T: 7, X: 10 }, narrative: 'A day after Carmel: "It is enough; now, O LORD, take away my life." He left his servant behind. Isolation and exhaustion both at 10. God\u2019s answer is bread, sleep, and Elisha.' },
    pair: { protagonist: 'Elijah', overcoming: { title: 'Fire on Carmel', ref: '1 Kings 18:36\u201339', scores: { G: 10, S: 9, C: 6, I: 3, T: 8, X: 3 }, note: 'Before all Israel, he prays and the fire falls.' }, committing: { title: 'A broom tree in the desert', ref: '1 Kings 19:3\u20134', scores: { G: 5, S: 6, C: 1, I: 10, T: 7, X: 10 }, note: 'Same prophet, next day. Community collapsed from 6 to 1 and exhaustion did the rest.' } },
    cards: [{ ref: 'Lamentations 3:22\u201323', text: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning.' }, { ref: '2 Corinthians 4:8\u20139', text: 'We are afflicted in every way, but not crushed; perplexed, but not driven to despair.' }] },
  { id: 'slander', name: 'Slander', eq: 'The Miriam Equation', x: 'Audience', idol: 'Being in the know', worship: 'Blessing with the tongue',
    verse: { ref: 'Ephesians 4:29', text: 'Let no corrupting talk come out of your mouths, but only such as is good for building up.' },
    prayer: 'Lord, set a guard over my mouth. Let me say to their face only what I would say before Yours.', gratitude: 'Thank God for someone who spoke well of you when you were not in the room.', action: 'Say something true and good about the person to the same audience you were about to speak to.',
    caseStudy: { figure: 'Miriam', ref: 'Numbers 12:1\u201310', outcome: 'fell', scores: { G: 4, S: 6, C: 4, I: 5, T: 8, X: 9 }, narrative: '"Miriam and Aaron spoke against Moses because of the Cushite woman." An audience of one was enough. "And the LORD heard it."' },
    pair: { protagonist: 'Miriam', overcoming: { title: 'Song at the sea', ref: 'Exodus 15:20\u201321', scores: { G: 10, S: 7, C: 9, I: 1, T: 3, X: 2 }, note: 'Tambourine in hand, leading the women: "Sing to the LORD, for he has triumphed gloriously."' }, committing: { title: 'Speaking against Moses', ref: 'Numbers 12:1', scores: { G: 4, S: 6, C: 4, I: 5, T: 8, X: 9 }, note: 'Same voice. Same gift. Turned from praise to a private critique with an audience.' } },
    cards: [{ ref: 'James 3:9\u201310', text: 'With it we bless our Lord and Father, and with it we curse people... these things ought not to be so.' }, { ref: 'Proverbs 18:21', text: 'Death and life are in the power of the tongue.' }] },
];
export const WORSHIP = [
  { title: 'Be Thou My Vision', artist: 'Ancient Irish \u00b7 arr. Beta Playlist', dur: 254 },
  { title: 'It Is Well With My Soul', artist: 'Spafford / Bliss', dur: 231 },
  { title: 'Come Thou Fount', artist: 'Robinson \u00b7 arr. Beta Playlist', dur: 268 },
  { title: 'Nothing But the Blood', artist: 'Lowry', dur: 199 },
  { title: 'Before the Throne of God Above', artist: 'Bancroft', dur: 287 },
];
export const SABBATH_Q = [
  'Where did I see God\u2019s grace this week?',
  'Which category was most contested?',
  'Which variable moved, and which way?',
  'What am I confessing before the next week begins?',
  'One commitment for the coming week.',
];
export const SEED_JOURNAL = [
  { date: '2026-08-09', cat: 'fear', from: 3, to: 5, v: 'G', r: 0.88, text: 'Spoke up in the meeting. Hands shaking. Prayed Isaiah 41 in the hallway first.' },
  { date: '2026-08-16', cat: 'fear', from: 5, to: 6, v: 'C', r: 1.05, text: 'Told Micah the whole thing. He already knew half of it. Isolation is the lie.' },
  { date: '2026-08-23', cat: 'anger', from: 4, to: 7, v: 'G', r: 1.3, text: 'Waited twenty minutes before replying. It made the difference.' },
  { date: '2026-08-30', cat: 'fear', from: 6, to: 7, v: 'S', r: 1.42, text: 'Isaiah 41:10 came up unbidden. Ammunition works.' },
];
export const PARTNER = { name: 'Micah T.', code: 'FORGE-7K2Q', history: [0.9, 1.1, 1.0, 1.4, 1.6, 1.5, 1.8], lastActive: 3, cat: 'pride' };
export const GROUP = { name: 'Tuesday Men \u00b7 Redeemer', members: [
  { name: 'Micah T.', r: 1.8, cat: 'pride' }, { name: 'Dan O.', r: 0.7, cat: 'lust' }, { name: 'Sam K.', r: 1.3, cat: 'anger' }, { name: 'Jordan P.', r: 1.1, cat: 'fear' }, { name: 'Luis R.', r: 2.1, cat: 'greed' }, { name: 'You', r: 1.42, cat: 'fear' },
], history: [1.0, 1.05, 1.2, 1.18, 1.3, 1.36, 1.4], verses: [
  { ref: 'Isaiah 41:10', by: 'JP' }, { ref: 'James 4:6', by: 'MT' }, { ref: 'Genesis 39:9', by: 'DO' }, { ref: 'Ephesians 4:26', by: 'SK' }, { ref: 'Hebrews 13:5', by: 'LR' }, { ref: 'Psalm 56:3\u20134', by: 'You' }, { ref: 'Proverbs 15:1', by: 'SK' },
], challenge: { by: 'Micah T.', cat: 'anger', scores: { G: 4, S: 5, C: 3, I: 7, T: 9, X: 8 }, results: [{ name: 'Dan O.', pick: 'I' }, { name: 'Sam K.', pick: 'G' }, { name: 'Luis R.', pick: 'I' }] } };
export const CHURCH = { name: 'Redeemer Fellowship', members: 214, optIn: 61, spikes: [
  { cat: 'fear', now: 31, prev: 22 }, { cat: 'lust', now: 27, prev: 25 }, { cat: 'pride', now: 19, prev: 21 }, { cat: 'despair', now: 17, prev: 9 }, { cat: 'anger', now: 14, prev: 16 }, { cat: 'greed', now: 9, prev: 11 },
], falls: 12, debriefs: 9, cohort: { name: '40 Days of Renewal', day: 17, enrolled: 38, plan: ['pride', 'lust', 'envy', 'anger', 'greed', 'appetite', 'sloth', 'fear', 'deceit', 'bitterness', 'despair', 'slander'] },
  prayers: [
    { cat: 'despair', text: 'Third week of not sleeping. Please pray I would eat and rest.', intercessors: 6, ago: '2h' },
    { cat: 'fear', text: 'Hard conversation with my dad Friday.', intercessors: 11, ago: '5h' },
    { cat: 'lust', text: 'Travel this week. Alone in hotels.', intercessors: 14, ago: '1d' },
  ] };
export const TESTIMONIES = [
  { cat: 'lust', trigger: 'Hotel room, 11pm, phone charging on the nightstand.', vars: 'I 9 \u2192 3 \u00b7 G 2 \u2192 7', rebuilt: 'Texted my partner before the trip. He called every night at 10.', ago: '2d' },
  { cat: 'anger', trigger: 'My son broke the same thing twice in a week.', vars: 'X 10 \u2192 5 \u00b7 S 3 \u2192 8', rebuilt: 'James 1:19 taped to the fridge. Read it out loud before I speak.', ago: '4d' },
  { cat: 'despair', trigger: 'Layoff email at 4:12pm on a Friday.', vars: 'C 1 \u2192 6 \u00b7 X 10 \u2192 6', rebuilt: 'Told the group Tuesday. Two of them had been through it. Slept for the first time in a week.', ago: '1w' },
];
export const ROOMS = { pride: 8, lust: 23, envy: 5, anger: 12, greed: 4, appetite: 7, sloth: 9, fear: 19, deceit: 3, bitterness: 11, despair: 16, slander: 2 };
export function rScore(s) { return (s.G + s.S + s.C) / (s.I + s.T + s.X); }
export function status(r) { return r < 0.8 ? 'Exposed' : r < 1.5 ? 'Contested' : 'Fortified'; }
export function leverage(s) {
  const base = rScore(s); let best = null;
  for (const k of Object.keys(VARS)) {
    const side = VARS[k].side; const n = { ...s };
    if (side === 'num') { if (s[k] >= 10) continue; n[k] = s[k] + 1; } else { if (s[k] <= 1) continue; n[k] = s[k] - 1; }
    const gain = rScore(n) - base; if (!best || gain > best.gain) best = { k, gain, r: rScore(n) };
  }
  return best;
}
