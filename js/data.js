/* Single source of truth for the whole site.
   House style: no em-dash or en-dash anywhere in visible copy. Hyphen only. */

const PROFILE = {
  name: "Kelly Cheng Jie Wang",
  short: "Kelly Wang",
  role: "Software Engineer",
  location: "Amsterdam",
  email: "kelly168_wang@hotmail.com",   // TODO: swap if you want a cleaner address
  github: "https://github.com/kuuroooo",
  linkedin: "https://www.linkedin.com/in/kelly-cheng-jie-wang/",
  cv: "assets/KellyWang_CV.pdf",
  photo: "assets/photo.jpg",            // TODO: drop a portrait here (portrait crop, 4:5)

  /* Hero subtext: keep both under 20 words (Section 4.7). */
  intro: "Software engineer in Amsterdam. I build production software for film and TV at Setso, in Scala and TypeScript.",
  /* alt.html names the role in the line above the headline, so this one adds the stack instead of repeating it. */
  introAlt: "Two years shipping a Scala and GraphQL backend, a React web app and a React Native client at Setso.",

  about: [
    "I have two years of production delivery behind me, earned while completing an MSc in Computer Science at VU Amsterdam and the University of Amsterdam (8/10, July 2026).",
    "At Setso I work across a Scala and GraphQL backend, a React web app and a React Native client. Six repositories, containerised services on Terraform-provisioned infrastructure, live at ten production companies. I like owning a change all the way from schema and resolvers through to the UI, and I like finding out why something actually broke.",
    "My thesis went the other direction: multi-agent reinforcement learning for safer conversational AI, LoRA adapters over a frozen Llama-3-8B across four GPUs. It returned a null result, and I reported it as one."
  ],

  languages: ["English", "German", "Luxembourgish", "French", "Mandarin"],

  skills: {
    "Languages": ["TypeScript", "JavaScript", "Scala", "Python", "SQL", "Java", "C++"],
    "Frontend": ["React", "React Native", "Expo", "Vitest", "Maestro"],
    "Backend and infrastructure": ["Scala / JVM", "GraphQL", "Terraform", "Docker", "FastAPI", "Elasticsearch", "PostgreSQL"],
    "Delivery": ["CI/CD", "PR review", "Automated testing", "Agile", "Linear"],
    "Machine learning": ["PyTorch", "Multi-GPU training", "LoRA fine-tuning", "LLM evaluation"]
  }
};

const EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "Setso",
    orgUrl: "",
    place: "Amsterdam",
    period: "Sep 2024 - Present",
    blurb: "Production-management software for film and TV, live at 10 production companies. Seven-person team, six-repository polyglot microservice architecture.",
    points: [
      "Shipped 34 features and 90 improvements across the Scala and GraphQL API, React web app and React Native client, owning 9 end to end from schema and resolvers through to UI, including one change spanning four repositories.",
      "Cut p90 production bug resolution time by 39%, from 26 days to 16, by closing 157 defects (30% of every bug the team resolved) and fixing each at root cause rather than at the reported symptom.",
      "Raised automated test coverage 5.3x, from 615 to 3,271 cases, and grew CI/CD from 2 workflows to 50: pull-request gates, Maestro mobile E2E suites, one-click rollback deploys.",
      "Merged 441 of 469 pull requests opened (94%) across six repositories in 16 months, at a median of 108 lines and 20 hours to merge.",
      "Reviewed 234 pull requests spanning 217,000 lines across seven repositories, requesting changes on 30%, including Go services outside my primary stack."
    ]
  },
  {
    role: "Teaching Assistant, Software Design",
    org: "VU Amsterdam",
    orgUrl: "https://vu.nl",
    place: "Amsterdam",
    period: "Feb 2024 - May 2024",
    blurb: "Design patterns, software architecture and UML for second-year Computer Science students.",
    points: [
      "Mentored five student teams to project completion by running weekly design reviews.",
      "Graded 15 project deliverables across UML models, architecture documents and Java implementations."
    ]
  }
];

const EDUCATION = [
  { school: "VU Amsterdam and University of Amsterdam", degree: "MSc Computer Science, joint degree", note: "Specialisation in Software Engineering and Green IT. Final average 8 / 10", period: "2024-2026" },
  { school: "VU Amsterdam", degree: "BSc Computer Science", note: "Final grade 8.3 / 10", period: "2021-2024" }
];

