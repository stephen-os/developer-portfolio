---
title: "ByteDojo"
description: "A command-line tool for practicing LeetCode and Codeforces problems with spaced repetition and progress tracking"
image: "/projects/bytedojo/placeholder.png"
github: https://github.com/stw-dev/bytedojo
priority: featured
tech:
   - python
   - sqlite
---

# ByteDojo

**ByteDojo** is a command-line tool designed to help developers master coding challenges through structured practice, spaced repetition, and systematic progress tracking. It supports fetching problems from both **LeetCode** and **Codeforces**, allowing you to solve them locally while tracking your learning journey through a local SQLite database.

<div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0'}}>
    <img src="/projects/bytedojo/placeholder.png" alt="ByteDojo CLI Interface" width="600"/>
</div>

## Key Features

### Multi-Platform Problem Support
ByteDojo provides a unified interface for practicing problems from multiple competitive programming platforms:

- **LeetCode** - Access thousands of coding interview problems
- **Codeforces** - Practice competitive programming challenges
- Filter by difficulty, tags, and problem status

```bash
# Fetch a LeetCode problem
dojo leetcode fetch 1

# Query problems by difficulty and tags
dojo leetcode query --difficulty easy --tag array

# Get a random unsolved problem
dojo leetcode pick --difficulty medium --tag "dynamic-programming"
```

### Smart Problem Discovery
Find the perfect problem to practice with powerful filtering options:

- **Query by difficulty** - Filter by easy, medium, or hard
- **Filter by tags** - Array, dynamic programming, tree, graph, and more
- **Interactive pagination** - Browse through results with next/previous navigation
- **Random picker** - Get an unsolved problem matching your criteria

```bash
# List all available tags
dojo leetcode tags

# Query with multiple filters
dojo codeforces query --tag dp --tag graphs
```

### Progress Tracking
Keep track of your learning journey with a local SQLite database:

<div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0'}}>
    <img src="/projects/bytedojo/placeholder-stats.png" alt="Progress Statistics" width="500"/>
</div>

- **Status indicators** - Passed [P], Failed [F], Skipped [S], Not graded [ ]
- **Attempt history** - Track all your solution attempts
- **Statistics** - View aggregated stats by date, difficulty, and platform
- **Notes** - Add notes to your attempts for future reference

```bash
# Grade a solution
dojo grade 1 --pass --note "Used two-pointer technique"

# View your statistics
dojo stats
```

### Spaced Repetition Learning
Reinforce your learning with an SM-2 based spaced repetition system:

- **Automatic scheduling** - Passed problems are scheduled for review
- **Ease factor tracking** - Problems adapt to your performance
- **Review reminders** - Stay on top of problems that need reinforcement

```bash
# See problems due for review
dojo review

# Review statistics
dojo review --stats
```

### Automatic File Generation
When you fetch a problem, ByteDojo generates language-specific solution files:

- **Pre-populated templates** - Problem description and solution stubs included
- **Test frameworks** - Codeforces problems include stdin/stdout test setups
- **Organized directories** - Problems sorted by platform and difficulty

```bash
# Initialize a new dojo repository
dojo init

# Directory structure created:
# .dojo/
#   ├── leetcode/
#   │   ├── easy/
#   │   ├── medium/
#   │   └── hard/
#   └── codeforces/
#       └── problems/
```

## Installation

### Prerequisites
- Python 3.8+
- pip package manager

### Setup
```bash
# Install from PyPI (when published)
pip install bytedojo

# Or install from source
git clone https://github.com/stw-dev/bytedojo.git
cd bytedojo
pip install -e .
```

### Initialize Your Dojo
```bash
# Create a new practice repository
dojo init

# Start practicing!
dojo leetcode fetch 1
```

## Command Reference

### Core Commands
| Command | Description |
|---------|-------------|
| `dojo init` | Initialize a new dojo repository |
| `dojo stats` | View your practice statistics |
| `dojo grade <id>` | Grade a solution attempt |
| `dojo review` | View problems due for review |

### Platform Commands
| Command | Description |
|---------|-------------|
| `dojo leetcode fetch <id>` | Fetch a LeetCode problem |
| `dojo leetcode query` | Search LeetCode problems |
| `dojo leetcode pick` | Get a random problem |
| `dojo leetcode tags` | List available tags |
| `dojo codeforces fetch <id>` | Fetch a Codeforces problem |
| `dojo codeforces query` | Search Codeforces problems |

## Technical Stack

- **Python** - Core language with Click CLI framework
- **SQLAlchemy** - ORM for database operations
- **SQLite** - Local database for progress tracking
- **BeautifulSoup** - HTML parsing for problem extraction
- **Requests** - HTTP client for API communication

## Use Cases

ByteDojo is perfect for:
- **Interview preparation** - Systematic practice with progress tracking
- **Competitive programming** - Organize your Codeforces practice
- **Learning algorithms** - Use spaced repetition to master concepts
- **Building consistency** - Track daily practice and maintain streaks
