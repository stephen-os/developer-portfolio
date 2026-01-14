---
title: "Kioku"
description: "A full-stack flashcard application with code syntax highlighting, 3D animations, and spaced repetition learning"
image: "/projects/kioku/placeholder.png"
github: https://github.com/stw-dev/kioku-web
priority: featured
tech:
   - typescript
   - react
   - nextjs
   - java
   - spring
   - postgresql
---

# Kioku

**Kioku** (Japanese for "memory") is a full-stack flashcard application designed for developers and learners. It features an elegant dark-themed interface with 3D card flip animations, syntax-highlighted code snippets, and intuitive study modes. The application consists of a Next.js frontend and a Spring Boot REST API backend, working together to provide a seamless learning experience.

<div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0'}}>
    <img src="/projects/kioku/placeholder.png" alt="Kioku Dashboard" width="600"/>
</div>

## Key Features

### Interactive Study Mode
A focused study experience with smooth animations and intuitive controls:

<div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0'}}>
    <img src="/projects/kioku/placeholder-study.png" alt="Study Mode Interface" width="500"/>
</div>

- **3D flip animations** - Satisfying card flip effect when revealing answers
- **Touch gestures** - Swipe left/right on mobile to navigate cards
- **Keyboard shortcuts** - Space to flip, arrow keys to navigate
- **Progress tracking** - Visual progress bar showing completion
- **Card shuffling** - Randomize order for better retention
- **Smart filtering** - Study by tags with "any" or "all" matching modes

```typescript
// Keyboard shortcuts for efficient studying
useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.code === 'Space') flipCard();
        if (e.code === 'ArrowRight') nextCard();
        if (e.code === 'ArrowLeft') previousCard();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

### Code Syntax Highlighting
First-class support for programming flashcards with CodeMirror integration:

- **30+ languages** - JavaScript, Python, Java, Rust, Go, SQL, and more
- **Monokai theme** - Beautiful syntax highlighting that's easy on the eyes
- **Rich editor** - Full CodeMirror editor for creating code cards
- **Read-only display** - Clean code rendering during study sessions

```java
// Backend support for code content types
public enum CodeLanguage {
    JAVASCRIPT, TYPESCRIPT, PYTHON, JAVA, KOTLIN,
    RUST, GO, C, CPP, CSHARP, SWIFT, RUBY, PHP,
    SQL, HTML, CSS, YAML, JSON, XML, MARKDOWN,
    BASH, POWERSHELL, DOCKERFILE, SCALA, HASKELL, LUA
}
```

### Deck & Card Management
Organize your flashcards into themed collections:

<div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0'}}>
    <img src="/projects/kioku/placeholder-decks.png" alt="Deck Management" width="500"/>
</div>

- **Create and organize** - Build decks for any subject
- **Two-sided cards** - Front for questions, back for answers
- **Content types** - Plain text or syntax-highlighted code
- **Notes field** - Add extra context or hints
- **Tag support** - Organize cards within decks
- **Per-user isolation** - Decks are private to each user

### Import/Export
Share and backup your flashcard collections:

- **JSON export** - Download complete decks with all cards and tags
- **Bulk import** - Upload JSON files to create decks
- **Validation** - Content type and language validation during import
- **Atomic operations** - Transactional import/export ensures data integrity

```bash
# Export endpoint
GET /api/export/deck/{deckId}

# Import endpoint
POST /api/import/deck
Content-Type: application/json
```

### Secure Authentication
JWT-based authentication with full account management:

- **Registration & login** - Email and password authentication
- **Token-based sessions** - Stateless authentication for scalability
- **Password reset** - Email-based recovery
- **Account management** - Update email, change password, delete account

## Architecture

Kioku is built as a modern full-stack application with clear separation of concerns:

```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend (Next.js)                      │
├─────────────────────────────────────────────────────────────┤
│  React 19  │  TypeScript  │  Tailwind CSS  │  CodeMirror   │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ REST API (JSON)
                              │ JWT Authentication
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend (Spring Boot)                     │
├─────────────────────────────────────────────────────────────┤
│  Java 25  │  Spring Security  │  Spring Data JPA  │  JWT   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        PostgreSQL                            │
└─────────────────────────────────────────────────────────────┘
```

### Data Model
```
User (1) ──────< Deck (*)
                   │
                   ├──< Card (*)
                   │       │
                   │       └──<>── Tag (*)
                   │
                   └──< Tag (*)
```

## API Reference

### Authentication
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | Create new account |
| `/api/auth/login` | POST | Authenticate user |

### Decks
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/decks` | GET | List all decks |
| `/api/decks` | POST | Create deck |
| `/api/decks/{id}` | GET | Get deck |
| `/api/decks/{id}` | PUT | Update deck |
| `/api/decks/{id}` | DELETE | Delete deck |

### Cards
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/cards/deck/{deckId}` | GET | List deck cards |
| `/api/cards/deck/{deckId}` | POST | Create card |
| `/api/cards/{id}` | PUT | Update card |
| `/api/cards/{id}` | DELETE | Delete card |

### Tags & Import/Export
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/tags/deck/{deckId}` | GET | List deck tags |
| `/api/export/deck/{deckId}` | GET | Export deck as JSON |
| `/api/import/deck` | POST | Import deck from JSON |

## Technical Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **CodeMirror 6** - Code editor with syntax highlighting
- **Axios** - HTTP client for API requests

### Backend
- **Java 25** - Latest Java features
- **Spring Boot 4.0** - Production-ready framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database abstraction
- **PostgreSQL** - Production database
- **JWT (jjwt)** - Token-based authentication
- **Docker Compose** - Development environment

## Getting Started

### Prerequisites
- Node.js 18+ (frontend)
- Java 25+ (backend)
- Docker and Docker Compose
- PostgreSQL (or use Docker)

### Backend Setup
```bash
# Clone the API repository
git clone https://github.com/stw-dev/kioku-api.git
cd kioku-api

# Start PostgreSQL with Docker
docker-compose up -d

# Run the application
./gradlew bootRun
```

### Frontend Setup
```bash
# Clone the web repository
git clone https://github.com/stw-dev/kioku-web.git
cd kioku-web

# Install dependencies
npm install

# Configure environment
echo "NEXT_PUBLIC_API_URL=http://localhost:8080/api" > .env.local

# Start development server
npm run dev
```

## Use Cases

Kioku is perfect for:
- **Programming study** - Code snippets with syntax highlighting
- **Technical interview prep** - Questions with code examples
- **Language learning** - Vocabulary and grammar flashcards
- **Academic study** - Any subject with Q&A format
- **Professional development** - Learn new frameworks and tools
