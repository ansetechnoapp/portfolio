# Memory Bank System: Project Documentation Guide

## Introduction
Systematic approach for maintaining perfect project documentation through structured markdown files. Ensures continuity and clarity across development sessions.

## Core Documentation Structure

### 1. Foundation Layer (`projectbrief.md`)
- Establishes project fundamentals, scope, and objectives
- Created at project initiation
- Guides all subsequent documentation

### 2. Context Layer
**Product Context** (`productContext.md`):
- Project purpose, value proposition, problem space
- User experience requirements, expected outcomes

**Technical Context** (`techContext.md`):
- Technology stack, development environment
- System constraints, external dependencies

**System Patterns** (`systemPatterns.md`):
- Architectural decisions, design patterns
- Component architecture, critical pathways

### 3. Active Layer
**Active Context** (`activeContext.md`):
- Current development focus, recent changes
- Upcoming tasks, key decisions, emerging patterns

**Progress Tracking** (`progress.md`):
- Completed/pending features, project status
- Issue tracking, decision history

## Code Quality Guidelines

### 1. Syntax Error Prevention
- Review code pre-commit
- Use linters/formatters
- Test incrementally
- Verify variables/syntax

### 2. Task Breakdown
1. **Analyze**: Understand objectives/constraints  
2. **Decompose**: Split into sequenced tasks; identify dependencies  
3. **Plan**: Estimate effort; set milestones  
4. **Execute & Review**: Track progress; verify outcomes; adjust as needed  

### 3. Database Best Practices (if we use database)

- Follow schema conventions; align code with structure  
- Before modifications:  
  - Analyze impact  
  - Ensure compatibility  
  - Backup database  
- Test changes; document modifications/rollbacks  

### 4. Deletion Protocol
- Move files/folders to `useless/` directory  
- Never delete directly  

### 5. Testing Guidelines
- **Organization**: Store in `tests/` with consistent naming  
- **Execution**:  
  - Isolate environment  
  - Use test runners  
  - Separate/clean test data  
- **Maintenance**: Update tests with code changes  
- **Documentation**: Include setup steps, expected outcomes  

### 6. Documentation Guidelines
- **Organization**: Store in `docs/` directory
- **Consistency**: Maintain consistent structure across files
- **Updates**: Regularly review and update documentation  

### 7. Package Manager Preferences
- Use pnpm as the preferred package manager for NodeJS projects

## Best Practices
- Update documentation promptly  
- Prioritize `activeContext.md` and `progress.md`  
- Review all files regularly  
- Ensure documentation reflects current state  

> **Critical**: When triggering **update memory bank**, review ALL files. After memory resets, the Memory Bank is your ONLY continuity source - its accuracy dictates project success. Treat as single source of truth.