/* `cover` is a real image path once you have one. Until then the card shows a
   labelled placeholder panel rather than a fake illustration. */
const PROJECTS = [
  {
    id: "mindsafe",
    title: "MindSafe",
    context: "Thesis",
    featured: true,
    tags: ["Python", "PyTorch", "ML", "Multi-Agent", "RL"],
    blurb: "Multi-agent reinforcement learning for safe conversational AI. Three agents, a served judge model, and a null result reported honestly.",
    repo: "https://github.com/kuuroooo/MindSafe",
    demo: null,
    cover: null,   // TODO: training-curve or ablation plot, 1600x1000
    role: "Sole author, VU Amsterdam and University of Amsterdam",
    overview: [
      "MindSafe asks whether a latent-similarity term in a multi-agent RL safety reward actually does anything. Three agents (a coordinator, a therapist and a monitor) respond to a simulated patient in a mental-health chat setting, and an external judge model scores every turn.",
      "The training system runs as LoRA adapters over a frozen Llama-3-8B, as a distributed multi-process job across a four-GPU node, with a separately served 70B model acting as judge."
    ],
    highlights: [
      "Isolated the latent-similarity reward term through controlled ablations across 4 model variants, 5 training checkpoints and 2 held-out evaluation seeds.",
      "Reported a null result: inter-seed spread (0.014) came out the same order of magnitude as the measured effect (0.023), so the effect could not be distinguished from noise.",
      "Built the full three-agent training loop in Python and PyTorch, including reward shaping, checkpointing and the judge-serving pipeline.",
      "Ran the whole thing as a SLURM job on a four-GPU node with a separately hosted 70B judge."
    ],
    stack: ["Python", "PyTorch", "LoRA / PEFT", "Llama-3-8B", "SLURM", "Multi-GPU"],
    takeaway: "The interesting part of this project is the part that did not work. Running the seeds was what turned a promising number into an honest one."
  },
  {
    id: "cookbook",
    title: "Kelly's Cookbook",
    context: "Personal project, in progress",
    featured: false,
    tags: ["TypeScript", "React Native", "Expo", "Supabase", "CI/CD"],
    blurb: "An Expo and React Native app in early development. Auth, Supabase and the CI pipeline are in; the recipe features are next.",
    repo: null,   // private on GitHub; set the URL here if you make it public
    repoNote: "The repository is private while the app is still taking shape. Happy to share access on request.",
    demo: null,
    cover: null,   // TODO: app screenshot or device mockup, 1600x1000
    role: "Solo. Design, build and infrastructure. Ongoing.",
    overview: [
      "An Expo and React Native recipe app, early in its life. What exists today is the foundation rather than the product: Supabase auth, a typed client, a test suite and a CI pipeline that runs on every push.",
      "It is the project where I get to make every call myself, so it is where I keep the standards highest. Strict mode from the first commit, tests before features, no shortcuts I would not accept in a review at work."
    ],
    highlights: [
      "Expo and React Native client written entirely in TypeScript strict mode.",
      "Supabase auth with sign-in and sign-up flows and a typed client.",
      "GitHub Actions CI running the test suite on every push, plus Husky pre-commit hooks catching problems before they get that far.",
      "Set up as a real codebase from the start rather than retrofitted: documented, tested, and ready for a second contributor."
    ],
    stack: ["TypeScript", "React Native", "Expo", "Supabase", "GitHub Actions", "Husky"],
    takeaway: null
  },
  {
    id: "switch",
    title: "Adaptive Object Detection",
    context: "Self-adaptive systems",
    featured: true,
    tags: ["Python", "ML", "FastAPI", "Docker", "Elasticsearch"],
    blurb: "A MAPE-K adaptation strategy that swaps object-detection models at runtime as the request rate moves, built on the SWITCH exemplar.",
    repo: null,
    demo: null,
    cover: null,   // TODO: Kibana dashboard screenshot from the experiment runs, 1600x1000
    role: "Team project, VU Amsterdam",
    overview: [
      "SWITCH is a research exemplar for evaluating self-adaptive ML-enabled systems: a containerised object-detection web service that can swap its underlying model while running. We wrote the adaptation strategy that decides when it should.",
      "The strategy plugs into UPISAS, a unified Python interface for driving self-adaptive exemplars through the MAPE-K loop: monitor, analyse, plan, execute."
    ],
    highlights: [
      "Implemented the analyse and plan stages of a MAPE-K loop: watch the incoming request rate, compare it against per-model throughput thresholds, and switch models when the system drifts outside the band it can serve.",
      "Added a debounce window so a brief spike does not trigger an unnecessary model switch. The system has to sit outside its band for a sustained interval before an adaptation fires, which stopped the loop thrashing between models on noisy traffic.",
      "The planned adaptation clamps the offending threshold back to the edge of the band rather than to the measured rate, so one outlying reading cannot drag the model's operating range with it.",
      "Drove experiments against a replayed real-world trace, with results collected through Elasticsearch and Kibana.",
      "Ran the full stack (FastAPI service, frontend, Elasticsearch, Kibana) through Docker Compose."
    ],
    stack: ["Python", "FastAPI", "Docker Compose", "Elasticsearch", "Kibana", "UPISAS", "SWITCH"],
    takeaway: null
  },
  {
    id: "moesi",
    title: "MOESI Cache Coherence Simulator",
    context: "Computer architecture",
    featured: true,
    tags: ["C++", "SystemC"],
    blurb: "A SystemC simulation of the MOESI cache coherence protocol: multiple processors, 32 KB 8-way caches and one shared snooping bus.",
    repo: null,
    demo: null,
    cover: null,
    role: "Individual assignment, VU Amsterdam",
    overview: [
      "A SystemC model of a cache-coherent multiprocessor. Each CPU drives an 8-way set-associative 32 KB L1 data cache with 32-byte lines, and all of them share a single arbitrated bus onto main memory.",
      "It extends an earlier VALID and INVALID design into full MOESI (Modified, Owned, Exclusive, Shared, Invalid), where the Owned state lets a dirty line be shared read-only without writing back to memory first."
    ],
    highlights: [
      "Implemented the complete MOESI state machine across CPU, Cache, Bus and Memory modules, with bus snooping so every cache reacts to other processors' reads and writes.",
      "Added cache-to-cache transfers: a processor holding a line Modified or Owned supplies it directly on the bus instead of forcing a memory round trip.",
      "Modelled split transactions, so a cache releases the bus while memory services its request in the background.",
      "LRU replacement within each set, tracked per cache line alongside the tag, state and dirty flag.",
      "A levelled logging helper (INFO, DEBUG, ERROR) selectable from the command line, which is what made the interleaved multi-processor traces readable while debugging.",
      "Wrote up hit rate, miss rate and bus traffic against the simpler VALID and INVALID protocol from the previous assignment, isolating what the Owned state actually buys."
    ],
    stack: ["C++", "SystemC"],
    takeaway: null
  },
  {
    id: "tamagotchi",
    title: "Virtual Pet Simulator",
    context: "Software design",
    featured: false,
    tags: ["Java", "Design Patterns", "Gradle"],
    blurb: "A Java Swing pet-raising game built as an exercise in design patterns, and one that keeps ageing while the app is closed.",
    repo: null,
    demo: null,
    cover: null,
    role: "Team project, VU Amsterdam",
    overview: [
      "A desktop virtual pet that eats, sleeps, ages through life stages and eventually dies. The assignment was not really about the game. It was about building it out of clean, named patterns and keeping the UML and the code in step.",
      "The part I like most: the creature keeps living while the program is not running. Vitals decay against real elapsed time, so closing the app and coming back tomorrow has consequences."
    ],
    highlights: [
      "Observer pattern notifying the UI when the creature dies, decoupled from the creature's own logic.",
      "Singleton creature persisted with Java serialization, so a pet survives between sessions.",
      "Vitals decay against real elapsed wall-clock time rather than in-app ticks. The pet ages and starves while the app is closed.",
      "Life stages as an enum-driven progression, with a Swing UI split across selection, game, sleep, minigame and death frames.",
      "Built with Gradle and documented with UML class and sequence diagrams."
    ],
    stack: ["Java", "Gradle", "Swing", "UML", "Design patterns"],
    takeaway: null
  },
  {
    id: "tetris",
    title: "Tetris",
    context: "Functional programming",
    featured: false,
    tags: ["Scala", "FP"],
    blurb: "A full Tetris implementation in Scala built on immutable game state and a polymorphic rotation system.",
    repo: null,
    demo: null,
    cover: null,
    role: "Individual assignment, VU Amsterdam",
    overview: [
      "Tetris with the seven tetrominoes, soft and hard drop, collision, line clears and game over.",
      "The shape hierarchy is where the design lives. An abstract Tetromino declares its starting cells and its two rotations. A General subclass implements rotation once as a 90 degree coordinate transform about the anchor, and five of the seven pieces inherit it untouched. I and O override it, because a square is unchanged by rotation and the I piece turns about an edge rather than a cell centre."
    ],
    highlights: [
      "Rotation is a coordinate map applied across the four cells: Point(-y, x) turning right, the inverse turning left, all relative to the piece anchor.",
      "Only the two pieces that genuinely differ override the shared rotation. The other five declare their starting cells and nothing else.",
      "Moves and rotations are try-then-revert: apply the change, test bounds and collision, undo it if the result is illegal. Simpler than a wall-kick table and the board can never be left in an invalid state.",
      "Cells are stored relative to a mutable anchor, so moving a piece updates one point rather than rewriting four coordinates.",
      "Constructor overloads inject the random generator and a starting board, so tests run deterministically against a fixed piece sequence."
    ],
    stack: ["Scala", "Inheritance", "Pattern matching"],
    takeaway: null
  },
  {
    id: "snake",
    title: "Snake with Time Rewind",
    context: "Functional programming",
    featured: false,
    tags: ["Scala", "FP"],
    blurb: "Snake with screen wrapping and a reverse mechanic that rewinds the game frame by frame.",
    repo: null,
    demo: null,
    cover: null,
    role: "Individual assignment, VU Amsterdam",
    overview: [
      "Classic Snake on a wrapping grid, with a reverse key that walks the whole game backwards through its own history.",
      "The live state is mutable: a ListBuffer for the body, plain vars for direction, apple and growth. The rewind works anyway because every tick pushes an immutable Frame snapshot onto a cons list before any mutation happens. Reversing is popping snapshots off that list, not inverting the game logic."
    ],
    highlights: [
      "Each step records a Frame (body, heading, apple position, grow counter) onto the front of a cons list before mutating anything. Reverse restores from the head of that list.",
      "Rewinding clears the game-over flag, so you can reverse back out of a collision you already ran into.",
      "Direction input is buffered in a queue rather than applied on the keypress, so two keys inside one tick cannot fold the snake back into its own neck.",
      "Apple placement draws a uniform index over the remaining empty cells and scans for that cell, rather than guessing a random point and retrying. It stays correct as the board fills up.",
      "Screen wrapping handled in one place, where the next head position is computed."
    ],
    stack: ["Scala", "Pattern matching", "Immutable snapshots"],
    takeaway: "The rewind looked like the hard feature and turned out to be the cheap one. Snapshotting before each mutation cost four fields per tick and made reversal fall out for free."
  },
  {
    id: "repl",
    title: "REPL Calculators",
    context: "Object-oriented programming",
    featured: false,
    tags: ["Scala", "OOP"],
    blurb: "Two read-eval-print loops, over integers and over multisets, sharing one generic base. Both evaluate expressions and simplify ones that still contain unbound variables.",
    repo: null,
    demo: null,
    cover: null,
    role: "Individual assignment, VU Amsterdam",
    overview: [
      "Two REPLs: one over integers, one over multisets of strings. Both support variable assignment, evaluation, and symbolic simplification of expressions that still contain unbound variables.",
      "The shared base is generic over an abstract type member. IntREPL binds it to Int, MultiSetREPL binds it to MultiSet[String]. Parsing, variable binding and the simplification driver are written once against that abstract type, and each REPL supplies only its own arithmetic and its own algebraic identities.",
      "The part I would still defend is the simplifier. Prefixing an expression with @ rewrites it instead of evaluating it, so it can return an answer for an expression whose variables have no value yet."
    ],
    highlights: [
      "Shunting-yard parser turning infix input into RPN against an operator-precedence table, then building an expression tree from the RPN.",
      "Simplification runs to a fixed point: apply the rewrite rules, compare against the previous tree, repeat until it stops changing.",
      "Rewrite rules written as pattern matches over the tree. Identity and annihilator laws for 0 and 1, constant folding, x - x collapsing to 0, and regrouping when two sub-expressions share an operand and an operator.",
      "MultiSet is an immutable case class over a Map from element to count, with +, - and * overloaded as union, difference and intersection.",
      "Both REPLs are reached through a factory the assignment supplied, so neither implementation knows about the other."
    ],
    stack: ["Scala", "Abstract type members", "Pattern matching", "Shunting-yard"],
    takeaway: null
  }
];
